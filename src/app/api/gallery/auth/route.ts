import { createHmac, timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

const COOKIE_NAME = "gallery_admin";

function getAdminPassword() {
    return process.env.GALLERY_UPLOAD_ADMIN_PASSWORD?.trim();
}

function createSessionToken(password: string) {
    return createHmac("sha256", password).update("gallery-admin-session").digest("hex");
}

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as { password?: string };
        const password = body.password?.trim() ?? "";
        const configuredPassword = getAdminPassword();

        if (!configuredPassword) {
            return NextResponse.json({ error: "Gallery admin authentication is not configured." }, { status: 503 });
        }

        if (!password || password.length !== configuredPassword.length || !timingSafeEqual(Buffer.from(password), Buffer.from(configuredPassword))) {
            return NextResponse.json({ error: "Incorrect admin password." }, { status: 401 });
        }

        const response = NextResponse.json({ success: true, message: "Admin authentication successful." });
        const token = createSessionToken(configuredPassword);

        response.cookies.set({
            name: COOKIE_NAME,
            value: token,
            httpOnly: true,
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
            path: "/",
            maxAge: 60 * 60 * 12,
        });

        return response;
    } catch {
        return NextResponse.json({ error: "Unable to authenticate admin." }, { status: 400 });
    }
}
