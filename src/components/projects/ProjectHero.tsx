import Image from "next/image";
import Link from "next/link";
import type { ProjectData } from "@/lib/projects";

type ProjectHeroProps = {
    project: ProjectData;
};

export default function ProjectHero({ project }: ProjectHeroProps) {
    return (
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Project Case Study</p>
                <h1 id="project-detail-heading" className="mt-3 text-4xl font-semibold text-white sm:text-5xl">
                    {project.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-slate-300">{project.subtitle}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{project.status}</span>
                    {project.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-slate-950/70 px-4 py-2 text-sm text-slate-200">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white"
                    >
                        Visit Live App
                    </Link>
                    <Link
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-cyan-400/30 hover:bg-slate-900/80 hover:text-cyan-200"
                    >
                        View GitHub
                    </Link>
                </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-1 shadow-2xl shadow-black/20">
                <div className="relative h-80 w-full overflow-hidden rounded-[1.75rem] bg-slate-900/90">
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
    );
}
