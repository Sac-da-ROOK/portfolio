import { readdir } from "node:fs/promises";
import path from "node:path";

export type GalleryMediaType = "photo" | "video";

export type GalleryItem = {
    src: string;
    type: GalleryMediaType;
    title: string;
    source?: string;
    articleSlug?: string;
    articleTitle?: string;
};

const imageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const videoExtensions = new Set([".mp4", ".webm", ".mov", ".m4v"]);

function normalizeMediaPath(fileName: string) {
    return `/gallery/${fileName}`;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
    const galleryDir = path.join(process.cwd(), "public", "gallery");

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
            const title = fileName.replace(/\.[^/.]+$/, "").replace(/[-_]+/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());

            return {
                src: normalizeMediaPath(fileName),
                type: imageExtensions.has(extension) ? "photo" : "video",
                title,
            };
        });
    } catch {
        return [];
    }
}
