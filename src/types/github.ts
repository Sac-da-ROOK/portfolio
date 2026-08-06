export interface GitHubRepository {
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
    homepage: string | null;
    archived: boolean;
    disabled: boolean;
    fork: boolean;
    private: boolean;
    is_template: boolean;
}

export interface GitHubReposResponse {
    repos: GitHubRepository[];
}

export interface ProjectGithubMeta {
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    size: number;
    homepage: string | null;
}
