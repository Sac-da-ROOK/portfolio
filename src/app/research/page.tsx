import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Research & Scientific Inquiry",
    description: "A progression from literature investigation to mentor-supported research, with references and citations."
};

const researchLevels = [
    {
        level: "Level 1 – Literature Investigation",
        title: "Read 3–5 credible sources and answer a focused scientific question.",
        description:
            "This stage is about learning how to read scientific material carefully, compare ideas across sources, and identify what is actually supported by evidence.",
        activities: [
            "Select a narrow question with a clear scientific focus.",
            "Review 3–5 credible sources from textbooks, educational institutions, journals, or trusted scientific organizations.",
            "Summarize the main findings, compare differing explanations, and note any uncertainty or limitations."
        ],
        evidence: "A strong literature review does not just collect facts; it asks what is known, what is still uncertain, and what evidence supports each claim.",
        citations: "[1], [2], [4]"
    },
    {
        level: "Level 2 – Data Investigation",
        title: "Analyze an existing dataset.",
        description:
            "Once a question is defined, the next step is to look for patterns in data. This helps build a habit of evidence-based reasoning and careful interpretation.",
        activities: [
            "Work with a dataset from a public source or a classroom investigation.",
            "Identify variables, patterns, comparisons, and anomalies in the data.",
            "Translate raw observations into simple graphs, summaries, and justified conclusions."
        ],
        evidence: "The goal is not only to calculate numbers, but to interpret what those numbers suggest and whether the result is meaningful.",
        citations: "[3], [5], [7]"
    },
    {
        level: "Level 3 – Controlled Experiments",
        title: "Develop a hypothesis → experiment → collect data → analyze → conclude.",
        description:
            "This stage introduces the scientific method more directly. A testable question leads to a plan, and the experiment becomes the way to evaluate the idea.",
        activities: [
            "Define a clear hypothesis and identify the independent, dependent, and control variables.",
            "Design a fair procedure with repeated trials or comparisons where appropriate.",
            "Collect and organize data, then interpret the results in relation to the original hypothesis."
        ],
        evidence: "A well-designed experiment is controlled, repeatable, and transparent about what worked, what failed, and why.",
        citations: "[2], [6], [8]"
    },
    {
        level: "Level 4 – Independent Research Project",
        title: "Produce a structured research report.",
        description:
            "At this stage, a student moves from short investigations to a more sustained research process with a clear question, method, analysis, and conclusion.",
        activities: [
            "Define a project goal and narrow the research problem.",
            "Document the background, design, methods, results, and interpretation in a structured report.",
            "Reflect on limitations, sources of error, and next steps for future improvement."
        ],
        evidence: "Research is strongest when it is honest about uncertainty, carefully organized, and supported by evidence rather than assumptions.",
        citations: "[1], [4], [8]"
    },
    {
        level: "Level 5 – Mentor-Supported Research (Later in high school)",
        title: "Develop a stronger independent research identity with guidance.",
        description:
            "Later work can involve deeper questions, more self-directed planning, and a clearer research process with mentoring support from teachers, coaches, or scientists.",
        activities: [
            "Refine a research question based on a meaningful scientific or engineering problem.",
            "Design a method that is realistic, ethical, and well-documented.",
            "Share findings in a structured report with careful references and transparent analysis."
        ],
        evidence: "This is the point where research becomes a habit of inquiry: systematic, reflective, and evidence-driven.",
        citations: "[2], [5], [8]"
    }
];

const references = [
    {
        id: "[1]",
        label: "Understanding Science",
        note: "The University of California Museum of Paleontology explains the process of scientific inquiry and how evidence is used to test explanations.",
        url: "https://undsci.berkeley.edu/"
    },
    {
        id: "[2]",
        label: "Science and Engineering Practices",
        note: "The National Academies and related educational resources describe how scientists ask questions, investigate, analyze evidence, and communicate findings.",
        url: "https://nap.nationalacademies.org/"
    },
    {
        id: "[3]",
        label: "NASA and Data Literacy",
        note: "NASA and educational partners show how data analysis helps turn observations into evidence and measurable conclusions.",
        url: "https://www.nasa.gov/"
    },
    {
        id: "[4]",
        label: "Nature Education: Scientific Method",
        note: "Nature Education explains the role of careful observation, hypothesis formation, and testing in the scientific process.",
        url: "https://www.nature.com/scitable/"
    },
    {
        id: "[5]",
        label: "NOAA Ocean Data Education",
        note: "NOAA provides examples of how real datasets are used to investigate patterns, trends, and environmental questions.",
        url: "https://www.noaa.gov/"
    },
    {
        id: "[6]",
        label: "BBC Bitesize: Variables and Fair Tests",
        note: "This educational resource illustrates controlled investigation design, variables, and fair testing in accessible scientific language.",
        url: "https://www.bbc.co.uk/bitesize"
    },
    {
        id: "[7]",
        label: "Open Data and Scientific Reasoning",
        note: "Public datasets from scientific organizations help students practice interpreting evidence and drawing reasoned conclusions.",
        url: "https://www.data.gov/"
    },
    {
        id: "[8]",
        label: "Science Fair and Research Writing Guidance",
        note: "Research guidance emphasizes that a strong report is clear, evidence-based, and transparent about methods, limitations, and interpretation.",
        url: "https://www.sciencebuddies.org/"
    }
];

