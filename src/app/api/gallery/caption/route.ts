import { Buffer } from "node:buffer";
import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";
import { getGalleryUploadConfig, sanitizeCaption, updateGalleryCaption } from "@/lib/gallery-upload";

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
        const body = (await request.json()) as { src?: string; caption?: string };
        const src = typeof body.src === "string" ? body.src.trim() : "";
        const caption = sanitizeCaption(typeof body.caption === "string" ? body.caption : "");

        if (!src || !src.startsWith("/gallery/")) {
            return NextResponse.json({ error: "Invalid media source." }, { status: 400 });
        }

        await updateGalleryCaption({
            src,
            caption,
            config,
        });

        return NextResponse.json({ success: true, message: "Caption updated successfully. The site will update after Vercel finishes deploying." }, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to update the caption.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
