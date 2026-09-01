"use client";

import { useEffect, useState } from "react";

const SESSION_STORAGE_KEY = "lab-journal-vote";

type VoteValue = "like" | "dislike";
type VoteResponse = { likes: number; dislikes: number; vote: VoteValue };

export default function JournalArticleInteractions({ articleId, initialLikes, initialDislikes }: { articleId: string; initialLikes: number; initialDislikes: number }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [likes, setLikes] = useState(initialLikes);
    const [dislikes, setDislikes] = useState(initialDislikes);
    const [currentVote, setCurrentVote] = useState<VoteValue | null>(null);

    useEffect(() => {
        const storedVote = window.sessionStorage.getItem(SESSION_STORAGE_KEY);
        if (storedVote === "like" || storedVote === "dislike") {
            setCurrentVote(storedVote);
        }
    }, []);

    async function handleVote(value: VoteValue) {
        setError(null);
        setIsSubmitting(true);

        const sessionId = window.sessionStorage.getItem("lab-journal-session") ?? `${Date.now()}-${Math.random()}`;
        window.sessionStorage.setItem("lab-journal-session", sessionId);

        try {
            const response = await fetch("http://127.0.0.1:3001/api/votes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ articleId, sessionId, value }),
            });

            const payload = await response.json().catch(() => ({ error: "Unable to save vote." }));
            if (!response.ok) {
                throw new Error(payload.error || "Unable to save vote.");
            }

            const votePayload = payload as VoteResponse & { error?: string };
            setLikes(votePayload.likes ?? likes);
            setDislikes(votePayload.dislikes ?? dislikes);
            setCurrentVote(value);
            window.sessionStorage.setItem(SESSION_STORAGE_KEY, value);
        } catch (caughtError) {
            setError(caughtError instanceof Error ? caughtError.message : "Unable to save vote.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="mt-10 rounded-[1.75rem] border border-slate-900/15 bg-white/90 p-5 shadow-[10px_10px_0_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-600">Feedback</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">Was this article useful?</h3>
                </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
                <button
                    type="button"
                    onClick={() => handleVote("like")}
                    disabled={isSubmitting}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${currentVote === "like" ? "border-emerald-300 bg-emerald-50 text-emerald-700" : "border-slate-900/15 bg-slate-50 text-slate-700"}`}
                    aria-label="Like this article"
                >
                    👍 <span>{likes}</span>
                </button>
                <button
                    type="button"
                    onClick={() => handleVote("dislike")}
                    disabled={isSubmitting}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold ${currentVote === "dislike" ? "border-rose-300 bg-rose-50 text-rose-700" : "border-slate-900/15 bg-slate-50 text-slate-700"}`}
                    aria-label="Dislike this article"
                >
                    👎 <span>{dislikes}</span>
                </button>
            </div>

            {error ? <p className="mt-3 text-sm text-rose-700">{error}</p> : null}
        </div>
    );
}
