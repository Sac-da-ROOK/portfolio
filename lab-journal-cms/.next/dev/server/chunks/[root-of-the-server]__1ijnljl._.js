module.exports = [
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[project]/src/lib/mail.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendPublishedArticleEmail",
    ()=>sendPublishedArticleEmail,
    "sendRecallEmail",
    ()=>sendRecallEmail,
    "sendSubscriptionConfirmationEmail",
    ()=>sendSubscriptionConfirmationEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
const transporter = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
}) : null;
async function sendPublishedArticleEmail(input) {
    if (!transporter) {
        return {
            ok: false,
            reason: 'missing-smtp-config',
            recipient: input.to
        };
    }
    const info = await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: input.to,
        subject: `Aarush Srivastava has posted on The Lab Journal: ${input.title}`,
        html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;max-width:640px;margin:0 auto;padding:24px;">
                <h2 style="margin:0 0 16px;font-size:24px;">Aarush Srivastava has posted on The Lab Journal</h2>
                <p style="margin:0 0 10px;">${input.title}</p>
                <p style="margin:0 0 20px;">Aarush Srivastava has posted on The Lab Journal, check it out here!</p>
                <p style="margin:0 0 20px;">
                    <a href="${input.link}" style="display:inline-block;background:#f59e0b;color:#111827;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:700;">Read the Article</a>
                </p>
                <p style="margin:0;color:#475569;">Open the article: <a href="${input.link}" style="color:#1d4ed8;">${input.link}</a></p>
            </div>
        `,
        text: `Aarush Srivastava has posted on The Lab Journal, check it out here!\n\nTitle: ${input.title}\nRead the article: ${input.link}`
    });
    return {
        ok: true,
        recipient: input.to,
        messageId: info.messageId
    };
}
async function sendSubscriptionConfirmationEmail(input) {
    if (!transporter) {
        return {
            ok: false,
            reason: 'missing-smtp-config',
            recipient: input.to
        };
    }
    const confirmUrl = input.confirmUrl ?? `${("TURBOPACK compile-time value", "http://localhost:3000") ?? 'http://localhost:3000'}/lab-journal`;
    const info = await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: input.to,
        subject: 'You are subscribed to The Lab Journal',
        html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0f172a;max-width:640px;margin:0 auto;padding:24px;">
                <h2 style="margin:0 0 16px;font-size:24px;">Thanks for subscribing to The Lab Journal</h2>
                <p style="margin:0 0 12px;">You are now subscribed to the latest technical notes, articles, and updates from Aarush.</p>
                <p style="margin:0 0 20px;">We will email you whenever a new article is published.</p>
                <p style="margin:0 0 20px;">
                    <a href="${confirmUrl}" style="display:inline-block;background:#f59e0b;color:#111827;padding:12px 18px;border-radius:999px;text-decoration:none;font-weight:700;">Visit The Lab Journal</a>
                </p>
            </div>
        `,
        text: `Thanks for subscribing to The Lab Journal. You are now subscribed to the latest technical notes, articles, and updates from Aarush. Visit: ${confirmUrl}`
    });
    return {
        ok: true,
        recipient: input.to,
        messageId: info.messageId
    };
}
async function sendRecallEmail(input) {
    const recipient = input.to ?? process.env.RECALL_EMAIL_TO ?? 'aarushsrivastava04@gmail.com';
    const subject = 'Lab Journal recall verification';
    const text = [
        `Recall requested for: ${input.title ?? 'an article'}`,
        '',
        input.message ?? 'We are sorry, but this article has been recalled.',
        '',
        `Verification code: ${input.verificationCode ?? '123456'}`,
        `Link: ${input.link ?? 'http://localhost:3000/lab-journal'}`
    ].join('\n');
    if (!transporter) {
        console.log('Recall email not sent because SMTP credentials are not configured.', {
            recipient,
            subject,
            text
        });
        return {
            ok: false,
            recipient,
            reason: 'missing-smtp-config'
        };
    }
    const info = await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: recipient,
        subject,
        text
    });
    return {
        ok: true,
        recipient,
        messageId: info.messageId
    };
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1ijnljl._.js.map