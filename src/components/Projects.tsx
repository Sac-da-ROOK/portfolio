import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import { featuredProjects } from "@/lib/projects";

export default function Projects() {
    return (
        <Section id="projects" aria-labelledby="projects-heading">
            <div className="mx-auto max-w-6xl">
                <div className="max-w-2xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">Featured Projects</p>
                    <h2 id="projects-heading" className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Selected work built with intention.</h2>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {featuredProjects.map((project) => (
                        <ProjectCard
                            key={project.slug}
                            title={project.title}
                            description={project.description}
                            details={project.details}
                            status={project.status}
                            tags={project.tags}
                            detailPath={`/projects/${project.slug}`}
                            liveHref={project.href}
                            repo={project.repo}
                            screenshot={project.screenshot}
                            gallery={project.gallery}
                            featured={project.featured}
                        />
                    ))}
                </div>
            </div>
        </Section>
    );
}
