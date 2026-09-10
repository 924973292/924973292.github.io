"""Refresh the public Google Scholar snapshot used by the homepage."""

import json
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

from scholarly import scholarly


SCHOLAR_ID = os.environ.get("GOOGLE_SCHOLAR_ID") or "WZvjVLkAAAAJ"
RESULTS_DIR = Path(__file__).parent / "results"
FALLBACK_BASE_URL = (
    "https://raw.githubusercontent.com/924973292/924973292.github.io/"
    "google-scholar-stats/google_scholar_crawler/results"
)
GITHUB_USERNAME = os.environ.get("GITHUB_USERNAME", "924973292")
GITHUB_API_URL = f"https://api.github.com/users/{GITHUB_USERNAME}/repos"

scholarly.set_timeout(int(os.environ.get("SCHOLAR_TIMEOUT_SECONDS", "30")))
scholarly.set_retries(int(os.environ.get("SCHOLAR_RETRIES", "1")))


def fetch_author():
    author = scholarly.search_author_id(SCHOLAR_ID)
    scholarly.fill(author, sections=["basics", "indices", "counts", "publications"])
    author["updated"] = datetime.now(timezone.utc).isoformat()
    author["scholar_id"] = SCHOLAR_ID
    author["publications"] = {
        publication.get("author_pub_id", str(index)): publication
        for index, publication in enumerate(author.get("publications", []))
    }
    return author


def write_json(path: Path, payload: dict) -> None:
    path.write_text(
        json.dumps(payload, ensure_ascii=False, indent=2),
        encoding="utf-8",
    )


def request_json(url: str, headers: dict | None = None) -> object:
    request_headers = {"User-Agent": "924973292-research-portfolio"}
    if headers:
        request_headers.update(headers)
    with urlopen(Request(url, headers=request_headers), timeout=20) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def load_last_snapshot(filename: str) -> dict:
    """Load the last successful snapshot when Scholar blocks CI requests."""
    local_path = RESULTS_DIR / filename
    if local_path.exists():
        return json.loads(local_path.read_text(encoding="utf-8"))

    return request_json(f"{FALLBACK_BASE_URL}/{filename}")


def fetch_github_repositories() -> dict:
    """Sum stars across every public repository returned for the account."""
    repositories = []
    page = 1
    headers = {}
    token = os.environ.get("GITHUB_TOKEN")
    if token:
        headers["Authorization"] = f"Bearer {token}"

    while True:
        response = request_json(
            f"{GITHUB_API_URL}?type=all&per_page=100&page={page}",
            headers=headers,
        )
        if not isinstance(response, list):
            raise RuntimeError("GitHub repositories response was not a list")
        repositories.extend(response)
        if len(response) < 100:
            break
        page += 1

    return {
        "username": GITHUB_USERNAME,
        "repository_count": len(repositories),
        "stars": sum(int(repository.get("stargazers_count", 0)) for repository in repositories),
        "include_forks": True,
        "repositories": [
            {
                "name": repository.get("name"),
                "full_name": repository.get("full_name"),
                "url": repository.get("html_url"),
                "stars": repository.get("stargazers_count", 0),
                "fork": repository.get("fork", False),
                "language": repository.get("language"),
            }
            for repository in repositories
        ],
        "updated": datetime.now(timezone.utc).isoformat(),
        "source": "GitHub REST API",
    }


def scholar_snapshot(author: dict, refreshed_at: str) -> dict:
    publications = []
    for publication in author.get("publications", {}).values():
        bib = publication.get("bib", {})
        citation_id = publication.get("author_pub_id")
        publications.append(
            {
                "id": citation_id,
                "title": bib.get("title", ""),
                "authors": bib.get("author", ""),
                "venue": bib.get("venue", ""),
                "year": bib.get("pub_year"),
                "citations": publication.get("num_citations", 0),
                "url": (
                    "https://scholar.google.com/citations?"
                    f"view_op=view_citation&user={SCHOLAR_ID}"
                    f"&citation_for_view={citation_id}"
                ),
            }
        )
    return {
        "available": True,
        "citations": author.get("citedby", 0),
        "publication_count": len(publications),
        "publications": publications,
        "source_updated": author.get("updated"),
        "refreshed_at": refreshed_at,
        "source": "Google Scholar via scholarly",
    }


def main():
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    refreshed_at = datetime.now(timezone.utc).isoformat()
    try:
        author = fetch_author()
        scholar = scholar_snapshot(author, refreshed_at)
    except Exception as error:  # Scholar frequently rate-limits shared CI addresses.
        author = load_last_snapshot("gs_data.json")
        scholar = scholar_snapshot(author, refreshed_at)
        scholar["available"] = False
        scholar["fallback_reason"] = type(error).__name__
        print(
            "Google Scholar refresh unavailable; preserved the last successful "
            f"snapshot ({type(error).__name__})."
        )

    try:
        github = fetch_github_repositories()
    except (HTTPError, URLError, RuntimeError, ValueError) as error:
        try:
            previous = load_last_snapshot("live_snapshot.json")
            github = previous.get("github", {})
        except Exception:
            github = {
                "username": GITHUB_USERNAME,
                "repository_count": 0,
                "stars": 0,
                "include_forks": True,
                "repositories": [],
                "updated": None,
                "source": "GitHub REST API unavailable",
            }
        github["available"] = False
        github["fallback_reason"] = type(error).__name__
        print(
            "GitHub repository refresh unavailable; preserved the last successful "
            f"snapshot ({type(error).__name__})."
        )

    write_json(RESULTS_DIR / "gs_data.json", author)
    write_json(RESULTS_DIR / "gs_data_shieldsio.json", {
        "schemaVersion": 1,
        "label": "citations",
        "message": str(scholar.get("citations", 0)),
    })
    write_json(RESULTS_DIR / "live_snapshot.json", {
        "schema_version": 1,
        "updated": refreshed_at,
        "scholar": scholar,
        "github": github,
    })
    print(
        f"Updated {author.get('name', 'author')} — "
        f"{scholar.get('citations', 0)} citations, "
        f"{scholar.get('publication_count', 0)} Scholar publications, "
        f"{github.get('stars', 0)} GitHub stars across "
        f"{github.get('repository_count', 0)} public repositories"
    )


if __name__ == "__main__":
    main()
