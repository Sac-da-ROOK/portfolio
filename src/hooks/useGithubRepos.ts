"use client";

import { useEffect, useState } from "react";
import type { GithubRepo } from "@/lib/github";

export type GithubRepoState = {
    data: GithubRepo[] | null;
    error: string | null;
    isLoading: boolean;
};

export function useGithubRepos() {
    const [state, setState] = useState<GithubRepoState>({
        data: null,
        error: null,
        isLoading: true,
    });

    useEffect(() => {
        const controller = new AbortController();

        async function load() {
            try {
                const response = await fetch("/api/github", {
                    signal: controller.signal,
                    cache: "no-store",
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

        load();
        return () => controller.abort();
    }, []);

    return state;
}
