import type { GitHubRepository } from "@/types/github";

export type GithubRepo = GitHubRepository;

const FEATURED_REPO_NAMES = ["ultimate-type", "omnimath", "math-sprint-arena"];
const BLACKLISTED_REPOS = ["portfolio", "sac-da-rook"];

const featuredOrder: Record<string, number> = FEATURED_REPO_NAMES.reduce((acc, name, index) => {
    acc[name.toLowerCase()] = index;
    return acc;
}, {} as Record<string, number>);

const normalizeRepo = (item: Record<string, unknown>): GitHubRepository => ({
    id: Number(item.id ?? 0),
    name: String(item.name ?? ""),
    full_name: String(item.full_name ?? ""),
    html_url: String(item.html_url ?? ""),
    description: item.description === null ? null : item.description ? String(item.description) : null,
    language: item.language === null ? null : item.language ? String(item.language) : null,
    topics: Array.isArray(item.topics) ? item.topics.map((topic) => String(topic)) : [],
    stargazers_count: Number(item.stargazers_count ?? 0),
    forks_count: Number(item.forks_count ?? 0),
    updated_at: String(item.updated_at ?? ""),
    size: Number(item.size ?? 0),
    homepage: item.homepage === null || item.homepage === "" ? null : item.homepage ? String(item.homepage) : null,
    archived: Boolean(item.archived),
    disabled: Boolean(item.disabled),
    fork: Boolean(item.fork),
    private: Boolean(item.private),
    is_template: Boolean(item.is_template),
});

const isExcludedRepo = (repo: GitHubRepository, blacklist: string[] = BLACKLISTED_REPOS) => {
    const normalizedName = repo.name.toLowerCase();
    const normalizedFullName = repo.full_name.toLowerCase();
    return repo.archived || repo.disabled || repo.fork || repo.private || repo.is_template || blacklist.some((name) => normalizedName === name || normalizedFullName.includes(name));
};

const getSortWeight = (repo: GitHubRepository) => {
    const name = repo.name.toLowerCase();
    if (name in featuredOrder) {
        return -1000 + featuredOrder[name];
    }
    return 0;
};

const compareRepos = (a: GitHubRepository, b: GitHubRepository) => {
    const aFeatured = getSortWeight(a);
    const bFeatured = getSortWeight(b);

    if (aFeatured !== bFeatured) {
        return aFeatured - bFeatured;
    }

    if (a.homepage && !b.homepage) {
        return -1;
    }

    if (!a.homepage && b.homepage) {
        return 1;
    }

    const updatedDiff = new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    if (updatedDiff !== 0) {
        return updatedDiff;
    }

    return b.stargazers_count - a.stargazers_count;
};

export async function fetchGithubRepos(username: string, token?: string, blacklist: string[] = BLACKLISTED_REPOS): Promise<GithubRepo[]> {
    const url = `https://api.github.com/users/${encodeURIComponent(username)}/repos?per_page=100&type=public&sort=updated&direction=desc`;
    const headers: Record<string, string> = {
        Accept: "application/vnd.github+json",
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`;
    }

    const response = await fetch(url, {
        headers,
        next: { revalidate: 3600 },
    });

    if (!response.ok) {
        const message = response.status === 403 ? "GitHub API rate limit reached. Please try again shortly." : "GitHub API returned an unexpected response.";
        throw new Error(`${message} (${response.status})`);
    }

    const json = (await response.json()) as Array<Record<string, unknown>>;

    return json
        .map(normalizeRepo)
        .filter((repo) => !isExcludedRepo(repo, blacklist))
        .sort(compareRepos);
}
