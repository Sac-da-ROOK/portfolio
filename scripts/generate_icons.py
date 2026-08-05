from pathlib import Path
import zlib
import struct

PUBLIC_DIR = Path(__file__).resolve().parent.parent / "public"
PUBLIC_DIR.mkdir(exist_ok=True)


def png_chunk(chunk_type: bytes, data: bytes) -> bytes:
    return struct.pack("!I", len(data)) + chunk_type + data + struct.pack("!I", zlib.crc32(chunk_type + data) & 0xFFFFFFFF)


def make_png(path: Path, width: int, height: int, pixel_fn):
    raw = bytearray()
    for y in range(height):
        raw.append(0)
        for x in range(width):
            raw.extend(pixel_fn(x, y, width, height))
    compressed = zlib.compress(bytes(raw), 9)
    with path.open("wb") as f:
        f.write(b"\x89PNG\r\n\x1a\n")
        f.write(png_chunk(b"IHDR", struct.pack("!IIBBBBB", width, height, 8, 6, 0, 0, 0)))
        f.write(png_chunk(b"IDAT", compressed))
        f.write(png_chunk(b"IEND", b""))
    print(f"Generated {path}")


def icon_color(x, y, width, height, scale=1.0):
    bg = (2, 6, 23, 255)
    cx = width * 0.55
    cy = height * 0.45
    r = width * 0.25 * scale
    if (x - cx) ** 2 + (y - cy) ** 2 < r ** 2:
        return (34, 211, 238, 255)
    if x > width * 0.22 and x < width * 0.72 and y > height * 0.55:
        return (255, 255, 255, 255)
    return bg


def og_color(x, y, width, height):
    bg = (2, 6, 23, 255)
    cx = width * 0.58
    cy = height * 0.42
    r = width * 0.18
    if (x - cx) ** 2 + (y - cy) ** 2 < r ** 2:
        return (34, 211, 238, 255)
    if height * 0.65 < y < height * 0.72 and width * 0.15 < x < width * 0.85:
        return (255, 255, 255, 255)
    if height * 0.8 < y < height * 0.86 and width * 0.2 < x < width * 0.82:
        return (255, 255, 255, 255)
    return bg


if __name__ == "__main__":
    make_png(PUBLIC_DIR / "apple-touch-icon.png", 180, 180, lambda x, y, w, h: icon_color(x, y, w, h))
    make_png(PUBLIC_DIR / "android-chrome-192x192.png", 192, 192, lambda x, y, w, h: icon_color(x, y, w, h))
    make_png(PUBLIC_DIR / "android-chrome-512x512.png", 512, 512, lambda x, y, w, h: icon_color(x, y, w, h))
    make_png(PUBLIC_DIR / "og-image.png", 1200, 630, og_color)
