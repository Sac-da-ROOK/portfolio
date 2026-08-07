"use client";

import { useEffect, useRef, useState } from "react";
import SkillBadge from "@/components/skills/SkillBadge";
import SkillCategoryCard from "@/components/skills/SkillCategoryCard";
import { skillIcons } from "@/components/skills/skillIcons";

type Skill = {
    name: string;
    level: number;
    icon: string;
    detail: string;
};

type SkillCategory = {
    title: string;
    description: string;
    skills: Skill[];
};

const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        description: "Core programming languages that power my work.",
        skills: [
            { name: "Python", level: 92, icon: "python", detail: "Strong scripting, data parsing, and computational logic." },
            { name: "JavaScript", level: 94, icon: "javascript", detail: "Modern web interactions, DOM APIs, and front-end logic." },
            { name: "TypeScript", level: 90, icon: "typescript", detail: "Typed interfaces, safer components, and scalable application code." },
            { name: "HTML / CSS", level: 88, icon: "htmlcss", detail: "Responsive layouts, accessible markup, and polished styling." }
        ]
    },
    {
        title: "Frameworks",
        description: "Modern foundations for building robust interfaces.",
        skills: [
            { name: "React", level: 92, icon: "react", detail: "Component-based UI with reactive state and reusable patterns." },
            { name: "Next.js", level: 88, icon: "next", detail: "Server-side rendering, app routing, and optimized static delivery." },
            { name: "Tailwind CSS", level: 90, icon: "tailwind", detail: "Utility-first styling for clean, iterative design systems." }
        ]
    },
    {
        title: "Tools",
        description: "The development workflow that keeps my process reliable.",
        skills: [
            { name: "GitHub", level: 95, icon: "github", detail: "Version control, collaborative code review, and deployment pipelines." },
            { name: "Vercel", level: 92, icon: "vercel", detail: "Fast deployment, preview environments, and modern hosting." },
            { name: "VS Code", level: 94, icon: "vscode", detail: "Extensible editor workflow for development, debugging, and refactoring." }
        ]
    },
    {
        title: "Technologies",
        description: "Key domains I bring into every project.",
        skills: [
            { name: "AI / ML", level: 78, icon: "ai", detail: "Foundational model workflows, prompt design, and applied research." },
            { name: "Game Dev", level: 80, icon: "game", detail: "Interactive feedback loops, playtesting, and user-driven systems." },
            { name: "EdTech", level: 86, icon: "education", detail: "Learning tools, accessible experiences, and concept-driven interfaces." }
        ]
    },
    {
        title: "Currently Learning",
        description: "Emerging skills I'm adding to the toolkit.",
        skills: [
            { name: "Rust", level: 56, icon: "rust", detail: "Safe systems programming and performance-focused development." },
            { name: "GraphQL", level: 62, icon: "graphql", detail: "Flexible API design for efficient data-driven apps." },
            { name: "Docker", level: 54, icon: "docker", detail: "Containerized development workflows and reproducible environments." }
        ]
    }
];

export default function Skills() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" ref={sectionRef} className="relative overflow-hidden border-t border-white/10 bg-[#050816] px-6 py-24 sm:px-8 lg:px-12" aria-labelledby="skills-heading">
            <div className="pointer-events-none absolute inset-x-0 top-10 hidden lg:block">
                <div className="mx-auto h-72 max-w-6xl">
                    <div className="absolute left-0 top-14 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
                    <div className="absolute right-16 top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
                    <div className="absolute left-1/2 top-36 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
                </div>
            </div>

            <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Skills</p>
                <h2 id="skills-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Technical strengths with an edge for modern development.</h2>
                <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg">
                    I build interfaces and systems with performance, accessibility, and thoughtful interaction in mind. These categories represent the toolkit I use to shape educational software, games, and productivity experiences.
                </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                {skillCategories.map((category, index) => (
                    <SkillCategoryCard key={category.title} title={category.title} description={category.description} index={index} visible={visible}>
                        {category.skills.map((skill) => (
                            <SkillBadge
                                key={skill.name}
                                name={skill.name}
                                detail={skill.detail}
                                level={skill.level}
                                icon={skillIcons[skill.icon] ?? skillIcons.education}
                            />
                        ))}
                    </SkillCategoryCard>
                ))}
            </div>
        </section>
    );
}
