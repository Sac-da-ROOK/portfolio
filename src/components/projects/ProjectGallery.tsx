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

            <div className="grid gap-6 sm:grid-cols-2">
                {project.gallery.map((image) => (
                    <div key={image} className="relative h-64 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/70">
                        <Image src={image} alt={`${project.title} screenshot`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                    </div>
                ))}
            </div>
        </section>
    );
}
