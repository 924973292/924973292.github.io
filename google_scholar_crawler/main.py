"""Refresh the public Google Scholar snapshot used by the homepage."""

import json
import os
from datetime import datetime, timezone
from pathlib import Path
from urllib.request import urlopen

from scholarly import scholarly


SCHOLAR_ID = os.environ.get("GOOGLE_SCHOLAR_ID") or "WZvjVLkAAAAJ"
RESULTS_DIR = Path(__file__).parent / "results"
FALLBACK_BASE_URL = (
    "https://raw.githubusercontent.com/924973292/924973292.github.io/"
    "google-scholar-stats/google_scholar_crawler/results"
)

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


def load_last_snapshot(filename: str) -> dict:
    """Load the last successful snapshot when Scholar blocks CI requests."""
    local_path = RESULTS_DIR / filename
    if local_path.exists():
        return json.loads(local_path.read_text(encoding="utf-8"))

    with urlopen(f"{FALLBACK_BASE_URL}/{filename}", timeout=20) as response:
        return json.loads(response.read().decode("utf-8-sig"))


def main():
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
    try:
        author = fetch_author()
    except Exception as error:  # Scholar frequently rate-limits shared CI addresses.
        author = load_last_snapshot("gs_data.json")
        shield = load_last_snapshot("gs_data_shieldsio.json")
        write_json(RESULTS_DIR / "gs_data.json", author)
        write_json(RESULTS_DIR / "gs_data_shieldsio.json", shield)
        print(
            "Google Scholar refresh unavailable; preserved the last successful "
            f"snapshot ({type(error).__name__})."
        )
        return

    write_json(RESULTS_DIR / "gs_data.json", author)
    write_json(
        RESULTS_DIR / "gs_data_shieldsio.json",
        {
            "schemaVersion": 1,
            "label": "citations",
            "message": str(author.get("citedby", 0)),
        },
    )
    print(
        f"Updated {author.get('name', 'author')} — "
        f"{author.get('citedby', 0)} citations, {len(author['publications'])} publications"
    )


if __name__ == "__main__":
    main()
