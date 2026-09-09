"""Refresh the public Google Scholar snapshot used by the homepage."""

import json
import os
from datetime import datetime, timezone
from pathlib import Path

from scholarly import scholarly


SCHOLAR_ID = os.environ.get("GOOGLE_SCHOLAR_ID", "WZvjVLkAAAAJ")
RESULTS_DIR = Path(__file__).parent / "results"


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


def main():
    author = fetch_author()
    RESULTS_DIR.mkdir(parents=True, exist_ok=True)
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
