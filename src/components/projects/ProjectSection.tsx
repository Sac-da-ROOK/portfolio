import type { ReactNode } from "react";

type ProjectSectionProps = {
    title: string;
    description?: string;
    children?: ReactNode;
};

export default function ProjectSection({ title, description, children }: ProjectSectionProps) {
    return (
        <section className="glass-card rounded-[2rem] p-8">
            <h2 className="text-2xl font-semibold text-white">{title}</h2>
            {description ? <p className="mt-4 text-base leading-8 text-slate-300">{description}</p> : null}
            {children}
        </section>
    );
}
