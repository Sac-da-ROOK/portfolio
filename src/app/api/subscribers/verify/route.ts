import { NextResponse } from "next/server";
import { checkRateLimit, isValidEmail, normalizeEmail, upsertResendContact, verifyPendingCode } from "@/lib/subscribers";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const email = typeof body.email === "string" ? body.email : "";
        const code = typeof body.code === "string" ? body.code : "";
        const normalizedEmail = normalizeEmail(email);

        if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        if (!code || code.trim().length !== 6) {
            return NextResponse.json({ error: "Please enter the 6-digit verification code." }, { status: 400 });
        }

        const forwardedFor = request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "unknown";
        const requestKey = `${forwardedFor.split(",")[0].trim() || "unknown"}:${normalizedEmail}`;
        const rateResult = checkRateLimit(requestKey, 10, 60 * 1000);

        if (!rateResult.ok) {
            return NextResponse.json(
                { error: `Please wait ${rateResult.retryAfterSeconds} seconds before trying again.` },
                { status: 429 }
            );
        }

        const verificationResult = verifyPendingCode(normalizedEmail, code.trim());

        if (!verificationResult.valid) {
            return NextResponse.json({ error: "Invalid or expired verification code." }, { status: 400 });
        }

        try {
            await upsertResendContact(normalizedEmail);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Your subscription could not be confirmed right now.";
            return NextResponse.json({ error: message }, { status: 500 });
        }

        return NextResponse.json({
            ok: true,
            subscribed: true,
            message: "You’re subscribed! You’ll hear from me when I have new portfolio updates.",
        }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Unable to verify your subscription right now." }, { status: 500 });
    }
}
