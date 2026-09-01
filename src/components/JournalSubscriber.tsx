'use client';

import { FormEvent, useMemo, useState } from 'react';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function JournalSubscriber() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const buttonLabel = useMemo(() => (EMAIL_REGEX.test(email.trim()) ? 'Send confirmation email' : 'Subscribe'), [email]);
    const canSubmit = useMemo(() => EMAIL_REGEX.test(email.trim()) && status !== 'submitting', [email, status]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const trimmed = email.trim();
        if (!EMAIL_REGEX.test(trimmed)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setStatus('submitting');
        setMessage('');

        try {
            const response = await fetch('/api/subscribers', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmed }),
            });

            const payload = await response.json().catch(() => ({ error: 'Unable to subscribe right now.' }));

            if (!response.ok) {
                throw new Error(payload.error || 'Unable to subscribe right now.');
            }

            setStatus('success');
            setMessage('You are subscribed. New Lab Journal posts will arrive in your inbox.');
            setEmail('');
        } catch (error) {
            setStatus('error');
            setMessage(error instanceof Error ? error.message : 'Unable to subscribe right now.');
        }
    }

    return (
        <div className="flex items-center justify-end">
            <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-amber-300 px-5 py-2.5 text-sm font-semibold text-slate-900 hover:-translate-y-0.5 hover:bg-amber-200"
            >
                Subscribe
            </button>

            {isOpen ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="journal-subscribe-title">
                    <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-slate-200 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.25),_transparent_40%),linear-gradient(135deg,#f8fafc_0%,#e2e8f0_100%)] shadow-[0_30px_80px_rgba(15,23,42,0.35)]">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
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
                                <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4 rounded-[1.75rem] border border-slate-900/10 bg-white/90 p-5 shadow-[12px_12px_0_rgba(15,23,42,0.06)] backdrop-blur-sm">
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
                                            aria-invalid={status === 'error'}
                                        />
                                    </div>

                                    {message ? (
                                        <div className={`rounded-2xl border px-3 py-2 text-sm ${status === 'success' ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-rose-200 bg-rose-50 text-rose-700'}`}>
                                            {message}
                                        </div>
                                    ) : null}

                                    <button
                                        type="submit"
                                        disabled={!canSubmit}
                                        className="inline-flex w-full items-center justify-center rounded-full border border-slate-900/15 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                                    >
                                        {status === 'submitting' ? 'Sending…' : buttonLabel}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
}
