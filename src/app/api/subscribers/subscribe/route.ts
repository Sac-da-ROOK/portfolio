import { NextResponse } from "next/server";
import { checkRateLimit, generateVerificationCode, isValidEmail, maskEmail, normalizeEmail, sendVerificationEmail, storePendingVerification } from "@/lib/subscribers";

export async function POST(request: Request) {
    try {
        const body = await request.json().catch(() => ({}));
        const email = typeof body.email === "string" ? body.email : "";
        const normalizedEmail = normalizeEmail(email);

        if (!normalizedEmail || !isValidEmail(normalizedEmail)) {
            return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
        }

        const forwardedFor = request.headers.get("x-forwarded-for") ?? request.headers.get("x-real-ip") ?? "unknown";
        const requestKey = `${forwardedFor.split(",")[0].trim() || "unknown"}:${normalizedEmail}`;
        const rateResult = checkRateLimit(requestKey, 3, 10 * 60 * 1000);

        if (!rateResult.ok) {
            return NextResponse.json(
                { error: `Please wait ${rateResult.retryAfterSeconds} seconds before requesting another verification code.` },
                { status: 429 }
            );
        }

        const code = generateVerificationCode();
        storePendingVerification(normalizedEmail, code);

        try {
            await sendVerificationEmail(normalizedEmail, code);
        } catch (error) {
            const message = error instanceof Error ? error.message : "Unable to send your verification email right now.";
            return NextResponse.json({ error: message }, { status: 500 });
        }

        return NextResponse.json({
            ok: true,
            maskedEmail: maskEmail(normalizedEmail),
            requiresVerification: true,
            message: "Check your inbox for a verification code.",
        }, { status: 200 });
    } catch {
        return NextResponse.json({ error: "Unable to subscribe right now." }, { status: 500 });
    }
}
