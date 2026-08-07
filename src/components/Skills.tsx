"use client";

import { useEffect, useRef, useState } from "react";
import SkillBadge from "@/components/skills/SkillBadge";
import SkillCategoryCard from "@/components/skills/SkillCategoryCard";
import { skillIcons } from "@/components/skills/skillIcons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

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
        title: "Mathematical Thinking",
        description: "Core reasoning skills used in competitions and projects.",
        skills: [
            { name: "Problem Solving", level: 93, icon: "chartjs", detail: "Breaking complex problems into solvable steps with clear logic." },
            { name: "Algebra & Number Theory", level: 90, icon: "chartjs", detail: "Comfort with patterns, transformations, and competition-style techniques." },
            { name: "Geometry", level: 86, icon: "chartjs", detail: "Visual reasoning and proof-style thinking for spatial challenges." },
            { name: "Data Interpretation", level: 84, icon: "chartjs", detail: "Reading trends and evidence from graphs, tables, and experiments." }
        ]
    },
    {
        title: "Scientific Inquiry",
        description: "Methods for observation, testing, and analysis.",
        skills: [
            { name: "Experiment Design", level: 87, icon: "education", detail: "Forming hypotheses and designing repeatable tests." },
            { name: "Observation & Documentation", level: 89, icon: "education", detail: "Recording evidence clearly for reflection and reporting." },
            { name: "Evidence-Based Conclusions", level: 85, icon: "chartjs", detail: "Using data to support conclusions and improve future trials." }
        ]
    },
    {
        title: "Engineering & Robotics",
        description: "Hands-on design and iterative build skills.",
        skills: [
            { name: "Prototype Iteration", level: 88, icon: "game", detail: "Testing, revising, and improving builds based on performance." },
            { name: "Systems Thinking", level: 86, icon: "ai", detail: "Understanding how mechanical, electrical, and strategic choices interact." },
            { name: "Competition Execution", level: 83, icon: "game", detail: "Performing under constraints with preparation and adaptability." }
        ]
    },
    {
        title: "Communication & Reflection",
        description: "Turning learning into clear explanations and growth.",
        skills: [
            { name: "Technical Writing", level: 84, icon: "education", detail: "Writing clear notes, summaries, and competition reflections." },
            { name: "Presentation Skills", level: 82, icon: "education", detail: "Explaining ideas effectively in class and event settings." },
            { name: "Self-Assessment", level: 88, icon: "ai", detail: "Reviewing outcomes honestly to improve future performance." }
        ]
    },
    {
        title: "Currently Learning",
        description: "Emerging skills I'm adding to the toolkit.",
        skills: [
            { name: "Physics Modeling", level: 68, icon: "chartjs", detail: "Applying math to represent motion, force, and real systems." },
            { name: "Research Methods", level: 70, icon: "education", detail: "Improving citation, synthesis, and evidence quality in projects." },
            { name: "Advanced Competition Strategy", level: 66, icon: "game", detail: "Building smarter preparation systems across STEM events." }
        ]
    }
];

export default function Skills() {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef<HTMLElement | null>(null);
    const prefersReducedMotion = usePrefersReducedMotion();
    const shouldShow = prefersReducedMotion || visible;

    useEffect(() => {
        if (!sectionRef.current || prefersReducedMotion) return;

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
    }, [prefersReducedMotion]);

    return (
        <section id="skills" ref={sectionRef} className="section-shell px-6 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20" aria-labelledby="skills-heading">
            <div className="pointer-events-none absolute inset-x-0 top-10 hidden lg:block">
                <div className="mx-auto h-72 max-w-6xl">
                    <div className="absolute left-0 top-14 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />
                    <div className="absolute right-16 top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
                    <div className="absolute left-1/2 top-36 h-56 w-56 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />
                </div>
            </div>

            <div className="relative z-10 mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="section-kicker">Skills</p>
                    <h2 id="skills-heading" className="section-title">STEM strengths built through curiosity and practice.</h2>
                    <p className="section-lead">
                        These categories capture the STEM skills I apply across mathematics, robotics, competitions, and long-term learning. Each area reflects both current strengths and focused growth goals.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {skillCategories.map((category, index) => (
                        <SkillCategoryCard key={category.title} title={category.title} description={category.description} index={index} visible={shouldShow}>
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
            </div>
        </section>
    );
}
