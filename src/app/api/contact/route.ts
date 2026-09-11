import { NextResponse } from "next/server";
import { sendContactMessage, validateContactValues } from "@/lib/contact";

type Body = {
    name: string;
    email: string;
    subject: string;
    message: string;
    botField?: string;
    timestamp?: string;
    track?: "stem" | "cs";
};

export async function POST(request: Request) {
    try {
        const body = (await request.json().catch(() => ({}))) as Partial<Body>;

        if (body.botField && body.botField.trim() !== "") {
            return NextResponse.json({ error: "Spam detected." }, { status: 400 });
        }

        if (!body.timestamp || Number.isNaN(Number(body.timestamp)) || Date.now() - Number(body.timestamp) < 3000) {
            return NextResponse.json({ error: "Please wait a moment before submitting." }, { status: 400 });
        }

        const payload = {
            name: typeof body.name === "string" ? body.name : "",
            email: typeof body.email === "string" ? body.email : "",
            subject: typeof body.subject === "string" ? body.subject : "",
            message: typeof body.message === "string" ? body.message : "",
            track: body.track,
            botField: typeof body.botField === "string" ? body.botField : "",
            timestamp: body.timestamp,
        };

        const validationErrors = validateContactValues(payload);
        if (Object.keys(validationErrors).length > 0) {
            return NextResponse.json({ error: "Please correct the highlighted fields and try again." }, { status: 400 });
        }

        await sendContactMessage(payload);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to submit contact form.";
        console.error("Contact form submission failed.", error);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
