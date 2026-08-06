import type { Metadata } from "next";

export type ProjectData = {
    slug: string;
    title: string;
    subtitle: string;
    description: string;
    details: string;
    status: string;
    tags: string[];
    href: string;
    repo: string;
    screenshot: string;
    gallery: string[];
    featured?: boolean;
    problem: string;
    why: string;
    techStack: string[];
    features: string[];
    challenges: string[];
    learnings: string[];
    nextSteps: string[];
};

export const projects: ProjectData[] = [
    {
        slug: "ultimatetype",
        title: "UltimateType",
        subtitle: "A refined typing platform with analytics and performance-driven training.",
        description:
            "Built for speed and accuracy, UltimateType combines real-time metrics, progress tracking, and productive practice flows that help users improve faster.",
        details:
            "A polished typing experience that turns repetition into meaningful training by showing accuracy, cadence, and evolution across every session.",
        status: "Production",
        tags: ["React", "TypeScript", "Vercel"],
        href: "https://ultimate-type.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/ultimate-type-1.svg",
        gallery: [
            "/images/featured/ultimate-type-1.svg",
            "/images/featured/ultimate-type-2.svg",
            "/images/featured/ultimate-type-3.svg"
        ],
        featured: true,
        problem:
            "Many typing tools focus on arbitrary exercises without clear feedback, making it hard to track progress or build muscle memory with purpose.",
        why:
            "UltimateType was created to give learners precise speed and accuracy feedback while keeping each practice session focused, engaging, and measurable.",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        features: [
            "Live speed and accuracy metrics for every input session.",
            "Structured drills with adaptive difficulty and session summaries.",
            "Progress charts that reveal improvement over time.",
            "Clean UI optimized for focus and fast practice."
        ],
        challenges: [
            "Balancing instant performance feedback without distracting the learner.",
            "Creating a responsive input experience that feels smooth across devices.",
            "Designing analytics that are informative but not overwhelming."
        ],
        learnings: [
            "Effective practice tools need frictionless input and immediate clarity.",
            "Users trust progress when feedback is consistent and easy to interpret.",
            "Visual polish matters for sustained engagement in repeated training sessions."
        ],
        nextSteps: [
            "Add personalized daily training goals and streak tracking.",
            "Introduce custom typing themes and keyboard layouts.",
            "Expand analytics with heatmaps and challenge modes."
        ]
    },
    {
        slug: "omnimath",
        title: "OmniMath",
        subtitle: "Interactive math learning tools designed to make concepts feel more approachable.",
        description:
            "OmniMath combines guided practice with dynamic visual tools, helping students explore abstract ideas through concrete, playful interactions.",
        details:
            "A modern learning hub for building confidence with math through examples, guided explanations, and interactive exercises.",
        status: "Active",
        tags: ["Next.js", "React", "Education"],
        href: "https://omnimath-rho.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg",
        gallery: [
            "/images/featured/placeholder.svg",
            "/images/featured/placeholder.svg"
        ],
        featured: true,
        problem:
            "Students often struggle to connect math concepts when practice is abstract or presented without discovery-based interaction.",
        why:
            "OmniMath was built to make math feel less intimidating by layering explanation, practice, and interactive reinforcement in one experience.",
        techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        features: [
            "Concept cards that break topics into approachable steps.",
            "Interactive practice modules with instant validation.",
            "Progress tracking for repeated review and improvement.",
            "Responsive layouts optimized for study sessions on any device."
        ],
        challenges: [
            "Keeping explanations concise without oversimplifying concepts.",
            "Designing a learning flow that feels natural and not overwhelming.",
            "Building interactive examples that remain fast on low-end devices."
        ],
        learnings: [
            "Clear structure is critical for math learning experiences.",
            "Interaction helps learners retain abstract concepts more effectively.",
            "A calm visual system improves focus and reduces cognitive load."
        ],
        nextSteps: [
            "Add topic-based learning paths and skill checkpoints.",
            "Introduce adaptive exercises based on performance.",
            "Build richer visualizations for algebra, geometry, and functions."
        ]
    },
    {
        slug: "mathsprint",
        title: "MathSprint Arena",
        subtitle: "A fast-paced math practice experience focused on speed, rhythm, and engagement.",
        description:
            "Designed to make math practice feel kinetic, this game blends responsive interaction with goal-driven progressions and crisp visual feedback.",
        details:
            "MathSprint turns skill-building into a pacing challenge, rewarding accuracy, speed, and smart play across every round.",
        status: "Live",
        tags: ["JavaScript", "Game", "Web"],
        href: "https://math-sprint-arena.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/math-sprint-arena-1.svg",
        gallery: [
            "/images/featured/math-sprint-arena-1.svg",
            "/images/featured/math-sprint-arena-2.svg",
            "/images/featured/math-sprint-arena-3.svg"
        ],
        featured: true,
        problem:
            "Standard drills can feel repetitive and fail to motivate learners who need energy and reward built into practice.",
        why:
            "MathSprint was created to bring momentum, clear feedback, and meaningful goals to everyday math work.",
        techStack: ["JavaScript", "HTML", "CSS", "Web Audio API"],
        features: [
            "Timed math rounds with score-based progression.",
            "Responsive controls and dynamic difficulty pacing.",
            "Visual feedback that reinforces accuracy and speed.",
            "A polished interface that keeps practice feeling playful."
        ],
        challenges: [
            "Balancing difficulty so practice stayed challenging without becoming frustrating.",
            "Maintaining performance in fast-paced animations and input handling.",
            "Designing reward feedback that felt motivating but not distracting."
        ],
        learnings: [
            "Playful practice increases confidence and retention.",
            "Fast feedback is essential for momentum-based learning tools.",
            "A strong visual rhythm helps users stay engaged session after session."
        ],
        nextSteps: [
            "Add power-ups and daily challenge modes.",
            "Build multiplayer or leaderboard support.",
            "Expand the range of math topics with new level packs."
        ]
    }
];

export const featuredProjects = projects.filter((project) => project.featured);

export function getProjectBySlug(slug: string) {
    return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs() {
    return projects.map((project) => project.slug);
}

export function metadataForProject(project: ProjectData): Metadata {
    return {
        title: `${project.title} | Portfolio`,
        description: project.description,
        openGraph: {
            title: `${project.title} | Portfolio`,
            description: project.details,
            type: "website"
        }
    };
}
