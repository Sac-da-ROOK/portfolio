import Image from "next/image";
import type { ProjectData } from "@/lib/projects";

type ProjectGalleryProps = {
    project: ProjectData;
};

export default function ProjectGallery({ project }: ProjectGalleryProps) {
    return (
        <section className="mt-16 space-y-8">
            <div>
                <h2 className="text-2xl font-semibold text-white">Project gallery</h2>
                <p className="mt-4 text-base leading-8 text-slate-300">
                    Quick visual highlights from the experience and interface.
                </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {project.gallery.map((image) => (
                    <div key={image} className="glass-card relative h-48 overflow-hidden rounded-[1.75rem] sm:h-56 lg:h-64">
                        <Image src={image} alt={`${project.title} screenshot`} fill className="object-cover" sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw" />
                    </div>
                ))}
            </div>
        </section>
    );
}
