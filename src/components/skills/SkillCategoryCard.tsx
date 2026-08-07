import type { ReactNode } from "react";

type SkillCategoryCardProps = {
    title: string;
    description: string;
    index: number;
    visible: boolean;
    children: ReactNode;
};

export default function SkillCategoryCard({ title, description, index, visible, children }: SkillCategoryCardProps) {
    return (
        <article
            className={`interactive-card group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-xl ui-transition ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${index * 90}ms` }}
            aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),_transparent_24%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`} className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                            {title}
                        </p>
                        <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
                    </div>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-slate-950/80 text-white/80">
                        <span className="text-xl">{index + 1}</span>
                    </div>
                </div>

                <div className="mt-6 grid gap-4">{children}</div>
            </div>
        </article>
    );
}
