"use client";

import { useChessRating } from "@/hooks/useChessRating";
import { US_CHESS_PROFILE_URL } from "@/lib/chess";

type CurrentChessRatingProps = {
    variant: "hero" | "section";
};

export default function CurrentChessRating({ variant }: CurrentChessRatingProps) {
    const { data, error, isLoading } = useChessRating();

    if (variant === "hero") {
        return (
            <div className="glass-card-soft rounded-2xl px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.26em] text-slate-600">Chess Rating</p>
                {isLoading ? (
                    <p className="mt-1 text-2xl font-semibold text-slate-700">Loading...</p>
                ) : data?.status === "ok" ? (
                    <>
                        <a
                            href={data.eventUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-2xl font-semibold text-slate-900 ui-transition hover:text-amber-700"
                        >
                            {data.rating}
                        </a>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-600">{data.eventName}</p>
                    </>
                ) : (
                    <>
                        <a
                            href={US_CHESS_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-lg font-semibold text-slate-800 ui-transition hover:text-amber-700"
                        >
                            Unavailable
                        </a>
                        <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-600">{error ?? "Latest event rating unavailable"}</p>
                    </>
                )}
            </div>
        );
    }

    return (
        <>
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Current Rating</p>
            <p className="mt-2 text-4xl font-semibold text-white">
                {isLoading ? (
                    <span className="text-slate-300">Loading...</span>
                ) : data?.status === "ok" ? (
                    <>
                        <a
                            href={data.eventUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ui-transition hover:text-cyan-200"
                        >
                            {data.rating}
                        </a>{" "}
                        <span className="text-sm text-slate-400">({data.sectionName})</span>
                    </>
                ) : (
                    <>
                        <a
                            href={US_CHESS_PROFILE_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ui-transition hover:text-cyan-200"
                        >
                            Unavailable
                        </a>{" "}
                        <span className="text-sm text-slate-400">(latest regular rating unavailable)</span>
                    </>
                )}
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-300">
                {data?.status === "ok"
                    ? `Latest completed event: ${data.eventName}. Regular rating updated from ${data.previousRating} to ${data.rating}.`
                    : "I track calculation accuracy, opening quality, and endgame conversion after each event."}
            </p>
        </>
    );
}