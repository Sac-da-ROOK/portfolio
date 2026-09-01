import nodemailer from 'nodemailer';

export type SendArticleNotificationInput = {
    to: string;
    title: string;
    link: string;
    articleUrl: string;
};

export type SendSubscriptionConfirmationInput = {
    to: string;
    confirmUrl?: string;
};

type SendRecallEmailInput = {
    to?: string;
    title?: string;
    link?: string;
    verificationCode?: string;
    message?: string;
};

const transporter = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT ?? 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    })
    : null;

export async function sendPublishedArticleEmail(input: SendArticleNotificationInput) {
    if (!transporter) {
        return { ok: false, reason: 'missing-smtp-config', recipient: input.to };
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
        text: `Aarush Srivastava has posted on The Lab Journal, check it out here!\n\nTitle: ${input.title}\nRead the article: ${input.link}`,
    });

    return { ok: true, recipient: input.to, messageId: info.messageId };
}

export async function sendSubscriptionConfirmationEmail(input: SendSubscriptionConfirmationInput) {
    if (!transporter) {
        return { ok: false, reason: 'missing-smtp-config', recipient: input.to };
    }

    const confirmUrl = input.confirmUrl ?? `${process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'}/lab-journal`;
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
        text: `Thanks for subscribing to The Lab Journal. You are now subscribed to the latest technical notes, articles, and updates from Aarush. Visit: ${confirmUrl}`,
    });

    return { ok: true, recipient: input.to, messageId: info.messageId };
}

export async function sendRecallEmail(input: SendRecallEmailInput) {
    const recipient = input.to ?? process.env.RECALL_EMAIL_TO ?? 'aarushsrivastava04@gmail.com';
    const subject = 'Lab Journal recall verification';
    const text = [
        `Recall requested for: ${input.title ?? 'an article'}`,
        '',
        input.message ?? 'We are sorry, but this article has been recalled.',
        '',
        `Verification code: ${input.verificationCode ?? '123456'}`,
        `Link: ${input.link ?? 'http://localhost:3000/lab-journal'}`,
    ].join('\n');

    if (!transporter) {
        console.log('Recall email not sent because SMTP credentials are not configured.', { recipient, subject, text });
        return { ok: false, recipient, reason: 'missing-smtp-config' };
    }

    const info = await transporter.sendMail({
        from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
        to: recipient,
        subject,
        text,
    });

    return { ok: true, recipient, messageId: info.messageId };
}
