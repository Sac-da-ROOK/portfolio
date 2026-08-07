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
                <p className="section-kicker">Project Case Study</p>
                <h1 id="project-detail-heading" className="section-title text-4xl sm:text-5xl">
                    {project.title}
                </h1>
                <p className="section-lead">{project.subtitle}</p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <span className="glass-chip rounded-full px-4 py-2 text-sm text-slate-200">{project.status}</span>
                    {project.tags.map((tag) => (
                        <span key={tag} className="glass-chip rounded-full px-4 py-2 text-sm text-slate-200">
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

            <div className="glass-card overflow-hidden rounded-[2rem] p-1">
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
