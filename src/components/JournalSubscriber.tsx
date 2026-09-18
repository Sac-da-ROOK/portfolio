'use client';

import { useMemo, useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type JournalSubscriberProps = {
    buttonText?: string;
};

export default function JournalSubscriber({ buttonText = 'Subscribe' }: JournalSubscriberProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [maskedEmail, setMaskedEmail] = useState('');
    const [step, setStep] = useState<'form' | 'verify' | 'success'>('form');
    const [isBusy, setIsBusy] = useState(false);
    const [error, setError] = useState('');

    const submitLabel = useMemo(() => (EMAIL_REGEX.test(email.trim()) ? 'Send confirmation email' : 'Subscribe'), [email]);
    const canSubmit = useMemo(() => EMAIL_REGEX.test(email.trim()) && !isBusy, [email, isBusy]);

    const closeModal = () => {
        setIsOpen(false);
        setEmail('');
        setCode('');
        setMaskedEmail('');
        setError('');
        setStep('form');
    };

    const submitEmail = async (mode: 'subscribe' | 'resend') => {
        const trimmedEmail = email.trim();

        if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
            setError('Please enter a valid email address.');
            return;
        }

        setIsBusy(true);
        setError('');

        try {
            const response = await fetch('/api/subscribers/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmedEmail, mode }),
            });

            const body = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(body?.error || 'Unable to send your verification email right now.');
            }

            setMaskedEmail(body.maskedEmail || trimmedEmail.replace(/(.{2}).*@/, '$1***@'));
            setStep('verify');
        } catch (caughtError: unknown) {
            setError(caughtError instanceof Error ? caughtError.message : 'Subscription request failed.');
        } finally {
            setIsBusy(false);
        }
    };

    const verifyCode = async () => {
        const trimmedEmail = email.trim();
        const trimmedCode = code.trim();

        if (!trimmedEmail || !EMAIL_REGEX.test(trimmedEmail)) {
            setError('Please enter a valid email address.');
            setStep('form');
            return;
        }

        if (!trimmedCode || trimmedCode.length !== 6) {
            setError('Please enter your 6-digit verification code.');
            return;
        }

        setIsBusy(true);
        setError('');

        try {
            const response = await fetch('/api/subscribers/verify', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmedEmail, code: trimmedCode }),
            });

            const body = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(body?.error || 'The verification code is invalid or has expired.');
            }

            setStep('success');
            setCode('');
        } catch (caughtError: unknown) {
            setError(caughtError instanceof Error ? caughtError.message : 'Verification failed.');
        } finally {
            setIsBusy(false);
        }
    };

    return (
        <div className="flex items-center justify-end">
            <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex items-center justify-center rounded-full border border-slate-900/20 bg-white/90 px-6 py-3 text-sm font-semibold text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:bg-amber-100"
            >
                {buttonText}
            </button>

            {isOpen ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="journal-subscribe-title">
                    <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),_transparent_40%),linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)] shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="absolute right-5 top-5 rounded-full border border-slate-900/15 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-white"
                            aria-label="Close subscribe form"
                        >
                            Close
                        </button>

                        <div className="grid min-h-[70vh] grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
                            <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-12">
                                <p className="text-[11px] uppercase tracking-[0.24em] text-slate-600">The Lab Journal</p>
                                <h3 id="journal-subscribe-title" className="mt-3 text-4xl font-semibold text-slate-900 sm:text-5xl">Subscribe</h3>
                                <p className="mt-5 max-w-xl text-base leading-8 text-slate-700">
                                    Subscribe to The Lab Journal to get notified whenever Aarush publishes something new. No spam — just new articles, technical notes, and thoughtful updates.
                                </p>
                            </div>

                            <div className="flex items-center justify-center bg-slate-950/5 p-6 sm:p-8 lg:p-12">
                                {step === 'form' && (
                                    <form
                                        onSubmit={(event) => {
                                            event.preventDefault();
                                            void submitEmail('subscribe');
                                        }}
                                        className="w-full max-w-md space-y-4 rounded-[1.75rem] border border-slate-900/10 bg-white/90 p-5 shadow-[12px_12px_0_rgba(15,23,42,0.06)] backdrop-blur-sm"
                                    >
                                        <div className="space-y-2">
                                            <label htmlFor="journal-subscriber-email" className="text-sm font-medium text-slate-800">Email address</label>
                                            <input
                                                id="journal-subscriber-email"
                                                type="email"
                                                inputMode="email"
                                                value={email}
                                                onChange={(event) => setEmail(event.target.value)}
                                                placeholder="you@example.com"
                                                className="w-full rounded-2xl border border-slate-900/15 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-amber-400"
                                                autoComplete="email"
                                                aria-invalid={Boolean(error)}
                                            />
                                        </div>

                                        {error ? (
                                            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                                                {error}
                                            </div>
                                        ) : null}

                                        <button
                                            type="submit"
                                            disabled={!canSubmit}
                                            className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/15 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                                        >
                                            {isBusy ? 'Sending…' : submitLabel}
                                        </button>
                                    </form>
                                )}

                                {step === 'verify' && (
                                    <div className="w-full max-w-md space-y-4 rounded-[1.75rem] border border-slate-900/10 bg-white/90 p-5 shadow-[12px_12px_0_rgba(15,23,42,0.06)] backdrop-blur-sm">
                                        <p className="text-lg font-semibold text-slate-900">Check your inbox 📬</p>
                                        <p className="text-sm leading-7 text-slate-700">
                                            We sent a verification code to <span className="font-medium text-slate-900">{maskedEmail}</span>.
                                        </p>

                                        <div className="space-y-2">
                                            <label htmlFor="journal-verification-code" className="text-sm font-medium text-slate-800">Verification code</label>
                                            <input
                                                id="journal-verification-code"
                                                type="text"
                                                inputMode="numeric"
                                                maxLength={6}
                                                value={code}
                                                onChange={(event) => setCode(event.target.value.replace(/\D/g, '').slice(0, 6))}
                                                placeholder="Enter 6-digit code"
                                                className="w-full rounded-2xl border border-slate-900/15 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none ring-0 placeholder:text-slate-400 focus:border-amber-400"
                                            />
                                        </div>

                                        {error ? (
                                            <div className="rounded-2xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700">
                                                {error}
                                            </div>
                                        ) : null}

                                        <div className="flex flex-col gap-3 sm:flex-row">
                                            <button
                                                type="button"
                                                disabled={isBusy}
                                                onClick={() => void verifyCode()}
                                                className="inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                {isBusy ? 'Verifying...' : 'Verify subscription'}
                                            </button>
                                        </div>

                                        <div className="flex flex-col justify-center gap-3 text-sm sm:flex-row">
                                            <button
                                                type="button"
                                                onClick={() => void submitEmail('resend')}
                                                disabled={isBusy}
                                                className="text-slate-700 transition hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
                                            >
                                                Resend code
                                            </button>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setStep('form');
                                                    setCode('');
                                                    setMaskedEmail('');
                                                    setError('');
                                                }}
                                                className="text-slate-600 transition hover:text-slate-950"
                                            >
                                                Change email
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {step === 'success' && (
                                    <div className="w-full max-w-md rounded-[1.75rem] border border-emerald-200 bg-emerald-50 p-5 text-center shadow-[12px_12px_0_rgba(15,23,42,0.06)]">
                                        <p className="text-2xl font-semibold text-slate-900">You&apos;re subscribed! 🎉</p>
                                        <p className="mt-4 text-sm leading-7 text-slate-700">
                                            You&apos;ll hear from me when I publish new Lab Journal updates.
                                        </p>
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="mt-5 inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                                        >
                                            Close
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
