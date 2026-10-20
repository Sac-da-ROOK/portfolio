import Link from "next/link";
import Navbar from "@/components/Navbar";

const nowSections = [
    {
        heading: "What I’m Learning Now",
        items: [
            "Cell structure and how cells carry out life processes.",
            "Fractions, ratios, and problem-solving strategies for math contests.",
            "Python basics, small projects, and how to break problems into steps.",
            "How to read chess positions more carefully and look for tactics."
        ]
    },
    {
        heading: "What I’m Building Now",
        items: [
            "Small robotics projects focused on movement, sensors, and testing ideas.",
            "Short coding projects that turn a problem into a working solution.",
            "Science and engineering notes that document what I try and what I learn."
        ]
    },
    {
        heading: "What I’m Reading Now",
        items: [
            "Math and logic books that help strengthen reasoning and pattern recognition.",
            "STEM writing that connects technical ideas to real-world thinking.",
            "Books and articles on strategy, problem solving, and learning from mistakes."
        ]
    },
    {
        heading: "What I’m Preparing For",
        items: [
            "Competition rounds, school projects, and deeper problem-solving practice.",
            "More careful experimentation and reflection after each challenge.",
            "Writing clean explanations of what I built, what failed, and what changed."
        ]
    },
    {
        heading: "Question I’m Currently Exploring",
        items: [
            "How do I improve my thinking when a problem feels harder than I expected?",
            "What makes a good solution more reliable than a lucky one?",
            "How can I learn from failure without losing momentum?"
        ]
    }
];

export default function NowPage() {
    return (
        <main id="main-content" className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(250,204,21,0.10),_transparent_35%),linear-gradient(180deg,#fffefb_0%,#fff7d6_100%)] text-slate-900">
            <Navbar />

            <section className="section-shell px-6 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-32 lg:px-12 lg:pb-24 lg:pt-36">
                <div className="mx-auto max-w-5xl">
                    <div className="max-w-3xl">
                        <p className="section-kicker">Now</p>
                        <h1 className="section-title text-[clamp(2.6rem,6vw,4.5rem)]">What I’m doing right now.</h1>
                        <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                            A living snapshot of the things I’m learning, building, reading, and thinking about as I keep growing. This is a way for me to reflect on my progress and share it with others. This helps me stay accountable and mindful of my journey.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-6 lg:grid-cols-2">
                        {nowSections.map((section) => (
                            <article
                                key={section.heading}
                                className="rounded-[2rem] border border-slate-900/12 bg-white/80 p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] backdrop-blur-sm"
                            >
                                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-700">{section.heading}</p>
                                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-700 sm:text-base">
                                    {section.items.map((item) => (
                                        <li key={item} className="flex gap-3">
                                            <span aria-hidden="true" className="mt-2 text-cyan-700">•</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>

                    <div className="mt-10 rounded-[2rem] border border-slate-900/12 bg-[#0b1a2a] p-6 text-slate-100 shadow-[0_18px_42px_rgba(8,47,73,0.14)] sm:p-8">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">This week</p>
                        <p className="mt-4 text-lg leading-8 text-slate-200 sm:text-xl">
                            I am trying to balance building, reading, and reflecting so I can turn effort into clearer understanding rather than just finishing one task after another.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link
                            href="/"
                            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-slate-900/15 bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-amber-200"
                        >
                            Back to home
                        </Link>
                        <Link
                            href="/lab-journal"
                            className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-slate-900/15 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:bg-white"
                        >
                            Visit The Lab Journal
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
