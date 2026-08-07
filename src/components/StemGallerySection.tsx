import Section from "@/components/Section";

const galleryCategories = [
    "Science Fair",
    "Experiments",
    "Presentations",
    "Photos",
    "Videos"
];

export default function StemGallerySection() {
    return (
        <Section id="stem-gallery" aria-labelledby="stem-gallery-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">STEM Gallery</p>
                <h2 id="stem-gallery-heading" className="section-title">Visual archive of experiments, demos, and presentations.</h2>
                <p className="section-lead">This gallery will host project media, science fair artifacts, and event presentations as the portfolio grows.</p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                {galleryCategories.map((category) => (
                    <article key={category} className="interactive-card glass-card rounded-2xl p-4 text-center ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">{category}</p>
                        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-slate-700/90 bg-slate-900/70 text-xs uppercase tracking-[0.2em] text-slate-500">
                            Placeholder
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    );
}
