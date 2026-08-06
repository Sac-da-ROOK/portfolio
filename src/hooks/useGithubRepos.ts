"use client";

import { useEffect, useMemo, useState } from "react";
import type { GithubRepo } from "@/lib/github";

export type GithubRepoState = {
    data: GithubRepo[] | null;
    error: string | null;
    isLoading: boolean;
};

const EMPTY_STATE: GithubRepoState = {
    data: null,
    error: null,
    isLoading: true,
};

export function useGithubRepos() {
    const [state, setState] = useState<GithubRepoState>(EMPTY_STATE);

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                const response = await fetch("/api/github", {
                    signal: controller.signal,
                    cache: "no-store",
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    const body = await response.json().catch(() => ({}));
                    throw new Error((body && (body.error || body.message)) ?? "Unable to load GitHub repositories.");
                }

                const payload = (await response.json()) as { repos: GithubRepo[] };
                setState({ data: payload.repos, error: null, isLoading: false });
            } catch (error) {
                if (controller.signal.aborted) return;
                setState({ data: null, error: error instanceof Error ? error.message : "Request failed.", isLoading: false });
            }
        }

        void load();
        return () => controller.abort();
    }, []);

    return useMemo(() => state, [state.data, state.error, state.isLoading]);
}