export default function ResearchPage() {
    return (
        <main id="main-content" className="min-h-screen bg-[#050b16] text-slate-100">
            <Navbar theme="cs" />

            <div className="relative overflow-hidden pt-24 sm:pt-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_#050b16_0%,_#0a1325_42%,_#071421_100%)]" />

                <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-10">
                    <header className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-5 shadow-[0_0_50px_rgba(14,116,144,0.16)] backdrop-blur-sm sm:p-7 lg:p-10">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-3xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/90">Research</p>
                                <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                                    Research & Scientific Inquiry
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                    I am building a research foundation that starts small and becomes stronger over time. The goal is not to rush into a published paper, but to build a disciplined habit of asking careful questions, testing ideas, and learning from evidence.
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                <Link
                                    href="/academics"
                                    className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950/40 px-5 py-3 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200/60 hover:bg-slate-900/70"
                                >
                                    Back to Academics
                                </Link>
                            </div>
                        </div>
                    </header>

                    <section className="mt-12">
                        <div className="mb-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Research progression</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                From exploration to independent inquiry
                            </h2>
                        </div>

                        <div className="space-y-6">
                            {researchLevels.map((item, index) => (
                                <article
                                    key={item.level}
                                    className="rounded-[2rem] border border-cyan-500/20 bg-[#0b1c2d] p-6 shadow-[0_0_45px_rgba(14,116,144,0.12)] sm:p-8"
                                >
                                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                                        <div className="max-w-3xl">
                                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300">
                                                {item.level}
                                            </p>
                                            <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="rounded-full border border-cyan-400/25 bg-cyan-500/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-100">
                                            Stage {index + 1}
                                        </div>
                                    </div>

                                    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                                        {item.description}
                                    </p>

                                    <div className="mt-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
                                        <div>
                                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Typical activities</p>
                                            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-200 sm:text-base">
                                                {item.activities.map((activity) => (
                                                    <li key={activity} className="flex gap-3">
                                                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300" />
                                                        <span>{activity}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="rounded-[1.5rem] border border-slate-700/70 bg-slate-900/55 p-4 sm:p-5">
                                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">Scientific mindset</p>
                                            <p className="mt-3 text-sm leading-7 text-slate-200 sm:text-base">{item.evidence}</p>
                                            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.26em] text-cyan-200">Citations: {item.citations}</p>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="mt-16 rounded-[2rem] border border-slate-700/70 bg-slate-950/40 p-6 shadow-[0_0_30px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Research values</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                            Clear questions, honest evidence, and careful writing
                        </h2>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">
                            <div className="rounded-[1.5rem] border border-cyan-500/20 bg-[#0c1d2b] p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Question</p>
                                <p className="mt-3 text-sm leading-7 text-slate-200">Research starts with a focused question that is clear enough to investigate and narrow enough to answer well.</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-cyan-500/20 bg-[#0c1d2b] p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Evidence</p>
                                <p className="mt-3 text-sm leading-7 text-slate-200">Good scientific work depends on observations, data, and reasoning that can be checked and explained.</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-cyan-500/20 bg-[#0c1d2b] p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Reflection</p>
                                <p className="mt-3 text-sm leading-7 text-slate-200">A strong conclusion is not just the answer, but also an honest description of what the evidence did and did not show.</p>
                            </div>
                        </div>
                    </section>

                    <section className="mt-16">
                        <div className="mb-6">
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">References & citations</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                Credible sources that support scientific inquiry
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {references.map((reference) => (
                                <article key={reference.id} className="rounded-[1.5rem] border border-slate-700/70 bg-slate-950/35 p-5 sm:p-6">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">{reference.id}</p>
                                        <span className="text-xs uppercase tracking-[0.2em] text-slate-400">reference</span>
                                    </div>
                                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{reference.label}</h3>
                                    <p className="mt-3 text-sm leading-7 text-slate-300 sm:text-base">{reference.note}</p>
                                    <a
                                        href={reference.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="mt-4 inline-flex items-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-emerald-500/20 px-4 py-2 text-sm font-semibold text-cyan-50 transition hover:border-cyan-200/50 hover:from-cyan-500/30 hover:to-emerald-500/30"
                                    >
                                        Open source
                                    </a>
                                </article>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
