import { Buffer } from "node:buffer";
import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import {
    getGalleryUploadConfig,
    isSafeMediaType,
    sanitizeCaption,
    sanitizeFileName,
    uploadGalleryMediaToGitHub,
} from "@/lib/gallery-upload";

const COOKIE_NAME = "gallery_admin";

function verifyAdminSession(request: Request) {
    const configuredPassword = process.env.GALLERY_UPLOAD_ADMIN_PASSWORD?.trim();
    if (!configuredPassword) {
        return false;
    }

    const cookieValue = request.headers.get("cookie") ?? "";
    const adminCookie = cookieValue
        .split(";")
        .map((item) => item.trim())
        .find((item) => item.startsWith(`${COOKIE_NAME}=`));

    if (!adminCookie) {
        return false;
    }

    const token = adminCookie.slice(COOKIE_NAME.length + 1);
    const expected = createHmac("sha256", configuredPassword).update("gallery-admin-session").digest("hex");

    try {
        const tokenBuffer = Buffer.from(token, "hex");
        const expectedBuffer = Buffer.from(expected, "hex");
        return tokenBuffer.length === expectedBuffer.length && timingSafeEqual(tokenBuffer, expectedBuffer);
    } catch {
        return false;
    }
}

export const runtime = "nodejs";

export async function POST(request: Request) {
    if (!verifyAdminSession(request)) {
        return NextResponse.json({ error: "Unauthorized. Admin authentication required." }, { status: 401 });
    }

    const config = getGalleryUploadConfig();
    if (!config) {
        return NextResponse.json({ error: "Gallery upload is not configured. Please set the required environment variables." }, { status: 500 });
    }

    try {
        const formData = await request.formData();
        const file = formData.get("file");
        const rawCaption = String(formData.get("caption") ?? "");

        if (!(file instanceof File)) {
            return NextResponse.json({ error: "No file was provided." }, { status: 400 });
        }

        const fileName = file.name || "upload";
        const mediaType = isSafeMediaType(fileName, file.type || "");

        if (!mediaType) {
            return NextResponse.json({ error: "Unsupported file type. Please upload a JPG, PNG, WEBP, GIF, MP4, WEBM, or MOV file." }, { status: 400 });
        }

        if (file.size <= 0) {
            return NextResponse.json({ error: "The selected file is empty." }, { status: 400 });
        }

        const maxAllowedBytes = mediaType === "photo" ? config.maxPhotoBytes : config.maxVideoBytes;
        if (file.size > maxAllowedBytes) {
            if (mediaType === "video") {
                return NextResponse.json({ error: "This video is too large for Git-based Gallery storage. Please use a smaller video file." }, { status: 413 });
            }

            return NextResponse.json({ error: "This photo is too large for Gallery upload." }, { status: 413 });
        }

        if (file.size > config.maxUploadBytes) {
            return NextResponse.json({ error: "The selected file exceeds the maximum Gallery upload limit." }, { status: 413 });
        }

        const caption = sanitizeCaption(rawCaption);
        if (!caption) {
            return NextResponse.json({ error: "A caption is required." }, { status: 400 });
        }

        const safeFileName = sanitizeFileName(fileName, mediaType);
        const fileBuffer = Buffer.from(await file.arrayBuffer());

        const uploaded = await uploadGalleryMediaToGitHub({
            fileName: safeFileName,
            mediaType,
            caption,
            fileBuffer,
            config,
        });

        return NextResponse.json({ success: true, message: "Media uploaded successfully. The site will update after Vercel finishes deploying.", media: uploaded }, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to upload media right now.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
