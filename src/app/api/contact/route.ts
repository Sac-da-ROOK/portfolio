import { NextResponse } from "next/server";
import { sendContactMessage } from "@/lib/contact";

type Body = {
    name: string;
    email: string;
    subject: string;
    message: string;
    botField?: string;
    timestamp?: string;
};

export async function POST(request: Request) {
    try {
        const body = (await request.json()) as Body;

        if (body.botField && body.botField.trim() !== "") {
            return NextResponse.json({ error: "Spam detected." }, { status: 400 });
        }

        if (Date.now() - Number(body.timestamp) < 3000) {
            return NextResponse.json({ error: "Please wait a moment before submitting." }, { status: 400 });
        }

        await sendContactMessage(body);
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "Unable to submit contact form.";
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
