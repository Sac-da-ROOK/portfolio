import { fetchTournamentHistoryCount } from "@/lib/chess";

export type PublicProjectRecord = {
    id: string;
    title: string;
    status: "Completed" | "Active" | "Prototype" | "Concept";
    href: string;
    isPublic: boolean;
};

export type PublicCompetitionRecord = {
    id: string;
    title: string;
    status: "Completed" | "Verified";
    href: string;
    isPublic: boolean;
};

export type PublicAwardRecord = {
    id: string;
    title: string;
    type: "Academic" | "Competitive" | "Recognition";
    href: string;
    isPublic: boolean;
};

export type PublicBookRecord = {
    id: string;
    title: string;
    status: "Completed" | "In progress";
    href: string;
    isPublic: boolean;
};

export const publicProjectRecords: PublicProjectRecord[] = [
    { id: "ultimate-type", title: "UltimateType", status: "Completed", href: "/projects/ultimatetype", isPublic: true },
    { id: "omnimath", title: "OmniMath", status: "Completed", href: "/projects/omnimath", isPublic: true },
    { id: "mathsprint", title: "MathSprint Arena", status: "Completed", href: "/projects/mathsprint", isPublic: true },
    { id: "my-portfolio", title: "My Portfolio", status: "Completed", href: "/projects/portfolio", isPublic: true },
    { id: "personal-browser", title: "Personal Browser", status: "Prototype", href: "/projects/personal-browser", isPublic: true },
    { id: "basic-arcade", title: "Basic Arcade", status: "Prototype", href: "/projects/basic-arcade", isPublic: true },
    { id: "global-route-navigator", title: "Global Route Navigator", status: "Concept", href: "/projects/global-route-navigator", isPublic: true },
    { id: "dynamic-diagram", title: "Dynamic Diagram", status: "Prototype", href: "/projects/dynamic-diagram", isPublic: true },
    { id: "omni-adventure-engine", title: "Omni Adventure Engine", status: "Prototype", href: "/projects/omni-adventure-engine", isPublic: true },
    { id: "arcade-prototype-beta", title: "Arcade Prototype Beta", status: "Prototype", href: "/projects/arcade-prototype-beta", isPublic: true }
];

export const publicCompetitionRecords: PublicCompetitionRecord[] = [
    { id: "map-test-fall-2026", title: "Map Test Fall 2026", status: "Verified", href: "/#competitions", isPublic: true },
    { id: "iac-regionals-2025", title: "IAC Regionals 2025", status: "Verified", href: "/#competitions", isPublic: true }
];

export const publicAwardRecords: PublicAwardRecord[] = [
    { id: "rit-score-269", title: "Map Test: 269 RIT, 99th percentile", type: "Academic", href: "/#competitions", isPublic: true },
    { id: "iac-il-3rd", title: "IAC Regionals: 3rd in Illinois", type: "Competitive", href: "/#competitions", isPublic: true }
];

export const publicBookRecords: PublicBookRecord[] = [
    { id: "number-devil", title: "The Number Devil", status: "Completed", href: "/#learning", isPublic: true },
    { id: "joy-of-x", title: "The Joy of x", status: "Completed", href: "/#learning", isPublic: true },
    { id: "how-not-to-be-wrong", title: "How Not to Be Wrong", status: "Completed", href: "/#learning", isPublic: true },
    { id: "what-if", title: "What If?", status: "Completed", href: "/#learning", isPublic: true },
    { id: "brief-history-of-time", title: "A Brief History of Time", status: "Completed", href: "/#learning", isPublic: true },
    { id: "elegant-universe", title: "The Elegant Universe", status: "Completed", href: "/#learning", isPublic: true },
    { id: "story-of-physics", title: "The Story of Physics", status: "Completed", href: "/#learning", isPublic: true },
    { id: "signal-and-the-noise", title: "The Signal and the Noise", status: "Completed", href: "/#learning", isPublic: true },
    { id: "code-book", title: "The Code Book", status: "Completed", href: "/#learning", isPublic: true },
    { id: "art-of-thinking-clearly", title: "The Art of Thinking Clearly", status: "Completed", href: "/#learning", isPublic: true }
];

export const statDefinitions = {
    projects:
        "Completed public projects currently documented on the site. Prototype and concept builds are excluded from the main completed-project total unless they are explicitly marked as complete.",
    tournaments:
        "The total number of completed US Chess tournaments in the public tournament history for this profile, as listed on the official player record.",
    awards:
        "Publicly verified awards or recognized results linked to official documentation. Participation-only certificates are not counted here.",
    books:
        "Books publicly completed and documented in the learning library. In-progress reads are excluded from the completed count."
} as const;

export async function getWebsiteStats() {
    const tournaments = await fetchTournamentHistoryCount();

    return {
        projects: publicProjectRecords.filter((project) => project.isPublic && ["Completed", "Active"].includes(project.status)).length,
        tournaments,
        awards: 21,
        books: publicBookRecords.filter((entry) => entry.isPublic && entry.status === "Completed").length
    };
}

export async function getHeroStats() {
    const websiteStats = await getWebsiteStats();

    return [
        {
            label: "Projects",
            value: String(websiteStats.projects),
            href: "/projects",
            definition: statDefinitions.projects
        },
        {
            label: "Tournaments",
            value: String(websiteStats.tournaments),
            href: "https://ratings.uschess.org/player/31082517",
            definition: statDefinitions.tournaments
        },
        {
            label: "Books",
            value: String(websiteStats.books),
            href: "/#learning",
            definition: statDefinitions.books
        },
        {
            label: "Awards",
            value: String(websiteStats.awards),
            href: "/#competitions",
            definition: statDefinitions.awards
        }
    ] as const;
}
