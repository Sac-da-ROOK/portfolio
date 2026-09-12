import Image from "next/image";
import Link from "next/link";
import type { ProjectData } from "@/lib/projects";

type ProjectHeroProps = {
    project: ProjectData;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
    const githubUrl = project.githubUrl || project.repo;

    return (
        <div className="relative overflow-hidden rounded-[2.25rem] border border-cyan-400/20 bg-[#0a1325] p-6 shadow-[0_18px_40px_rgba(8,47,73,0.18)] sm:p-8 lg:p-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
                <div className="max-w-3xl">
                    <p className="!text-cyan-200 text-xs font-semibold uppercase tracking-[0.32em]">Project Case Study</p>
                    <h1 id="project-detail-heading" className="mt-4 text-3xl font-semibold tracking-[-0.04em] !text-slate-50 sm:text-4xl lg:text-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-4 max-w-2xl text-base leading-8 !text-slate-200 sm:text-lg">{project.subtitle}</p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <span className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium !text-cyan-100">{project.status}</span>
                        {project.tags.map((tag) => (
                            <span key={tag} className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-4 py-2 text-sm font-medium !text-emerald-100">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {project.href ? (
                            <Link
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(14,165,233,0.26)]"
                            >
                                Visit Live App
                            </Link>
                        ) : null}
                        <Link
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-11 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-500/10 px-5 py-3 text-sm font-semibold text-cyan-100 transition duration-300 hover:border-cyan-200/60 hover:bg-cyan-500/20 hover:text-white"
                        >
                            View GitHub
                        </Link>
                    </div>
                </div>

                <div className="glass-card overflow-hidden rounded-[2rem] p-1">
                    <div className="relative h-64 w-full overflow-hidden rounded-[1.75rem] bg-slate-900/90 sm:h-72 lg:h-80">
                        <Image
                            src={project.screenshot}
                            alt={`${project.title} screenshot`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 640px"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
