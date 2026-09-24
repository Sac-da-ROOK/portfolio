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


def parse_value(match):
    for group in match.groups():
        if group is not None:
            return group.strip()
    return ""


for path in sorted(root.glob("*.md")):
    if path.name == "_template.md":
        continue

    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        continue

    title_match = re.search(r'^title:\s*(?:"([^"]*)"|\'([^\']*)\'|(.+))\s*$', text, re.M)
    category_match = re.search(r'^category:\s*(?:"([^"]*)"|\'([^\']*)\'|(.+))\s*$', text, re.M)
    if not title_match or not category_match:
        continue

    title = parse_value(title_match)
    category = parse_value(category_match)

    # Clean malformed earlier edits such as "?? " and stray emoji prefixes.
    title = re.sub(r'^(?:\?\?\s*|[\u2600-\u26FF\U0001F300-\U0001FAFF]+\s*)+', '', title).strip()
    if not title:
        continue

    emoji = emoji_by_category.get(category, "✨")
    if title.startswith(emoji):
        continue

    final_title = f"{emoji} {title}"
    text = text.replace(f'title: "{title}"', f'title: "{final_title}"', 1)
    text = text.replace(f"title: '{title}'", f"title: '{final_title}'", 1)
    text = text.replace(f"**{title}**", f"**{final_title}**", 1)
    path.write_text(text, encoding="utf-8")
    print(f"updated {path.name}")

print("done")
