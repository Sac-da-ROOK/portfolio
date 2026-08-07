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
            className={`interactive-card glass-card group relative overflow-hidden rounded-[2rem] p-6 ui-transition ${visible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            style={{ transitionDelay: `${index * 90}ms` }}
            aria-labelledby={`${title.toLowerCase().replace(/\s+/g, "-")}-title`}
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.16),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.14),_transparent_24%)] opacity-0 transition duration-500 group-hover:opacity-100" />
            <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p id={`${title.toLowerCase().replace(/\s+/g, "-")}-title`} className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                            {title}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-slate-300">{description}</p>
                    </div>
                    <div className="glass-card-soft flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white/80">
                        <span className="text-xl">{index + 1}</span>
                    </div>
                </div>

                <div className="mt-6 grid gap-4">{children}</div>
            </div>
        </article>
    );
}
