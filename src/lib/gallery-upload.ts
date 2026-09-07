import { Buffer } from "node:buffer";
import path from "node:path";

export type GalleryUploadType = "photo" | "video";

export type GalleryUploadConfig = {
    githubOwner: string;
    githubRepo: string;
    githubBranch: string;
    githubToken: string;
    maxUploadBytes: number;
    maxPhotoBytes: number;
    maxVideoBytes: number;
};

const defaultMaxPhotoBytes = 10 * 1024 * 1024;
const defaultMaxVideoBytes = 25 * 1024 * 1024;
const defaultMaxUploadBytes = 25 * 1024 * 1024;

const allowedImageMimeTypes = new Set([
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/gif",
]);

const allowedVideoMimeTypes = new Set([
    "video/mp4",
    "video/webm",
    "video/quicktime",
]);

const allowedImageExtensions = new Set([".jpg", ".jpeg", ".png", ".webp", ".gif"]);
const allowedVideoExtensions = new Set([".mp4", ".webm", ".mov"]);

export function getGalleryUploadConfig(): GalleryUploadConfig | null {
    const githubOwner = process.env.GITHUB_OWNER?.trim();
    const githubRepo = process.env.GITHUB_REPO?.trim();
    const githubBranch = process.env.GITHUB_BRANCH?.trim() || "main";
    const githubToken = process.env.GITHUB_TOKEN?.trim();

    if (!githubOwner || !githubRepo || !githubToken) {
        return null;
    }

    const maxUploadBytes = Math.max(1, Number(process.env.GALLERY_MAX_UPLOAD_BYTES ?? defaultMaxUploadBytes));
    const maxPhotoBytes = Math.max(1, Number(process.env.GALLERY_MAX_PHOTO_BYTES ?? defaultMaxPhotoBytes));
    const maxVideoBytes = Math.max(1, Number(process.env.GALLERY_MAX_VIDEO_BYTES ?? defaultMaxVideoBytes));

    return {
        githubOwner,
        githubRepo,
        githubBranch,
        githubToken,
        maxUploadBytes,
        maxPhotoBytes,
        maxVideoBytes,
    };
}

export function isSafeMediaType(fileName: string, mimeType: string): GalleryUploadType | null {
    const normalizedName = fileName.toLowerCase();
    const extension = path.extname(normalizedName);

    const imageMatch = allowedImageExtensions.has(extension) && allowedImageMimeTypes.has(mimeType.toLowerCase());
    const videoMatch = allowedVideoExtensions.has(extension) && allowedVideoMimeTypes.has(mimeType.toLowerCase());

    if (imageMatch) {
        return "photo";
    }

    if (videoMatch) {
        return "video";
    }

    const fallbackImage = allowedImageExtensions.has(extension) && !mimeType;
    const fallbackVideo = allowedVideoExtensions.has(extension) && !mimeType;

    if (fallbackImage) {
        return "photo";
    }

    if (fallbackVideo) {
        return "video";
    }

    return null;
}

export function sanitizeCaption(rawCaption: string) {
    const value = rawCaption.replace(/\s+/g, " ").trim();
    if (!value) {
        return "";
    }

    return value.slice(0, 500);
}

export function sanitizeFileName(fileName: string, mediaType: GalleryUploadType) {
    const safeName = fileName
        .trim()
        .replace(/\\/g, "/")
        .split("/")
        .pop()
        ?.replace(/[^a-zA-Z0-9._-]/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .toLowerCase();

    const baseName = safeName && safeName.length > 0 ? safeName : `media-${Date.now()}`;
    const extension = path.extname(baseName).toLowerCase();

    if (mediaType === "video" && !allowedVideoExtensions.has(extension)) {
        return `media-${Date.now()}.mp4`;
    }

    if (mediaType === "photo" && !allowedImageExtensions.has(extension)) {
        return `media-${Date.now()}.jpg`;
    }

    if (!extension) {
        return `${baseName}-${Date.now()}${mediaType === "video" ? ".mp4" : ".jpg"}`;
    }

    const basename = baseName.replace(new RegExp(`${extension.replace(/\./g, "\\.")}$`), "");
    return `${basename}-${Date.now()}${extension}`;
}

async function githubRequest<T>(url: string, token: string, init?: RequestInit): Promise<T> {
    const response = await fetch(url, {
        ...init,
        headers: {
            Accept: "application/vnd.github+json",
            Authorization: `Bearer ${token}`,
            "X-GitHub-Api-Version": "2022-11-28",
            ...(init?.headers ?? {}),
        },
        cache: "no-store",
    });

    const text = await response.text();
    let body: unknown = null;

    if (text) {
        try {
            body = JSON.parse(text) as unknown;
        } catch {
            body = text;
        }
    }

    if (!response.ok) {
        const message = body && typeof body === "object" && "message" in body && typeof body.message === "string" ? body.message : "GitHub request failed.";
        throw new Error(message);
    }

    return body as T;
}

async function getFileSha(filePath: string, config: GalleryUploadConfig) {
    const url = `https://api.github.com/repos/${config.githubOwner}/${config.githubRepo}/contents/${encodeURIComponent(filePath)}?ref=${encodeURIComponent(config.githubBranch)}`;

    try {
        const payload = await githubRequest<{ sha?: string }>(url, config.githubToken, { method: "GET", headers: { Accept: "application/vnd.github+json" } });
        return payload.sha;
    } catch {
        return undefined;
    }
}

async function putGithubFile(filePath: string, contentText: string, message: string, config: GalleryUploadConfig) {
    const currentSha = await getFileSha(filePath, config);
    const body = {
        message,
        content: Buffer.from(contentText, "utf8").toString("base64"),
        branch: config.githubBranch,
        ...(currentSha ? { sha: currentSha } : {}),
    };

    const url = `https://api.github.com/repos/${config.githubOwner}/${config.githubRepo}/contents/${encodeURIComponent(filePath)}`;
    return githubRequest<{ content?: { download_url?: string; path?: string } }>(url, config.githubToken, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
    });
}

