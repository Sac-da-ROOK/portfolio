import type { GithubRepo } from "@/lib/github";

type GithubRepoCardProps = {
    repo: GithubRepo;
    featured?: boolean;
};

const formatUpdatedDate = (updatedAt: string) => {
    try {
        return new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric" }).format(new Date(updatedAt));
    } catch {
        return updatedAt;
    }
};

export default function GithubRepoCard({ repo, featured = false }: GithubRepoCardProps) {
    return (
        <article className={`interactive-card group relative overflow-hidden rounded-3xl border bg-slate-950/80 p-6 shadow-xl ui-transition hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-slate-900/90 ${featured ? "border-cyan-400/40" : "border-white/10"}`}>
            <div className="flex items-start justify-between gap-4">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-300">{repo.language ?? "Unknown"}</p>
                    <h3 className="mt-3 text-xl font-semibold text-white">{repo.name}</h3>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] ${featured ? "bg-cyan-400/15 text-cyan-200" : "bg-white/5 text-slate-300"}`}>
                    {featured ? "Featured" : "GitHub"}
                </span>
            </div>

            <p className="mt-5 text-sm leading-7 text-slate-300">{repo.description ?? "No description available."}</p>

            <div className="mt-5 flex flex-wrap gap-2">
                {repo.topics.slice(0, 6).map((topic) => (
                    <span key={topic} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {topic}
                    </span>
                ))}
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Stars</p>
                    <p className="mt-2 text-lg font-semibold text-white">{repo.stargazers_count.toLocaleString()}</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Forks</p>
                    <p className="mt-2 text-lg font-semibold text-white">{repo.forks_count.toLocaleString()}</p>
                </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Updated</p>
                    <p className="mt-1 text-sm text-slate-300">{formatUpdatedDate(repo.updated_at)}</p>
                </div>
                <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Size</p>
                    <p className="mt-1 text-sm text-slate-300">{repo.size.toLocaleString()} KB</p>
                </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
                <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white ui-transition hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-200"
                >
                    View on GitHub
                </a>
                {repo.homepage ? (
                    <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/80 px-5 py-3 text-sm font-semibold text-slate-200 ui-transition hover:border-cyan-400/30 hover:bg-slate-900/95 hover:text-white"
                    >
                        Live Demo
                    </a>
                ) : null}
            </div>
        </article>
    );
}
