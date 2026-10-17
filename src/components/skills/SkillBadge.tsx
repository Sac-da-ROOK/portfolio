import type { ReactNode } from "react";

type SkillBadgeProps = {
    name: string;
    detail: string;
    icon: ReactNode;
};

export default function SkillBadge({ name, detail, icon }: SkillBadgeProps) {
    return (
        <div
            tabIndex={0}
            role="group"
            aria-label={`${name}. ${detail}`}
            className="interactive-card glass-card-soft group relative overflow-hidden rounded-[1.4rem] p-4 ui-transition hover:-translate-y-1 hover:border-cyan-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
        >
            <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900/90 text-cyan-200 ring-1 ring-white/12 transition duration-300 group-hover:ring-cyan-400/40 group-focus-visible:ring-cyan-400/40">
                    {icon}
                </span>
                <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">{name}</p>
                    <p className="mt-2 text-[11px] uppercase tracking-[0.22em] text-slate-400">{detail}</p>
                </div>
            </div>
        </div>
    );
}
