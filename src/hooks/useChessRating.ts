"use client";

import { useEffect, useState } from "react";
import type { ChessRatingResult } from "@/lib/chess";

type ChessRatingState = {
    data: ChessRatingResult | null;
    error: string | null;
    isLoading: boolean;
};

const EMPTY_STATE: ChessRatingState = {
    data: null,
    error: null,
    isLoading: true,
};

export function useChessRating() {
    const [state, setState] = useState<ChessRatingState>(EMPTY_STATE);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                const response = await fetch("/api/chess-rating", {
                    signal: controller.signal,
                    cache: "no-store",
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error("Unable to load the current US Chess rating.");
                }

                const payload = (await response.json()) as ChessRatingResult;

                if (payload.status !== "ok") {
                    setState({ data: payload, error: payload.error, isLoading: false });
                    return;
                }

                setState({ data: payload, error: null, isLoading: false });
            } catch (error) {
                if (controller.signal.aborted) return;
                setState({ data: null, error: error instanceof Error ? error.message : "Request failed.", isLoading: false });
            }
        }

        void load();
        return () => controller.abort();
    }, []);

    return state;
}