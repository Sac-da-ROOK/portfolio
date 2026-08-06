import { NextResponse } from "next/server";
import { fetchGithubRepos } from "@/lib/github";

const GITHUB_USERNAME = process.env.GITHUB_USERNAME ?? "Sac-da-ROOK";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const BLACKLIST = (process.env.GITHUB_REPO_BLACKLIST ?? "portfolio,sac-da-rook")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export async function GET() {
    try {
        const repos = await fetchGithubRepos(GITHUB_USERNAME, GITHUB_TOKEN, BLACKLIST);
        return NextResponse.json({ repos }, { status: 200 });
    } catch (error) {
        const message = error instanceof Error ? error.message : "GitHub request failed.";
        return NextResponse.json({ error: message, repos: [] }, { status: 500 });
    }
}
