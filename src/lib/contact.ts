export type ContactFormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
    track?: "stem" | "cs";
    botField?: string;
    timestamp?: string;
};

export type ContactValidationErrors = Partial<Record<keyof ContactFormValues, string>>;

export const MAX_MESSAGE_LENGTH = 450;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function normalizeText(value: string) {
    return value.replace(/\r\n?/g, "\n").trim();
}

export function isValidEmail(value: string) {
    return emailPattern.test(value);
}

export function validateContactValues(values: ContactFormValues) {
    const errors: ContactValidationErrors = {};
    const name = normalizeText(values.name);
    const email = normalizeText(values.email);
    const subject = normalizeText(values.subject);
    const message = normalizeText(values.message);

    if (!name) {
        errors.name = "Please enter your name.";
    } else if (name.length < 2) {
        errors.name = "Name must be at least 2 characters.";
    }

    if (!email) {
        errors.email = "Please enter your email.";
    } else if (!isValidEmail(email)) {
        errors.email = "Please enter a valid email address.";
    }

    if (!subject) {
        errors.subject = "Please enter a subject.";
    } else if (subject.length < 3) {
        errors.subject = "Subject must be at least 3 characters.";
    }

    if (!message) {
        errors.message = "Please enter your message.";
    } else if (message.length < 20) {
        errors.message = "Message must be at least 20 characters.";
    } else if (message.length > MAX_MESSAGE_LENGTH) {
        errors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
    }

    if (values.botField && values.botField.trim() !== "") {
        errors.botField = "Spam detected.";
    }

    return errors;
}

export async function sendContactMessage(values: ContactFormValues) {
    const emailTo = (process.env.CONTACT_EMAIL_TO ?? "aarushsrivastava04@gmail.com").trim();
    const emailFrom = (process.env.CONTACT_EMAIL_FROM ?? "no-reply@portfolio.example").trim();
    const resendApiKey = process.env.RESEND_API_KEY?.trim();

    if (!resendApiKey) {
        throw new Error("Email delivery is not configured. Set RESEND_API_KEY in the environment before submitting the contact form.");
    }

    if (!emailTo) {
        throw new Error("The contact recipient is not configured. Set CONTACT_EMAIL_TO to aarushsrivastava04@gmail.com.");
    }

    const name = escapeHtml(normalizeText(values.name));
    const email = escapeHtml(normalizeText(values.email));
    const subject = escapeHtml(normalizeText(values.subject));
    const messageText = normalizeText(values.message);
    const messageHtml = escapeHtml(messageText).replace(/\n/g, "<br />");
    const submittedAt = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
    });

    const html = `
      <div style="margin:0;padding:0;background-color:#f8fafc;font-family:Arial,Helvetica,sans-serif;">
        <div style="max-width:640px;margin:0 auto;padding:24px;">
          <div style="background:#ffffff;border:1px solid #e2e8f0;border-radius:18px;overflow:hidden;box-shadow:0 8px 24px rgba(15,23,42,0.05);">
            <div style="background:linear-gradient(135deg,#fef3c7,#fef9c3);padding:24px 28px;border-bottom:1px solid #e2e8f0;">
              <h1 style="margin:0;font-size:28px;line-height:1.2;color:#0f172a;font-weight:700;">Portfolio Contact Form</h1>
              <p style="margin:8px 0 0;font-size:14px;color:#334155;letter-spacing:0.04em;text-transform:uppercase;">New message received</p>
            </div>
            <div style="padding:28px;">
              <div style="display:block; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid #e2e8f0;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">Visitor</p>
                <p style="margin:0;font-size:18px;color:#0f172a;font-weight:600;">${name}</p>
              </div>

              <div style="display:block; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid #e2e8f0;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">Email</p>
                <p style="margin:0;font-size:16px;color:#0f172a;">${email}</p>
              </div>

              <div style="display:block; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid #e2e8f0;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">Subject</p>
                <p style="margin:0;font-size:16px;color:#0f172a;">${subject}</p>
              </div>

              <div style="display:block; margin-bottom:18px; padding-bottom:12px; border-bottom:1px solid #e2e8f0;">
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">Submitted</p>
                <p style="margin:0;font-size:16px;color:#0f172a;">${submittedAt}</p>
              </div>

              <div style="display:block;">
                <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;color:#475569;">Message</p>
                <div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:16px;font-size:16px;line-height:1.7;color:#0f172a;">
                  ${messageHtml}
                </div>
              </div>
            </div>
            <div style="background:#0f172a;padding:16px 28px;color:#f8fafc;font-size:12px;letter-spacing:0.06em;text-transform:uppercase;">
              This message was sent from the portfolio contact form.
            </div>
          </div>
        </div>
      </div>
    `;

    const text = [
        "Portfolio Contact Form",
        "New message received from the portfolio website.",
        `Name: ${normalizeText(values.name)}`,
        `Email: ${normalizeText(values.email)}`,
        `Subject: ${normalizeText(values.subject)}`,
        `Submitted: ${submittedAt}`,
        "",
        "Message:",
        messageText,
    ].join("\n");

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
            from: emailFrom,
            to: [emailTo],
            reply_to: normalizeText(values.email),
            subject: `Portfolio contact form: ${normalizeText(values.subject)}`,
            html,
            text,
        }),
    });

    if (!response.ok) {
        const body = await response.text();
        console.error("Resend contact-form email failed.", {
            status: response.status,
            recipient: emailTo,
            sender: emailFrom,
            responseBody: body,
        });

        throw new Error("The message could not be sent right now. Please try again in a moment.");
    }

    return { sent: true, message: "Message delivered successfully." };
}
