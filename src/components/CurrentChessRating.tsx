"use client";

import { useChessRating } from "@/hooks/useChessRating";
import { useChessComRapidRating } from "@/hooks/useChessComRapidRating";
import { CHESS_COM_PROFILE_URL } from "@/lib/chesscom";
import { US_CHESS_PROFILE_URL } from "@/lib/chess";

type CurrentChessRatingProps = {
    variant: "hero" | "section";
};

function formatChessComTimestamp(timestamp: string) {
    return new Intl.DateTimeFormat("en-US", {
        timeZone: "America/Chicago",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).format(new Date(timestamp));
}

export default function CurrentChessRating({ variant }: CurrentChessRatingProps) {
    const { data, error, isLoading } = useChessRating();

    const {
        data: chessComData,
        error: chessComError,
        isLoading: chessComLoading,
    } = useChessComRapidRating();

    if (variant === "hero") {
        return (
            <div className="glass-card-soft rounded-2xl px-4 py-4">
                <p className="text-[11px] uppercase tracking-[0.26em] text-slate-600">
                    Chess Rating
                </p>

                <div className="mt-3 grid grid-cols-2 divide-x divide-slate-300/60">
                    <a
                        href={US_CHESS_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pr-4 ui-transition hover:text-amber-700"
                    >
                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
                            US Chess
                        </p>

                        {isLoading ? (
                            <p className="mt-1 text-2xl font-semibold text-slate-700">
                                Loading...
                            </p>
                        ) : data?.status === "ok" ? (
                            <p className="mt-1 text-2xl font-semibold text-slate-900">
                                {data.rating}
                            </p>
                        ) : (
                            <p className="mt-1 text-lg font-semibold text-slate-800">
                                Unavailable
                            </p>
                        )}
                    </a>

                    <a
                        href={CHESS_COM_PROFILE_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pl-4 ui-transition hover:text-amber-700"
                    >
                        <p className="text-[10px] uppercase tracking-[0.18em] text-slate-600">
                            Chess.com Rapid
                        </p>

                        {chessComLoading ? (
                            <p className="mt-1 text-2xl font-semibold text-slate-700">
                                Loading...
                            </p>
                        ) : chessComData?.status === "ok" ? (
                            <p className="mt-1 text-2xl font-semibold text-slate-900">
                                {chessComData.rating}
                            </p>
                        ) : (
                            <p className="mt-1 text-lg font-semibold text-slate-800">
                                Unavailable
                            </p>
                        )}
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/15">
            <a
                href={US_CHESS_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pr-0 md:pr-8 py-2 ui-transition hover:text-cyan-200"
            >
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    US Chess
                </p>

                <p className="mt-2 text-4xl font-semibold text-white">
                    {isLoading ? (
                        <span className="text-slate-300">Loading...</span>
                    ) : data?.status === "ok" ? (
                        <>
                            {data.rating}{" "}
                            <span className="text-sm text-slate-400">
                                ({data.sectionName})
                            </span>
                        </>
                    ) : (
                        <span className="text-lg">Unavailable</span>
                    )}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                    {data?.status === "ok"
                        ? `Latest completed event: ${data.eventName}. Regular rating updated from ${data.previousRating} to ${data.rating}.`
                        : error ?? "Latest regular rating unavailable."}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                    Open US Chess profile ↗
                </p>
            </a>

            <a
                href={CHESS_COM_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pt-6 md:pt-2 md:pl-8 ui-transition hover:text-cyan-200"
            >
                <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                    Chess.com Rapid
                </p>

                <p className="mt-2 text-4xl font-semibold text-white">
                    {chessComLoading ? (
                        <span className="text-slate-300">Loading...</span>
                    ) : chessComData?.status === "ok" ? (
                        <>
                            {chessComData.rating}{" "}
                            <span className="text-sm text-slate-400">
                                (Rapid)
                            </span>
                        </>
                    ) : (
                        <span className="text-lg">Unavailable</span>
                    )}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                    {chessComData?.status === "ok"
                        ? `Current Chess.com Rapid rating as of ${formatChessComTimestamp(
                            chessComData.fetchedAt
                        )} CT.`
                        : chessComError ?? "Chess.com Rapid rating unavailable."}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-500">
                    Open Chess.com profile ↗
                </p>
            </a>
        </div>
    );
}