"use client";

import GithubRepoCard from "@/components/GithubRepoCard";
import RepoSkeleton from "@/components/RepoSkeleton";
import { useGithubRepos } from "@/hooks/useGithubRepos";

export default function CSGithubProjects() {
    const { data, error, isLoading } = useGithubRepos();

    const repos = data ?? [];

    return (
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20" aria-labelledby="github-projects-heading">
            <div className="mb-8 max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300">GitHub</p>
                <h2 id="github-projects-heading" className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                    My Projects on GitHub
                </h2>
                <p className="mt-4 text-base leading-8 text-slate-300 sm:text-lg">
                    A collection of the projects, experiments, and ideas I&apos;ve built and worked on.
                </p>
            </div>

            {isLoading ? (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">
                    {Array.from({ length: 6 }).map((_, index) => (
                        <RepoSkeleton key={index} />
                    ))}
                </div>
            ) : error ? (
                <div className="rounded-[2rem] border border-cyan-400/20 bg-[#0b1d2f] p-7 text-slate-200 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">GitHub</p>
                    <p className="mt-4 text-lg text-slate-100">GitHub projects are temporarily unavailable.</p>
                </div>
            ) : repos.length === 0 ? (
                <div className="rounded-[2rem] border border-cyan-400/20 bg-[#0b1d2f] p-7 text-slate-200 sm:p-8">
                    <p className="text-lg text-slate-100">No GitHub projects to display yet.</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" role="list" aria-live="polite">
                    {repos.map((repo) => (
                        <div key={repo.id} role="listitem">
                            <GithubRepoCard repo={repo} featured={false} />
                        </div>
                    ))}
                </div>
            )}
        </section>
    );
}
