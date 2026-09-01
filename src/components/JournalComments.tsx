"use client";

import { FormEvent, useEffect, useState } from "react";

type Comment = {
    id: string;
    articleId: string;
    name: string;
    message: string;
    createdAt: string;
};

export default function JournalComments({ articleId }: { articleId: string }) {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [comments, setComments] = useState<Comment[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        async function loadComments() {
            setIsLoading(true);
            try {
                const response = await fetch(`http://127.0.0.1:3001/api/comments?articleId=${encodeURIComponent(articleId)}`);
                const payload = await response.json().catch(() => ({ comments: [] }));
                setComments(Array.isArray(payload.comments) ? payload.comments : []);
            } catch {
                setComments([]);
            } finally {
                setIsLoading(false);
            }
        }

        loadComments();
    }, [articleId]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setError(null);
        setSuccess(null);

        const trimmedName = name.trim();
        const trimmedMessage = message.trim();

        if (!trimmedName || !trimmedMessage) {
            setError("Please provide both a name and a comment.");
            return;
        }

        if (trimmedMessage.length < 2) {
            setError("Please write a slightly longer comment.");
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("http://127.0.0.1:3001/api/comments", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ articleId, name: trimmedName, message: trimmedMessage }),
            });

            const payload = await response.json().catch(() => ({ error: "Unable to save comment." }));
            if (!response.ok) {
                throw new Error(payload.error || "Unable to save comment.");
            }

            const nextComment = payload.comment as Comment;
            setComments((current) => [nextComment, ...current]);
            setName("");
            setMessage("");
            setSuccess("Comment posted successfully.");
        } catch (caughtError) {
            setError(caughtError instanceof Error ? caughtError.message : "Unable to save comment.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <div className="mt-10 rounded-[1.75rem] border border-slate-900/15 bg-white/90 p-5 shadow-[10px_10px_0_rgba(15,23,42,0.06)]">
            <div className="flex items-center justify-between gap-3">
                <div>
                    <p className="text-[11px] uppercase tracking-[0.24em] text-slate-600">Discussion</p>
                    <h3 className="mt-2 text-xl font-semibold text-slate-900">Comments</h3>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
                <div className="grid gap-4 sm:grid-cols-[180px_1fr]">
                    <label className="space-y-2 text-sm font-medium text-slate-800">
                        <span>Display name</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            placeholder="Your name"
                            className="w-full rounded-2xl border border-slate-900/15 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-400"
                        />
                    </label>

                    <label className="space-y-2 text-sm font-medium text-slate-800">
                        <span>Comment</span>
                        <textarea
                            value={message}
                            onChange={(event) => setMessage(event.target.value)}
                            placeholder="Share your thoughts..."
                            rows={4}
                            className="w-full rounded-2xl border border-slate-900/15 bg-slate-50 px-3 py-2.5 text-sm text-slate-900 outline-none focus:border-amber-400"
                        />
                    </label>
                </div>

                {error ? <p className="text-sm text-rose-700">{error}</p> : null}
                {success ? <p className="text-sm text-emerald-700">{success}</p> : null}

                <button type="submit" disabled={isSubmitting} className="inline-flex items-center justify-center rounded-full border border-slate-900/15 bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white disabled:opacity-60">
                    {isSubmitting ? "Posting..." : "Post comment"}
                </button>
            </form>

            <div className="mt-6 space-y-4">
                {isLoading ? <div className="text-sm text-slate-600">Loading comments...</div> : null}

                {!isLoading && comments.length === 0 ? <div className="text-sm text-slate-600">No comments yet. Be the first to add one.</div> : null}

                {comments.map((comment) => (
                    <article key={comment.id} className="rounded-[1.5rem] border border-slate-900/10 bg-slate-50 p-4">
                        <div className="flex items-center justify-between gap-2">
                            <strong className="text-sm font-semibold text-slate-900">{comment.name}</strong>
                            <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
                        </div>
                        <p className="mt-2 text-sm leading-7 text-slate-700 whitespace-pre-wrap">{comment.message}</p>
                    </article>
                ))}
            </div>
        </div>
    );
}
