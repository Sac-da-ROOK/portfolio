"use client";

import { useMemo } from "react";
import GithubRepoCard from "@/components/GithubRepoCard";
import RepoSkeleton from "@/components/RepoSkeleton";
import { useGithubRepos } from "@/hooks/useGithubRepos";
import type { GithubRepo } from "@/lib/github";

const featuredRepoNames = ["ultimate-type", "omnimath", "math-sprint-arena"];

const sortRepos = (repos: GithubRepo[]) => {
    return [...repos].sort((a, b) => {
        const aFeatured = featuredRepoNames.includes(a.name.toLowerCase());
        const bFeatured = featuredRepoNames.includes(b.name.toLowerCase());
        if (aFeatured !== bFeatured) return aFeatured ? -1 : 1;
        if (a.homepage && !b.homepage) return -1;
        if (!a.homepage && b.homepage) return 1;
        const updatedDiff = new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
        if (updatedDiff !== 0) return updatedDiff;
        return b.stargazers_count - a.stargazers_count;
    });
};

export default function GithubRepos() {
    const { data, error, isLoading } = useGithubRepos();

    const repos = useMemo(() => (data ? sortRepos(data).slice(0, 6) : []), [data]);

    return (
        <section id="github-repos" className="border-t border-white/10 bg-[#050816] px-6 py-24 sm:px-8 lg:px-12" aria-labelledby="github-repos-heading">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Projects • GitHub</p>
                    <h2 id="github-repos-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Always up to date with my latest public work.</h2>
                    <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                        Public repositories are fetched directly from GitHub, so this catalog stays current as I ship new experiments and refinements.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2" role="list" aria-live="polite">
                    {isLoading ? (
                        Array.from({ length: 4 }).map((_, index) => <RepoSkeleton key={index} />)
                    ) : error ? (
                        <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-8 text-slate-100 shadow-xl shadow-red-500/10 lg:col-span-2">
                            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-red-300">GitHub load error</p>
                            <p className="mt-4 text-base leading-7 text-slate-200">{error}</p>
                            <p className="mt-3 text-sm text-slate-400">If rate limiting is active, try again shortly or add a GitHub token to your environment variables for higher limits.</p>
                        </div>
                    ) : repos.length === 0 ? (
                        <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-8 text-slate-300 shadow-xl shadow-black/20 lg:col-span-2">
                            <p className="text-base leading-7">No repositories matched the current display rules. Try removing blacklist values or publish at least one active public repo with a valid name.</p>
                        </div>
                    ) : (
                        repos.map((repo) => (
                            <GithubRepoCard key={repo.id} repo={repo} featured={featuredRepoNames.includes(repo.name.toLowerCase())} />
                        ))
                    )}
                </div>
            </div>
        </section>
    );
}
