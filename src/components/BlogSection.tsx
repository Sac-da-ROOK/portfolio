import Link from "next/link";
import Section from "@/components/Section";

const posts = [
    {
        title: "What I Learned Building My First Robot",
        type: "Robotics",
        excerpt: "A practical reflection on design failures, debugging loops, and how the first version taught me what actually mattered."
    },
    {
        title: "Three Mistakes I Made Preparing for a Math Competition",
        type: "Math",
        excerpt: "A look at how rushing, under-practicing, and skipping review can quietly shape a competition outcome."
    },
    {
        title: "What Chess Taught Me About Decision Making",
        type: "Chess",
        excerpt: "How tournament games taught me to weigh risk, process, and patience instead of reacting too quickly."
    },
    {
        title: "My First Python Data Analysis Project",
        type: "Computer Science",
        excerpt: "Turning raw data into questions, graphs, and patterns that help explain what the numbers are actually saying."
    },
    {
        title: "Understanding Cell Membranes Through an Experiment",
        type: "Biology",
        excerpt: "An explanation of how a simple experiment can reveal how structure changes behavior in living systems."
    },
    {
        title: "Why My Robot Failed — and What I Changed",
        type: "Engineering",
        excerpt: "A late-stage debugging story about sensors, assumptions, and learning to test faster and more carefully."
    }
];

export default function BlogSection() {
    return (
        <Section id="blog" aria-labelledby="blog-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Learning Journal</p>
                <h2 id="blog-heading" className="section-title">Thoughtful reflections from projects, experiments, and the learning process.</h2>
                <p className="section-lead">A learning journal focused on thoughtful writing, not quantity — usually 1–2 deeper articles each month on STEM, problem-solving, and growth.</p>
                <div className="mt-6">
                    <Link
                        href="/lab-journal"
                        className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-slate-900/20 bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 ui-transition hover:-translate-y-0.5 hover:bg-amber-200"
                    >
                        Visit the Lab Journal 🧪
                    </Link>
                </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {posts.map((post) => (
                    <article key={post.title} className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:-translate-y-1 hover:border-cyan-400/30">
                        <p className="text-[11px] uppercase tracking-[0.27em] text-cyan-200">{post.type}</p>
                        <h3 className="mt-3 text-xl font-semibold text-white">{post.title}</h3>
                        <p className="mt-4 text-sm leading-7 text-slate-300">{post.excerpt}</p>
                        <p className="mt-6 text-xs uppercase tracking-[0.24em] text-slate-500">Journal idea</p>
                    </article>
                ))}
            </div>
        </Section>
    );
}
