import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

export type GalleryMediaType = "photo" | "video";

export type GalleryMetadataEntry = {
    src: string;
    type?: GalleryMediaType;
    caption?: string;
    article?: string | null;
};

export type GalleryItem = {
    src: string;
    type: GalleryMediaType;
    title: string;
    source?: string;
    caption?: string;
    articleSlug?: string;
    articleTitle?: string;
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const videoExtensions = new Set([".mp4", ".webm", ".mov", ".m4v"]);

function normalizeMediaPath(fileName: string) {
    return `/gallery/${fileName}`;
}

function normalizeMetadataSource(source: string) {
    const trimmed = source.trim();
    if (!trimmed) {
        return "";
    }

    const normalized = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
    return normalized.replace(/\/+/g, "/");
}

function normalizeArticleSlug(article: string | undefined | null) {
    if (!article) {
        return undefined;
    }

    const trimmed = article.trim();
    if (!trimmed) {
        return undefined;
    }

    const withoutLeadingSlash = trimmed.replace(/^\/+/, "");
    if (!withoutLeadingSlash) {
        return undefined;
    }

    const noTrailingSlash = withoutLeadingSlash.replace(/\/+$/, "");
    if (!noTrailingSlash) {
        return undefined;
    }

    if (noTrailingSlash.startsWith("lab-journal/")) {
        return noTrailingSlash.replace(/^lab-journal\//, "");
    }

    if (noTrailingSlash === "lab-journal") {
        return undefined;
    }

    return noTrailingSlash;
}

async function getGalleryMetadataMap() {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    const metadataPath = path.join(galleryDir, "media.json");
    const metadataMap = new Map<string, GalleryMetadataEntry>();

    try {
        const raw = await readFile(metadataPath, "utf8");
        const parsed = JSON.parse(raw) as unknown;

        if (!Array.isArray(parsed)) {
            return metadataMap;
        }

        for (const entry of parsed) {
            if (!entry || typeof entry !== "object") {
                continue;
            }

            const candidate = entry as Partial<GalleryMetadataEntry>;
            const source = typeof candidate.src === "string" ? normalizeMetadataSource(candidate.src) : "";
            if (!source) {
                continue;
            }

            metadataMap.set(source, {
                src: source,
                type: candidate.type === "video" ? "video" : "photo",
                caption: typeof candidate.caption === "string" ? candidate.caption.trim() || undefined : undefined,
                article: typeof candidate.article === "string" ? candidate.article.trim() || null : null,
            });
        }
    } catch {
        return metadataMap;
    }

    return metadataMap;
}

async function getGallerySidecarMetadataMap() {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    const metadataMap = new Map<string, GalleryMetadataEntry>();

    try {
        const files = await readdir(galleryDir, { withFileTypes: true });
        const sidecars = files
            .filter((entry) => entry.isFile() && entry.name.endsWith(".caption.json"))
            .map((entry) => entry.name);

        for (const fileName of sidecars) {
            try {
                const filePath = path.join(galleryDir, fileName);
                const raw = await readFile(filePath, "utf8");
                const parsed = JSON.parse(raw) as Partial<GalleryMetadataEntry>;
                if (!parsed || typeof parsed !== "object" || typeof parsed.src !== "string") {
                    continue;
                }

                metadataMap.set(normalizeMetadataSource(parsed.src), {
                    src: normalizeMetadataSource(parsed.src),
                    type: parsed.type === "video" ? "video" : "photo",
                    caption: typeof parsed.caption === "string" ? parsed.caption.trim() || undefined : undefined,
                    article: typeof parsed.article === "string" ? parsed.article.trim() || null : null,
                });
            } catch {
                continue;
            }
        }
    } catch {
        return metadataMap;
    }

    return metadataMap;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
    const galleryDir = path.join(process.cwd(), "public", "gallery");
    const metadataMap = await getGalleryMetadataMap();
    const sidecarMap = await getGallerySidecarMetadataMap();

    try {
        const files = await readdir(galleryDir, { withFileTypes: true });
        const mediaFiles = files
            .filter((entry) => entry.isFile())
            .map((entry) => entry.name)
            .filter((fileName) => {
                const extension = path.extname(fileName).toLowerCase();
                return imageExtensions.has(extension) || videoExtensions.has(extension);
            })
            .sort((a, b) => a.localeCompare(b));

        return mediaFiles.map((fileName) => {
            const extension = path.extname(fileName).toLowerCase();
            const src = normalizeMediaPath(fileName);
            const metadata = metadataMap.get(src) ?? sidecarMap.get(src) ?? metadataMap.get(normalizeMetadataSource(fileName)) ?? sidecarMap.get(normalizeMetadataSource(fileName));
            const title = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

            return {
                src,
                type: imageExtensions.has(extension) ? "photo" : "video",
                title,
                caption: metadata?.caption,
                articleSlug: normalizeArticleSlug(metadata?.article),
            };
        });
    } catch {
        return [];
    }
}
