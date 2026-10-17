import Section from "@/components/Section";

const galleryCategories = [
    { label: "Science Fair", detail: "Project notes and evidence" },
    { label: "Experiments", detail: "Results and reflections" },
    { label: "Presentations", detail: "Ideas communicated clearly" },
    { label: "Builds", detail: "Hardware and software snapshots" },
    { label: "Journal", detail: "Learning and documentation" }
];

export default function StemGallerySection() {
    return (
        <Section id="stem-gallery" aria-labelledby="stem-gallery-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">STEM Gallery</p>
                <h2 id="stem-gallery-heading" className="section-title">A record of experiments, demos, and project progress.</h2>
                <p className="section-lead">This archive highlights the kinds of work I am building and documenting as my projects grow.</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
                {galleryCategories.map((category) => (
                    <article key={category.label} className="interactive-card glass-card rounded-2xl p-4 text-center ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{category.label}</p>
                        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-white/10 bg-slate-900/70 px-3 text-center text-[10px] uppercase tracking-[0.2em] text-slate-400">
                            {category.detail}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}
