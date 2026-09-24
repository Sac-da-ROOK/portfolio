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


def clean_title(value: str) -> str:
    value = value.strip()
    value = re.sub(r"^\?{1,2}\s*", "", value)
    value = re.sub(r"^\s*[\u2600-\u26FF\U0001F300-\U0001FAFF]+\s*", "", value)
    value = value.strip()
    return value


for path in sorted(root.glob("*.md")):
    if path.name == "_template.md":
        continue

    text = path.read_text(encoding="utf-8")
    if not text.startswith("---\n"):
        continue

    title_match = re.search(r'^title:\s*(?:"([^"]+)"|\'([^\']+)\'|(.+))\s*$', text, re.M)
    category_match = re.search(r'^category:\s*(?:"([^"]+)"|\'([^\']+)\'|(.+))\s*$', text, re.M)
    if not title_match or not category_match:
        continue

    raw_title = next((g for g in title_match.groups() if g is not None), "")
    category = next((g for g in category_match.groups() if g is not None), "")
    title = clean_title(raw_title)
    if not title:
        continue

    emoji = emoji_by_category.get(category.strip(), "✨")
    if title.startswith(emoji):
        continue

    new_title = f"{emoji} {title}"

    text = re.sub(r'^title:\s*(?:"[^"]*"|\'[^\']*\'|.+)$', f'title: "{new_title}"', text, count=1, flags=re.M)
    text = re.sub(r'\*\*' + re.escape(raw_title) + r'\*\*', f'**{new_title}**', text, count=1)
    text = text.replace(f"**{title}**", f"**{new_title}**", 1)
    path.write_text(text, encoding="utf-8")
    print(f"updated {path.name}")

print("done")
