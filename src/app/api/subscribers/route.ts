import { NextResponse } from "next/server";

const DEFAULT_CMS_BASE_URL = "http://127.0.0.1:3001";

function getCmsBaseUrl() {
    const configuredUrl = process.env.LAB_JOURNAL_CMS_URL ?? process.env.NEXT_PUBLIC_LAB_JOURNAL_CMS_URL ?? DEFAULT_CMS_BASE_URL;
    return configuredUrl.replace(/\/$/, "");
}

export async function GET() {
    try {
        const cmsBaseUrl = getCmsBaseUrl();
        const response = await fetch(`${cmsBaseUrl}/api/subscribers`, {
            cache: "no-store",
            headers: { Accept: "application/json" },
        });

        if (!response.ok) {
            return NextResponse.json({ error: "Unable to load subscribers." }, { status: response.status || 500 });
        }

        const payload = await response.json().catch(() => ({ subscribers: [] }));
        return NextResponse.json(payload, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Unable to load subscribers." }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = (await request.json().catch(() => ({}))) as { email?: string };
        const email = typeof body.email === "string" ? body.email.trim() : "";

        if (!email) {
            return NextResponse.json({ error: "Email is required." }, { status: 400 });
        }

        const cmsBaseUrl = getCmsBaseUrl();
        const response = await fetch(`${cmsBaseUrl}/api/subscribers`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({ email }),
        });

        const payload = await response.json().catch(() => ({ error: "Unable to subscribe right now." }));

        if (!response.ok) {
            return NextResponse.json(
                { error: payload?.error || "Unable to subscribe right now." },
                { status: response.status || 500 }
            );
        }

        return NextResponse.json({ success: true, subscriber: payload.subscriber ?? { email } }, { status: 201 });
    } catch {
        return NextResponse.json({ error: "Unable to subscribe right now." }, { status: 500 });
    }
}
