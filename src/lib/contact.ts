export type ContactFormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
    botField?: string;
    timestamp?: string;
};

export type ContactValidationErrors = Partial<Record<keyof ContactFormValues, string>>;

export const MAX_MESSAGE_LENGTH = 450;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string) {
    return emailPattern.test(value);
}

export function validateContactValues(values: ContactFormValues) {
    const errors: ContactValidationErrors = {};

    if (!values.name.trim()) {
        errors.name = "Please enter your name.";
    } else if (values.name.trim().length < 2) {
        errors.name = "Name must be at least 2 characters.";
    }

    if (!values.email.trim()) {
        errors.email = "Please enter your email.";
    } else if (!isValidEmail(values.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    if (!values.subject.trim()) {
        errors.subject = "Please enter a subject.";
    } else if (values.subject.trim().length < 3) {
        errors.subject = "Subject must be at least 3 characters.";
    }

    if (!values.message.trim()) {
        errors.message = "Please enter your message.";
    } else if (values.message.trim().length < 20) {
        errors.message = "Message must be at least 20 characters.";
    } else if (values.message.length > MAX_MESSAGE_LENGTH) {
        errors.message = `Message cannot exceed ${MAX_MESSAGE_LENGTH} characters.`;
    }

    if (values.botField && values.botField.trim() !== "") {
        errors.botField = "Spam detected.";
    }

    return errors;
}

export async function sendContactMessage(values: ContactFormValues) {
    const emailTo = process.env.CONTACT_EMAIL_TO;
    const emailFrom = process.env.CONTACT_EMAIL_FROM ?? "no-reply@portfolio.example";
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!resendApiKey || !emailTo) {
        return {
            sent: true,
            message: "Contact form submitted successfully. Configure RESEND_API_KEY and CONTACT_EMAIL_TO for real email delivery.",
        };
    }

    const html = `
    <div style="font-family: system-ui, sans-serif; color: #0f172a;">
      <h1>New portfolio contact</h1>
      <p><strong>Name:</strong> ${values.name}</p>
      <p><strong>Email:</strong> ${values.email}</p>
      <p><strong>Subject:</strong> ${values.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${values.message.replace(/\n/g, "<br />")}</p>
    </div>
  `;

    const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
            from: emailFrom,
            to: emailTo,
            subject: `Portfolio contact from ${values.name}`,
            html,
        }),
    });

    if (!response.ok) {
        const body = await response.text();
        throw new Error(`Failed to send email: ${response.status} ${body}`);
    }

    return { sent: true, message: "Message delivered successfully." };
}
