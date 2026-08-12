"use client";

import { useMemo, useState } from "react";
import { MAX_MESSAGE_LENGTH, ContactFormValues, validateContactValues } from "@/lib/contact";

type SubmissionState = "idle" | "loading" | "success" | "error";
type ContactTrack = "stem" | "cs";

const createInitialValues = (track: ContactTrack): ContactFormValues => ({
    name: "",
    email: "",
    subject: track === "stem" ? "STEM collaboration inquiry" : "CS project inquiry",
    message: "",
    botField: "",
    timestamp: String(Date.now()),
    track,
});

const fieldLabels: Record<keyof Omit<ContactFormValues, "botField" | "timestamp" | "track">, string> = {
    name: "Name",
    email: "Email",
    subject: "Subject",
    message: "Message",
};

export default function ContactForm() {
    const [activeTrack, setActiveTrack] = useState<ContactTrack>("stem");
    const [forms, setForms] = useState<Record<ContactTrack, ContactFormValues>>({
        stem: createInitialValues("stem"),
        cs: createInitialValues("cs"),
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [state, setState] = useState<SubmissionState>("idle");
    const [serverError, setServerError] = useState<string | null>(null);
    const values = forms[activeTrack];

    const messageLength = useMemo(() => values.message.length, [values.message]);
    const remaining = Math.max(0, MAX_MESSAGE_LENGTH - messageLength);

    const handleChange = (name: keyof ContactFormValues) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const value = event.target.value;
        setForms((prev) => ({
            ...prev,
            [activeTrack]: { ...prev[activeTrack], [name]: value },
        }));
        setErrors((prev) => ({ ...prev, [name]: "" }));
        setServerError(null);
    };

    const switchTrack = (track: ContactTrack) => {
        setActiveTrack(track);
        setErrors({});
        setServerError(null);
        setState("idle");
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const validation = validateContactValues(values);
        if (Object.keys(validation).length > 0) {
            setErrors(validation);
            setState("error");
            return;
        }

        setState("loading");
        setServerError(null);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...values,
                    track: activeTrack,
                }),
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error(result.error || "Submission failed.");
            }

            setState("success");
            setForms((prev) => ({
                ...prev,
                [activeTrack]: createInitialValues(activeTrack),
            }));
            setTimeout(() => setState("idle"), 4200);
        } catch (error) {
            setState("error");
            setServerError(error instanceof Error ? error.message : "Submission failed.");
        }
    };

    return (
        <form className="grid gap-6" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-3 sm:grid-cols-2">
                <button
                    type="button"
                    onClick={() => switchTrack("stem")}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] ui-transition ${activeTrack === "stem" ? "border-cyan-300/60 bg-cyan-300/20 text-cyan-100" : "border-white/12 bg-slate-900/70 text-slate-300 hover:border-cyan-400/40 hover:text-white"}`}
                    aria-pressed={activeTrack === "stem"}
                >
                    STEM
                </button>
                <button
                    type="button"
                    onClick={() => switchTrack("cs")}
                    className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] ui-transition ${activeTrack === "cs" ? "border-cyan-300/60 bg-cyan-300/20 text-cyan-100" : "border-white/12 bg-slate-900/70 text-slate-300 hover:border-cyan-400/40 hover:text-white"}`}
                    aria-pressed={activeTrack === "cs"}
                >
                    CS
                </button>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/70 px-4 py-3 text-xs uppercase tracking-[0.24em] text-slate-300">
                {activeTrack === "stem" ? "STEM form selected" : "Computer science form selected"}
            </div>

            <div className="grid gap-6 md:grid-cols-2">
                {(["name", "email", "subject"] as const).map((field) => (
                    <label key={field} className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4 ui-transition focus-within:border-cyan-400/50 focus-within:ring-2 focus-within:ring-cyan-400/20">
                        <span className="pointer-events-none absolute left-4 top-4 text-sm uppercase tracking-[0.3em] text-slate-400 transition-all duration-200 group-focus-within:-translate-y-5 group-focus-within:scale-90">
                            {fieldLabels[field]}
                        </span>
                        <input
                            type={field === "email" ? "email" : "text"}
                            name={field}
                            aria-label={fieldLabels[field]}
                            value={values[field]}
                            onChange={handleChange(field)}
                            className="mt-8 w-full bg-transparent text-base text-white outline-none placeholder-transparent"
                            placeholder={fieldLabels[field]}
                            aria-invalid={Boolean(errors[field])}
                            aria-describedby={errors[field] ? `${field}-error` : undefined}
                        />
                        {errors[field] ? <span id={`${field}-error`} className="mt-2 block text-xs text-rose-300">{errors[field]}</span> : null}
                    </label>
                ))}
            </div>

            <label className="group relative block overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-4 ui-transition focus-within:border-cyan-400/50 focus-within:ring-2 focus-within:ring-cyan-400/20">
                <span className="pointer-events-none absolute left-4 top-4 text-sm uppercase tracking-[0.3em] text-slate-400 transition-all duration-200 group-focus-within:-translate-y-5 group-focus-within:scale-90">
                    Message
                </span>
                <textarea
                    name="message"
                    aria-label="Message"
                    rows={6}
                    value={values.message}
                    onChange={handleChange("message")}
                    className="mt-8 w-full resize-none bg-transparent text-base text-white outline-none placeholder-transparent"
                    placeholder="Message"
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    maxLength={MAX_MESSAGE_LENGTH}
                />
                <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
                    {errors.message ? <span id="message-error" className="text-rose-300">{errors.message}</span> : <span className="text-slate-500">{activeTrack === "stem" ? "Share details about your STEM event, challenge, or project." : "Share details about your CS app, algorithm, or coding collaboration."}</span>}
                    <span>{remaining} characters left</span>
                </div>
            </label>

            <div className="sr-only">
                <label htmlFor="bot-field">Leave this field empty</label>
                <input id="bot-field" name="botField" type="text" value={values.botField} onChange={handleChange("botField")} autoComplete="off" />
            </div>

            <button type="submit" disabled={state === "loading"} className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 ui-transition hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60">
                {state === "loading" ? "Sending..." : state === "success" ? "Sent" : "Send Message"}
            </button>

            {serverError ? (
                <div className="rounded-3xl border border-rose-300/20 bg-rose-300/5 p-4 text-sm text-rose-100">
                    {serverError}
                </div>
            ) : null}

            {state === "success" ? (
                <div className="rounded-3xl border border-emerald-300/20 bg-emerald-300/5 p-4 text-sm text-emerald-100">
                    <p className="font-semibold">Message sent successfully.</p>
                    <p className="mt-1 text-slate-300">I’ll respond within 1–2 business days.</p>
                </div>
            ) : null}
        </form>
    );
}
