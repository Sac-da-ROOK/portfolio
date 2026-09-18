import crypto from "node:crypto";

export const VERIFICATION_TTL_MS = 10 * 60 * 1000;
export const VERIFICATION_RATE_LIMIT_MS = 60 * 1000;

const rateLimitMap = new Map<string, { count: number; windowStart: number }>();
const pendingVerificationMap = new Map<string, { codeHash: string; expiresAt: number; used: boolean; createdAt: number }>();

export function normalizeEmail(value: string) {
    return value.trim().toLowerCase();
}

export function isValidEmail(value: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizeEmail(value));
}

export function maskEmail(value: string) {
    const normalized = normalizeEmail(value);
    const atIndex = normalized.indexOf("@");

    if (atIndex <= 0 || atIndex === normalized.length - 1) {
        return "***@***";
    }

    const localPart = normalized.slice(0, atIndex);
    const domainPart = normalized.slice(atIndex + 1);
    const [domainName, ...domainRest] = domainPart.split(".");
    const maskedLocal = localPart.length <= 2
        ? localPart[0] ?? "*"
        : `${localPart.slice(0, 2)}${"*".repeat(Math.max(1, localPart.length - 2))}`;
    const maskedDomain = domainName.length <= 2
        ? domainName
        : `${domainName.slice(0, 2)}${"*".repeat(Math.max(1, domainName.length - 2))}`;
    const tail = domainRest.length > 0 ? `.${domainRest.join(".")}` : "";

    return `${maskedLocal}@${maskedDomain}${tail}`;
}

export function generateVerificationCode() {
    return String(crypto.randomInt(100000, 999999));
}

function hashValue(value: string) {
    return crypto.createHash("sha256").update(value).digest("hex");
}

function constantTimeEquals(a: string, b: string) {
    const bufferA = Buffer.from(a, "hex");
    const bufferB = Buffer.from(b, "hex");

    if (bufferA.length !== bufferB.length) {
        return false;
    }

    return crypto.timingSafeEqual(bufferA, bufferB);
}

export function checkRateLimit(key: string, limit: number, windowMs: number) {
    const now = Date.now();
    const existing = rateLimitMap.get(key);

    if (!existing || now - existing.windowStart > windowMs) {
        rateLimitMap.set(key, { count: 1, windowStart: now });
        return { ok: true, remaining: limit - 1, retryAfterSeconds: 0 };
    }

    if (existing.count >= limit) {
        const retryAfterSeconds = Math.max(1, Math.ceil((existing.windowStart + windowMs - now) / 1000));
        return { ok: false, remaining: 0, retryAfterSeconds };
    }

    existing.count += 1;
    return { ok: true, remaining: limit - existing.count, retryAfterSeconds: 0 };
}

export function storePendingVerification(email: string, code: string) {
    const normalizedEmail = normalizeEmail(email);
    const now = Date.now();
    pendingVerificationMap.set(normalizedEmail, {
        codeHash: hashValue(code),
        expiresAt: now + VERIFICATION_TTL_MS,
        used: false,
        createdAt: now,
    });
}

export function verifyPendingCode(email: string, code: string) {
    const normalizedEmail = normalizeEmail(email);
    const record = pendingVerificationMap.get(normalizedEmail);

    if (!record) {
        return { valid: false, reason: "not_found" as const };
    }

    if (record.used) {
        pendingVerificationMap.delete(normalizedEmail);
        return { valid: false, reason: "used" as const };
    }

    if (Date.now() > record.expiresAt) {
        pendingVerificationMap.delete(normalizedEmail);
        return { valid: false, reason: "expired" as const };
    }

    const candidateHash = hashValue(code);
    const isValid = constantTimeEquals(record.codeHash, candidateHash);

    if (!isValid) {
        return { valid: false, reason: "invalid" as const };
    }

    record.used = true;
    return { valid: true, reason: "valid" as const };
}

export function clearPendingVerification(email: string) {
    pendingVerificationMap.delete(normalizeEmail(email));
}

export async function sendVerificationEmail(email: string, code: string) {
    const resendApiKey = process.env.RESEND_API_KEY?.trim();
    const sender = (process.env.CONTACT_EMAIL_FROM ?? "no-reply@portfolio.example").trim();

    if (!resendApiKey) {
        throw new Error("Email delivery is not configured. Set RESEND_API_KEY in the environment before sending subscription verification emails.");
    }

    const body = {
        from: sender,
        to: [normalizeEmail(email)],
        subject: "Verify your portfolio subscription",
        text: [
            "Someone requested a subscription using this email address.",
            "Enter the verification code below to confirm.",
            "",
            `Verification code: ${code}`,
            "",
            "This code expires after 10 minutes.",
            "If you did not request this, you can ignore this email."
        ].join("\n"),
        html: `
            <div style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
              <div style="max-width:640px;margin:0 auto;padding:24px;">
                <div style="background:#081a2a;border:1px solid rgba(34,211,238,0.25);border-radius:18px;overflow:hidden;box-shadow:0 14px 34px rgba(14,116,144,0.14);">
                  <div style="padding:28px 28px 18px;background:linear-gradient(135deg,rgba(34,211,238,0.12),rgba(16,185,129,0.12));border-bottom:1px solid rgba(34,211,238,0.2);">
                    <p style="margin:0 0 12px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7dd3fc;font-weight:700;">Portfolio subscription</p>
                    <h1 style="margin:0;font-size:30px;line-height:1.2;color:#f8fafc;font-weight:700;">Verify your portfolio subscription</h1>
                  </div>
                  <div style="padding:28px;color:#dfeaf8;">
                    <p style="margin:0 0 14px;font-size:17px;line-height:1.7;">Someone requested a subscription using this email address. Enter the verification code below to confirm.</p>
                    <div style="margin:24px 0;padding:22px 20px;border-radius:16px;background:linear-gradient(135deg,#0b1c2d,#0d2338);border:1px solid rgba(103,232,249,0.28);text-align:center;box-shadow:inset 0 1px 0 rgba(255,255,255,0.04);">
                      <p style="margin:0 0 10px;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#7dd3fc;font-weight:700;">Verification code</p>
                      <div style="font-size:34px;font-weight:800;letter-spacing:0.28em;color:#f8fafc;">${code}</div>
                    </div>
                    <p style="margin:0;font-size:15px;line-height:1.7;color:#cbd5e1;">This code expires after 10 minutes. If you did not request this subscription, you can safely ignore this email.</p>
                  </div>
                </div>
              </div>
            </div>
        `,
    };

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const responseText = await response.text();
        console.error("Resend verification email failed.", {
            status: response.status,
            body: responseText,
            recipient: normalizeEmail(email),
        });

        throw new Error("The verification email could not be sent right now. Please try again in a moment.");
    }

    return { sent: true };
}

export async function upsertResendContact(email: string) {
    const normalizedEmail = normalizeEmail(email);
    const resendApiKey = process.env.RESEND_API_KEY?.trim();

    if (!resendApiKey) {
        throw new Error("Email delivery is not configured. Set RESEND_API_KEY in the environment before confirming a subscription.");
    }

    const response = await fetch("https://api.resend.com/contacts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
            email: normalizedEmail,
            unsubscribed: false,
        }),
    });

    if (response.status === 409 || response.status === 422) {
        return { created: false, alreadyExists: true };
    }

    if (!response.ok) {
        const responseText = await response.text();
        console.error("Resend contact upsert failed.", {
            status: response.status,
            body: responseText,
            email: normalizedEmail,
        });

        throw new Error("Your subscription could not be confirmed right now.");
    }

    return { created: true, alreadyExists: false };
}
