import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

const projects = [
    {
        title: "UltimateType",
        description: "A refined typing platform with analytics and practice tools.",
        details: "Built for speed and accuracy, UltimateType combines real-time metrics, performance tracking, and clean skill-building workflows for learners who want measurable progress.",
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
        featured: true
    },
    {
        title: "Global Route Navigator",
        description: "A route-planning experience built around interaction, clarity, and exploratory movement.",
        details: "This project focuses on intuitive pathfinding and dynamic visuals, delivering a polished navigation tool that highlights interactive mapping and spatial awareness.",
        status: "Live",
        tags: ["Next.js", "UI", "Maps"],
        href: "https://global-route-navigator-lilac.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/global-route-navigator-1.svg",
        gallery: [
            "/images/featured/global-route-navigator-1.svg",
            "/images/featured/global-route-navigator-2.svg"
        ],
        featured: true
    },
    {
        title: "Math Sprint Arena",
        description: "A fast-paced practice experience focused on speed, rhythm, and engagement.",
        details: "Designed to make math practice feel kinetic, this game blends responsive interaction with goal-driven progressions and crisp visual feedback.",
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
        featured: true
    },
    {
        title: "OmniMath",
        description: "Interactive mathematical learning tools designed to make concepts feel approachable.",
        details: "OmniMath combines practice content with interactive elements, making abstract topics easier to digest through guided experiences.",
        status: "Active",
        tags: ["Next.js", "UI", "Education"],
        href: "https://omnimath-rho.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg"
    },
    {
        title: "Dynamic Diagram",
        description: "An interactive visual learning experience for diagrams and conceptual exploration.",
        details: "This project explores animated diagram interactions, letting users manipulate content and discover relationships through smooth motion.",
        status: "Active",
        tags: ["React", "Visualization", "Education"],
        href: "https://dynamic-diagram-jade.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg"
    },
    {
        title: "Basic Arcade",
        description: "A compact arcade-style project centered on game feel and playful interaction.",
        details: "A lightweight, retro-inspired experience that emphasizes responsive control and clear feedback for quick, repeatable play.",
        status: "Prototype",
        tags: ["JavaScript", "Game", "Arcade"],
        href: "https://basic-arcade.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg"
    },
    {
        title: "Arcade Prototype Beta",
        description: "An experimental playground for early game concepts and interface ideas.",
        details: "A prototype environment for exploring mechanics, pacing, and visual polish before moving into a fuller game build.",
        status: "Prototype",
        tags: ["Prototype", "Game", "Web"],
        href: "https://arcade-prototype-beta.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg"
    },
    {
        title: "Omni Adventure Engine",
        description: "A creative interactive world-building project with a strong exploratory tone.",
        details: "This engine blends world-building with responsive interaction, supporting narrative discovery and exploratory moments.",
        status: "Active",
        tags: ["Creative", "Web", "Story"],
        href: "https://omni-adventure-engine.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg"
    },
    {
        title: "Math Master Game",
        description: "A challenge-driven math experience designed around progression and feedback.",
        details: "Math Master Game emphasizes reward loops and clear milestones, making practice feel more like a strategic challenge than rote work.",
        status: "Active",
        tags: ["Game", "Math", "UI"],
        href: "https://math-master-game-five.vercel.app",
        repo: "https://github.com/Sac-da-ROOK",
        screenshot: "/images/featured/placeholder.svg"
    }
];

export default function Projects() {
    return (
        <Section id="projects" aria-labelledby="projects-heading">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Featured Projects</p>
                    <h2 id="projects-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected work built with intention.</h2>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} {...project} />
                    ))}
                </div>
            </div>
        </Section>
    );
}
