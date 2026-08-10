import { notFound } from "next/navigation";
import Section from "@/components/Section";
import ProjectFooter from "@/components/projects/ProjectFooter";
import ProjectGallery from "@/components/projects/ProjectGallery";
import ProjectHero from "@/components/projects/ProjectHero";
import ProjectSection from "@/components/projects/ProjectSection";
import ProjectSummary from "@/components/projects/ProjectSummary";
import { getProjectBySlug, getProjectSlugs, metadataForProject } from "@/lib/projects";

type ProjectPageProps = {
    params: Promise<{
        slug: string;
    }>;
};

export function generateStaticParams() {
    return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return {
            title: "Project not found | Portfolio",
            description: "The project you are looking for could not be found.",
        };
    }

    return metadataForProject(project);
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return (
        <main>
            <Section id="project-detail" aria-labelledby="project-detail-heading">
                <div className="mx-auto max-w-6xl">
                    <ProjectHero project={project} />

                    <div className="mt-16 grid gap-10 lg:grid-cols-[1.4fr_0.9fr] lg:items-start">
                        <div className="space-y-6">
                            <ProjectSection title="The challenge" description={project.problem} />
                            <ProjectSection title="Why this approach" description={project.why} />
                            <ProjectSection title="Core features">
                                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                    {project.features.map((feature) => (
                                        <div key={feature} className="glass-card-soft rounded-[1.5rem] p-5">
                                            <p className="text-sm font-semibold text-white">{feature}</p>
                                        </div>
                                    ))}
                                </div>
                            </ProjectSection>
                            <ProjectSection title="What I learned">
                                <div className="mt-6 space-y-4">
                                    {project.learnings.map((lesson) => (
                                        <p key={lesson} className="text-base leading-8 text-slate-300">{lesson}</p>
                                    ))}
                                </div>
                            </ProjectSection>
                        </div>

                        <ProjectSummary project={project} />
                    </div>

                    <ProjectGallery project={project} />
                    <ProjectFooter />
                </div>
            </Section>
        </main>
    );
}
