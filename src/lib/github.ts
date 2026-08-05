export type GithubRepo = {
    id: number;
    name: string;
    full_name: string;
    html_url: string;
    description: string | null;
    language: string | null;
    topics: string[];
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    size: number;
    homepage?: string | null;
};

const FEATURED_REPO_NAMES = ["ultimate-type", "omnimath", "math-sprint-arena"];

const featuredOrder: Record<string, number> = FEATURED_REPO_NAMES.reduce((acc, name, index) => {
    acc[name.toLowerCase()] = index;
    return acc;
}, {} as Record<string, number>);

const getSortWeight = (repo: GithubRepo) => {
    const name = repo.name.toLowerCase();
    if (name in featuredOrder) {
        return -1000 + featuredOrder[name];
    }
    return 0;
};

export async function fetchGithubRepos(username: string, token?: string): Promise<GithubRepo[]> {
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
        const message = response.status === 403 ? "GitHub API rate limit reached." : "GitHub API returned an unexpected status.";
        throw new Error(`${message} (${response.status})`);
    }

    const json = (await response.json()) as Array<Record<string, unknown>>;

    const repos = json
        .map((item) => ({
            id: Number(item.id),
            name: String(item.name),
            full_name: String(item.full_name),
            html_url: String(item.html_url),
            description: item.description === null ? null : String(item.description),
            language: item.language === null ? null : String(item.language),
            topics: Array.isArray(item.topics) ? item.topics.map((topic) => String(topic)) : [],
            stargazers_count: Number(item.stargazers_count ?? 0),
            forks_count: Number(item.forks_count ?? 0),
            updated_at: String(item.updated_at),
            size: Number(item.size ?? 0),
            homepage: item.homepage === null ? null : item.homepage ? String(item.homepage) : null,
        }))
        .sort((a, b) => {
            const aFeatured = getSortWeight(a);
            const bFeatured = getSortWeight(b);
            if (aFeatured !== bFeatured) return aFeatured - bFeatured;
            return b.updated_at.localeCompare(a.updated_at);
        });

    return repos;
}