async function getMediaMetadata(config: GalleryUploadConfig) {
    const filePath = "public/gallery/media.json";
    const url = `https://api.github.com/repos/${config.githubOwner}/${config.githubRepo}/contents/${encodeURIComponent(filePath)}?ref=${encodeURIComponent(config.githubBranch)}`;

    try {
        const payload = await githubRequest<{ content?: string }>(url, config.githubToken, { method: "GET" });
        if (!payload.content) {
            return [] as Array<Record<string, unknown>>;
        }

        const raw = Buffer.from(payload.content, "base64").toString("utf8");
        const parsed = JSON.parse(raw) as unknown;
        return Array.isArray(parsed) ? (parsed as Array<Record<string, unknown>>) : [];
    } catch {
        return [] as Array<Record<string, unknown>>;
    }
}

export async function appendGalleryMetadata(entry: Record<string, unknown>, config: GalleryUploadConfig) {
    const currentMetadata = await getMediaMetadata(config);
    const nextMetadata = [...currentMetadata.filter((item) => item && typeof item === "object"), entry];
    const filePath = "public/gallery/media.json";
    const content = `${JSON.stringify(nextMetadata, null, 2)}\n`;
    await putGithubFile(filePath, content, `Add gallery media: ${String(entry.src ?? "new-media")}`, config);
    return nextMetadata;
}

export async function writeGallerySidecarCaption({
    src,
    type,
    caption,
    config,
}: {
    src: string;
    type: GalleryUploadType;
    caption: string;
    config: GalleryUploadConfig;
}) {
    const safeSrc = src.trim();
    if (!safeSrc.startsWith("/gallery/")) {
        return;
    }

    const fileName = safeSrc.split("/").pop() ?? "media";
    const sidecarName = `${fileName.replace(/\.[^/.]+$/, "")}.caption.json`;
    const sidecarPath = `public/gallery/${sidecarName}`;
    const payload = JSON.stringify(
        {
            src: safeSrc,
            type,
            caption,
        },
        null,
        2,
    );

    await putGithubFile(sidecarPath, `${payload}\n`, `Write gallery caption sidecar for ${safeSrc}`, config);
}

export async function updateGalleryCaption({
    src,
    caption,
    config,
}: {
    src: string;
    caption: string;
    config: GalleryUploadConfig;
}) {
    const currentMetadata = await getMediaMetadata(config);
    const nextMetadata = currentMetadata.map((entry) => {
        if (typeof entry.src !== "string" || entry.src !== src) {
            return entry;
        }

        return {
            ...entry,
            caption,
        };
    });

    const foundMatch = nextMetadata.some((entry) => typeof entry.src === "string" && entry.src === src);
    if (!foundMatch) {
        throw new Error("The selected media could not be found in the Gallery metadata.");
    }

    const filePath = "public/gallery/media.json";
    const content = `${JSON.stringify(nextMetadata, null, 2)}\n`;
    await putGithubFile(filePath, content, `Update gallery caption: ${src}`, config);

    const matchedItem = currentMetadata.find((entry) => typeof entry.src === "string" && entry.src === src);
    const type = matchedItem && typeof matchedItem.type === "string" && (matchedItem.type === "video" || matchedItem.type === "photo") ? matchedItem.type : "photo";
    await writeGallerySidecarCaption({ src, type, caption, config });
    return nextMetadata;
}

export async function uploadGalleryMediaToGitHub({
    fileName,
    mediaType,
    caption,
    fileBuffer,
    config,
}: {
    fileName: string;
    mediaType: GalleryUploadType;
    caption: string;
    fileBuffer: Buffer;
    config: GalleryUploadConfig;
}) {
    const safeFileName = sanitizeFileName(fileName, mediaType);
    const normalizedSrc = `/gallery/${safeFileName}`;

    const contentPath = `public/gallery/${safeFileName}`;
    const contentPayload = fileBuffer.toString("base64");

    const fileBody = {
        message: `Upload gallery media: ${safeFileName}`,
        content: contentPayload,
        branch: config.githubBranch,
    };

    const mediaUrl = `https://api.github.com/repos/${config.githubOwner}/${config.githubRepo}/contents/${encodeURIComponent(contentPath)}`;
    await githubRequest<{ content?: { path?: string } }>(mediaUrl, config.githubToken, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fileBody),
    });

    const metadataEntry = {
        src: normalizedSrc,
        type: mediaType,
        caption,
        article: null,
    };

    await appendGalleryMetadata(metadataEntry, config);
    await writeGallerySidecarCaption({ src: normalizedSrc, type: mediaType, caption, config });

    return {
        src: normalizedSrc,
        type: mediaType,
        caption,
    };
}
