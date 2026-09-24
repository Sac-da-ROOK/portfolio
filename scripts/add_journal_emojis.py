from pathlib import Path
import re

root = Path(r"c:\Users\aarus\OneDrive\Desktop\portfolio\content\journal")
emoji_by_category = {
    "Science": "🔭",
    "Coding & Computer Science": "💻",
    "Robotics & Engineering": "🤖",
    "AI & Emerging Technology": "🧠",
    "Competitions & STEM Journey": "🏆",
    "Chess + STEM": "♟️",
    "Learning, School & Student Life": "📚",
}


def sanitize_title(value: str) -> str:
    value = value.strip()
    value = re.sub(r'^[^A-Za-z0-9]+', '', value)
    value = value.strip()
    return value


for path in sorted(root.glob("*.md")):
    if path.name == "_template.md":
        continue

    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        continue

    title_match = re.search(r'^title:\s*["\']?(.*?)[