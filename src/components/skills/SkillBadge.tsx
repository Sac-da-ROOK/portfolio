import type { ReactNode } from "react";

type SkillBadgeProps = {
    name: string;
    detail: string;
    level: number;
    icon: ReactNode;
};

export default function SkillBadge({ name, detail, level, icon }: SkillBadgeProps) {
    return (
        <div
            tabIndex={0}
            role="group"
            aria-label={`${name} proficiency ${level} percent. ${detail}`}
            className="interactive-card glass-card-soft group relative overflow-hidden rounded-[1.4rem] p-4 ui-transition hover:-translate-y-1 hover:border-cyan-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/40"
        >
            <div className="flex items-center gap-3">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-900/90 text-cyan-200 ring-1 ring-white/12 transition duration-300 group-hover:ring-cyan-400/40 group-focus-visible:ring-cyan-400/40">
                    {icon}
                </span>
                <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                        <p className="truncate text-sm font-semibold text-white">{name}</p>
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">{level}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/12">
                        <div
                            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-slate-300 to-amber-300 transition-all duration-500"
                            style={{ width: `${level}%` }}
                        />
                    </div>
                </div>
            </div>

            <div className="pointer-events-none absolute left-4 right-4 top-full mt-3 hidden rounded-2xl border border-white/12 bg-slate-950/95 px-3 py-2 text-xs leading-5 text-slate-200 shadow-2xl backdrop-blur-md group-hover:block group-focus-within:block">
                {detail}
            </div>
        </div>
    );
}
