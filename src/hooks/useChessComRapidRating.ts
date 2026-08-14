"use client";

import { useEffect, useState } from "react";
import type { ChessComRapidResult } from "@/lib/chesscom";

type ChessComRapidState = {
    data: ChessComRapidResult | null;
    error: string | null;
    isLoading: boolean;
};

const EMPTY_STATE: ChessComRapidState = {
    data: null,
    error: null,
    isLoading: true,
};

export function useChessComRapidRating() {
    const [state, setState] = useState<ChessComRapidState>(EMPTY_STATE);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                const response = await fetch("/api/chess-com-rating", {
                    signal: controller.signal,
                    cache: "no-store",
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Unable to load the current Chess.com Rapid rating.");
                }

                const payload = (await response.json()) as ChessComRapidResult;

                if (payload.status !== "ok") {
                    setState({
                        data: payload,
                        error: payload.error,
                        isLoading: false,
                    });
                    return;
                }

                setState({
                    data: payload,
                    error: null,
                    isLoading: false,
                });
            } catch (error) {
                if (controller.signal.aborted) return;

                setState({
                    data: null,
                    error: error instanceof Error ? error.message : "Request failed.",
                    isLoading: false,
                });
            }
        }

        void load();

        return () => controller.abort();
    }, []);

    return state;
}