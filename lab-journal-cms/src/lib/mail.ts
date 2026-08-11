import nodemailer from 'nodemailer';

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
