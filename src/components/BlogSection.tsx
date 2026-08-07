import Section from "@/components/Section";

const posts = [
    {
        title: "How I structure STEM build logs",
        type: "Build Log",
        excerpt: "A repeatable format for documenting goals, constraints, experiments, and outcomes."
    },
    {
        title: "What chess taught me about debugging",
        type: "Reflection",
        excerpt: "Using move-by-move analysis to improve software iteration habits and post-mortems."
    },
    {
        title: "Competition week workflow",
        type: "Learning Journal",
        excerpt: "How I split time between prep, revision, and practical experimentation."
    }
];

export default function BlogSection() {
    return (
        <Section id="blog" aria-labelledby="blog-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Blog</p>
                <h2 id="blog-heading" className="section-title">Technical notes, reflections, and STEM experiences.</h2>
                <p className="section-lead">A curated journal for articles, project build logs, competition reflections, and weekly learning snapshots.</p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
                {posts.map((post) => (
                    <article key={post.title} className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] uppercase tracking-[0.27em] text-cyan-200">{post.type}</p>
                        <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                        <p className="mt-6 text-xs uppercase tracking-[0.24em] text-slate-500">Publishing soon</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
