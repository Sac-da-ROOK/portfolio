"use client";

import { useEffect, useRef, useState } from "react";
import SkillBadge from "@/components/skills/SkillBadge";
import SkillCategoryCard from "@/components/skills/SkillCategoryCard";
import { skillIcons } from "@/components/skills/skillIcons";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type Skill = {
    name: string;
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
        description: "Reasoning patterns I use in coursework and competition work.",
        skills: [
            { name: "Algebra 1", icon: "chartjs", detail: "Current Coursework" },
            { name: "Problem Solving", icon: "chartjs", detail: "Competition-style reasoning and careful breakdowns" },
            { name: "Patterns & Logic", icon: "chartjs", detail: "Multiple-step reasoning in math and puzzles" }
        ]
    },
    {
        title: "Scientific Inquiry",
        description: "Evidence, testing, and reflective analysis in experiments.",
        skills: [
            { name: "Scientific Method", icon: "education", detail: "Applied through experiments and lab notes" },
            { name: "Observation", icon: "education", detail: "Careful recording of results and variables" },
            { name: "Data Review", icon: "chartjs", detail: "Comparing what changed and what stayed consistent" }
        ]
    },
    {
        title: "Engineering & Robotics",
        description: "Hands-on building, iteration, and systems thinking.",
        skills: [
            { name: "Robotics", icon: "game", detail: "Projects involving hardware, testing, and iteration" },
            { name: "Systems Thinking", icon: "ai", detail: "Understanding how mechanical and software choices connect" },
            { name: "Prototype Iteration", icon: "game", detail: "Improving a design after testing and feedback" }
        ]
    },
    {
        title: "Communication & Reflection",
        description: "Turning learning into clear explanations and strong documentation.",
        skills: [
            { name: "Technical Writing", icon: "education", detail: "Project reports and learning journal writing" },
            { name: "Presentation", icon: "education", detail: "Explaining ideas clearly in class and project settings" },
            { name: "Self-Reflection", icon: "ai", detail: "Reviewing mistakes and improving next steps" }
        ]
    },
    {
        title: "Current Focus",
        description: "Skills I am actively developing through real practice.",
        skills: [
            { name: "Python", icon: "chartjs", detail: "Learning through projects and problem solving" },
            { name: "Chess", icon: "game", detail: "Tournament experience and strategic practice" },
            { name: "Research Practices", icon: "education", detail: "Developing clearer documentation and evidence-based thinking" }
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
                        These categories capture how I am building skills across mathematics, robotics, competitions, and long-term learning. They reflect current work and evidence from projects and coursework rather than abstract ratings.
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
