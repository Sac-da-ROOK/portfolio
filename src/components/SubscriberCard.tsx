"use client";

import { useState } from "react";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function SubscriberCard() {
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [maskedEmail, setMaskedEmail] = useState("");
    const [step, setStep] = useState<"form" | "verify" | "success">("form");
    const [isBusy, setIsBusy] = useState(false);
    const [error, setError] = useState("");

    const submitEmail = async (mode: "subscribe" | "resend") => {
        const trimmedEmail = email.trim();

        if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
            setError("Please enter a valid email address.");
            return;
        }

        setIsBusy(true);
        setError("");

        try {
            const response = await fetch("/api/subscribers/subscribe", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: trimmedEmail, mode }),
            });

            const body = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(body?.error || "Unable to send your verification email right now.");
            }

            setMaskedEmail(body.maskedEmail || trimmedEmail.replace(/(.{2}).*@/, "$1***@"));
            setStep("verify");
        } catch (caughtError: unknown) {
            setError(caughtError instanceof Error ? caughtError.message : "Subscription request failed.");
        } finally {
            setIsBusy(false);
        }
    };

    const verifyCode = async () => {
        const trimmedEmail = email.trim();
        const trimmedCode = code.trim();

        if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
            setError("Please enter a valid email address.");
            setStep("form");
            return;
        }

        if (!trimmedCode || trimmedCode.length !== 6) {
            setError("Please enter your 6-digit verification code.");
            return;
        }

        setIsBusy(true);
        setError("");

        try {
            const response = await fetch("/api/subscribers/verify", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: trimmedEmail, code: trimmedCode }),
            });

            const body = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(body?.error || "The verification code is invalid or has expired.");
            }

            setStep("success");
            setCode("");
        } catch (caughtError: unknown) {
            setError(caughtError instanceof Error ? caughtError.message : "Verification failed.");
        } finally {
            setIsBusy(false);
        }
    };

    const onBackToForm = () => {
        setStep("form");
        setCode("");
        setMaskedEmail("");
        setError("");
        setEmail("");
    };

    return (
        <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-[#0b1c2d] via-[#071521] to-[#0b1c2d] p-7 text-center shadow-[0_0_50px_rgba(14,116,144,0.16)] sm:p-9 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200/90">Portfolio updates</p>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                    Stay in the loop 🚀
                </h3>

                {step === "form" && (
                    <>
                        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                            Subscribers get project updates, portfolio notes, and occasional new work worth sharing.
                        </p>

                        <form
                            className="mx-auto mt-7 max-w-xl"
                            onSubmit={(event) => {
                                event.preventDefault();
                                void submitEmail("subscribe");
                            }}
                        >
                            <div className="flex flex-col gap-3 sm:flex-row">
                                <label className="sr-only" htmlFor="subscriber-email">
                                    Email address
                                </label>
                                <input
                                    id="subscriber-email"
                                    type="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                    placeholder="Email address"
                                    className="w-full rounded-full border border-cyan-400/20 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/40 focus:outline-none"
                                    aria-label="Email address"
                                />
                                <button
                                    type="submit"
                                    disabled={isBusy}
                                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(16,185,129,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
                                >
                                    {isBusy ? "Sending..." : "Subscribe"}
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {step === "verify" && (
                    <div className="mx-auto mt-7 max-w-xl">
                        <p className="text-lg font-semibold text-white">Check your inbox 📬</p>
                        <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">
                            We sent a verification code to <span className="font-medium text-cyan-100">{maskedEmail}</span>.
                        </p>

                        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                            <label className="sr-only" htmlFor="verification-code">
                                Verification code
                            </label>
                            <input
                                id="verification-code"
                                type="text"
                                inputMode="numeric"
                                maxLength={6}
                                value={code}
                                onChange={(event) => setCode(event.target.value.replace(/\D/g, "").slice(0, 6))}
                                placeholder="Enter 6-digit code"
                                className="w-full rounded-full border border-cyan-400/20 bg-slate-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-cyan-300/40 focus:outline-none"
                                aria-label="Verification code"
                            />
                            <button
                                type="button"
                                disabled={isBusy}
                                onClick={() => void verifyCode()}
                                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_12px_30px_rgba(14,165,233,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_34px_rgba(16,185,129,0.28)] disabled:cursor-not-allowed disabled:opacity-70"
                            >
                                {isBusy ? "Verifying..." : "Verify subscription"}
                            </button>
                        </div>

                        <div className="mt-5 flex flex-col justify-center gap-3 text-sm sm:flex-row">
                            <button
                                type="button"
                                onClick={() => void submitEmail("resend")}
                                disabled={isBusy}
                                className="text-cyan-200 transition hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                Resend code
                            </button>
                            <button
                                type="button"
                                onClick={onBackToForm}
                                className="text-slate-300 transition hover:text-white"
                            >
                                Change email
                            </button>
                        </div>
                    </div>
                )}

                {step === "success" && (
                    <div className="mx-auto mt-7 max-w-lg">
                        <p className="text-2xl font-semibold text-white">You&apos;re subscribed! 🎉</p>
                        <p className="mt-4 text-sm leading-7 text-slate-300 sm:text-base">
                            You&apos;ll hear from me when I have new portfolio updates.
                        </p>
                    </div>
                )}

                {error && (
                    <p className="mt-5 text-sm text-rose-300">{error}</p>
                )}
            </div>
        </section>
    );
}
