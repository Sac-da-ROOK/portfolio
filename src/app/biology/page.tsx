import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: "Biology Portfolio",
    description: "Selected biology investigations and portfolio evidence in cell biology, genetics, evolution, ecology, molecular biology, and experimental work."
};

const biologyAreas = [
    {
        title: "Cell Biology",
        description: "Understanding how cells function, communicate, and maintain homeostasis in response to changing conditions."
    },
    {
        title: "Genetics",
        description: "Studying inheritance, variation, and how information in DNA shapes biological traits and outcomes."
    },
    {
        title: "Evolution",
        description: "Investigating how populations change over time and how evidence from adaptation supports evolutionary theory."
    },
    {
        title: "Ecology",
        description: "Looking at interactions between organisms and their environment, including systems, balance, and biodiversity."
    },
    {
        title: "Molecular Biology",
        description: "Exploring the molecules and processes that make life possible, including structure, function, and biological signaling."
    },
    {
        title: "Laboratory Investigations",
        description: "Designing experiments, collecting data, and analyzing evidence to test biological questions under controlled conditions."
    },
    {
        title: "Biology Notes",
        description: "Organizing knowledge through summaries, diagrams, and connections between concepts across the life sciences."
    },
    {
        title: "Biology Projects",
        description: "Applying biological ideas to real investigations and portfolio-level work that shows depth, process, and reasoning."
    }
];

const labModel = [
    "Question",
    "Hypothesis",
    "Variables",
    "Experimental Setup",
    "Data",
    "Graph",
    "Analysis",
    "Conclusion",
    "Sources of Error",
    "Next Experiment"
];

export default function BiologyPage() {
    return (
        <main id="main-content" className="min-h-screen bg-[#050b16] text-slate-100">
            <Navbar theme="cs" />

            <div className="relative overflow-hidden pt-24 sm:pt-28">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_24%),radial-gradient(circle_at_80%_10%,_rgba(16,185,129,0.18),_transparent_28%),linear-gradient(180deg,_#050b16_0%,_#0a1325_42%,_#071421_100%)]" />

                <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-10">
                    <header className="rounded-[2rem] border border-cyan-400/20 bg-slate-950/45 p-5 shadow-[0_0_50px_rgba(14,116,144,0.16)] backdrop-blur-sm sm:p-7 lg:p-10">
                        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                            <div className="max-w-3xl">
                                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-200/90">Science → Biology</p>
                                <h1 className="mt-4 text-4xl font-bold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                                    Biology Portfolio
                                </h1>
                                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                                    This section highlights selected biology work that goes beyond routine homework. I am building a portfolio around depth, evidence, and scientific thinking: careful questions, clear procedures, meaningful data, and thoughtful interpretation.
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
                            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Portfolio focus</p>
                            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                                Selected work that shows depth and evidence
                            </h2>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                            {biologyAreas.map((area) => (
                                <article key={area.title} className="rounded-[1.75rem] border border-cyan-500/20 bg-[#0b1c2d] p-5 shadow-[0_0_45px_rgba(14,116,144,0.12)]">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-emerald-300">Biology</p>
                                    <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-white">{area.title}</h3>
                                    <p className="mt-4 text-sm leading-7 text-slate-300">{area.description}</p>
                                </article>
                            ))}
                        </div>
                    </section>

                    <section className="mt-16 rounded-[2rem] border border-cyan-500/20 bg-[#0b1c2d] p-6 shadow-[0_0_45px_rgba(14,116,144,0.12)] sm:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">Example evidence</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                            Investigating Osmosis
                        </h2>

                        <div className="mt-8 space-y-5">
                            {labModel.map((step, index) => (
                                <div key={step} className="rounded-[1.25rem] border border-slate-700/70 bg-slate-950/35 p-4 sm:p-5">
                                    <div className="flex items-start gap-3">
                                        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-500/10 text-sm font-semibold text-cyan-100">
                                            {index + 1}
                                        </span>
                                        <div className="flex-1">
                                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{step}</p>
                                            <p className="mt-2 text-sm leading-7 text-slate-200 sm:text-base">
                                                {step === "Question"
                                                    ? "How does the concentration of a solution affect the movement of water across a semi-permeable membrane in potato cells?"
                                                    : step === "Hypothesis"
                                                        ? "Potato cylinders placed in a more dilute solution will gain mass because water will move into the cells by osmosis."
                                                        : step === "Variables"
                                                            ? "Independent variable: solute concentration. Dependent variable: mass change of potato cylinders. Controlled variables: potato size, time, temperature, and volume of solution."
                                                            : step === "Experimental Setup"
                                                                ? "Potato cylinders were cut to equal length, placed into solutions of different concentrations, and measured before and after a fixed time period."
                                                                : step === "Data"
                                                                    ? "Mass measurements were recorded for each concentration, allowing comparison between the starting and final masses of the potato cylinders."
                                                                    : step === "Graph"
                                                                        ? "A line graph could be used to show mass change against solution concentration, highlighting the point at which net water movement changes direction."
                                                                        : step === "Analysis"
                                                                            ? "The results show that water moved into the cells in more dilute solutions and out of the cells in more concentrated solutions, indicating osmosis is driven by the concentration gradient."
                                                                            : step === "Conclusion"
                                                                                ? "The experiment supports the idea that water moves across a selectively permeable membrane toward the region of lower water potential, which is consistent with the process of osmosis."
                                                                                : step === "Sources of Error"
                                                                                    ? "Differences in potato thickness, evaporation from solutions, or slight timing inconsistencies could affect the outcome and should be minimized in future trials."
                                                                                    : "A next experiment could compare different plant tissues or vary temperature to investigate how environmental conditions influence the rate of osmosis."}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="mt-16 rounded-[2rem] border border-slate-700/70 bg-slate-950/40 p-6 shadow-[0_0_30px_rgba(15,23,42,0.22)] backdrop-blur-sm sm:p-8">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Portfolio standard</p>
                        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white sm:text-4xl">
                            What counts as strong biology evidence
                        </h2>

                        <div className="mt-6 grid gap-5 md:grid-cols-3">
                            <div className="rounded-[1.5rem] border border-cyan-500/20 bg-[#0c1d2b] p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Clear question</p>
                                <p className="mt-3 text-sm leading-7 text-slate-200">The investigation starts with a testable biological question rather than a routine fact recall task.</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-cyan-500/20 bg-[#0c1d2b] p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Evidence</p>
                                <p className="mt-3 text-sm leading-7 text-slate-200">Data, graphs, and interpretation matter more than simply writing definitions or copying textbook notes.</p>
                            </div>
                            <div className="rounded-[1.5rem] border border-cyan-500/20 bg-[#0c1d2b] p-5">
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Reflection</p>
                                <p className="mt-3 text-sm leading-7 text-slate-200">The work should explain what the result means, what may have gone wrong, and what should be tested next.</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </main>
    );
}
