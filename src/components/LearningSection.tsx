import Section from "@/components/Section";

const books = [
    {
        title: "The Number Devil",
        takeaway: "Mathematics becomes much more engaging when viewed as a creative way to discover patterns and solve puzzles.",
        href: "https://www.amazon.com/dp/0805062998"
    },
    {
        title: "The Joy of x",
        takeaway: "Mathematical ideas are powerful tools for understanding everyday life, from simple equations to complex systems.",
        href: "https://www.amazon.com/dp/0544105850"
    },
    {
        title: "How Not to Be Wrong",
        takeaway: "Mathematical thinking helps make better decisions by encouraging logical reasoning, probability, and evidence-based conclusions.",
        href: "https://www.amazon.com/dp/0143127535"
    }
];

const courses = [
    { title: "Algebra: Elementary to Advanced — Johns Hopkins University", href: "https://www.coursera.org/learn/algebra-i" },
    { title: "How to Get Into Robotics — Coursera", href: "https://www.coursera.org/learn/how-to-get-into-robotics" },
    { title: "Google Data Analytics Professional Certificate — Google", href: "https://www.coursera.org/professional-certificates/google-data-analytics" },
    { title: "AI For Everyone — Andrew Ng / DeepLearning.AI", href: "https://www.coursera.org/learn/ai-for-everyone" }
];

const currentExplorations = [
    {
        subject: "Biology",
        items: ["Cells and how they work", "Plant and animal structures", "Simple lab observations and data"]
    },
    {
        subject: "Mathematics",
        items: ["Fractions and ratios", "Word problems and logic puzzles", "Fast mental math and problem solving"]
    },
    {
        subject: "Computer Science",
        items: ["Python basics", "Loops and conditionals", "Breaking problems into steps"]
    },
    {
        subject: "Engineering",
        items: ["Building simple robots", "Testing designs and fixing mistakes", "How machines use sensors and movement"]
    },
    {
        subject: "Chess",
        items: ["Opening ideas", "Tactics and patterns", "Looking for good moves and blunders"]
    }
];

const goals = [
    { title: "Publish weekly STEM learning notes.", href: "#blog" },
    { title: "Complete a deeper calculus problem set track.", href: "#competitions" },
    { title: "Build one simulation-backed science mini-project each month.", href: "#robotics" }
];

export default function LearningSection() {
    return (
        <Section id="learning" aria-labelledby="learning-heading">
            <div className="max-w-3xl">
                <p className="section-kicker">Learning</p>
                <h2 id="learning-heading" className="section-title">Books, notes, courses, and active learning goals.</h2>
                <p className="section-lead">
                    I document what I learn so ideas can compound across projects, competitions, and long-term STEM goals.
                </p>
            </div>

            <div className="mt-10 rounded-[2rem] border border-cyan-300/30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-6 shadow-[0_18px_48px_rgba(14,116,144,0.22)] sm:p-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">Currently Exploring</p>
                        <h3 className="mt-2 text-2xl font-semibold text-blue-500">Fall 2026</h3>
                    </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                    {currentExplorations.map((area) => (
                        <article key={area.subject} className="rounded-[1.5rem] border border-cyan-300/20 bg-slate-100/95 p-4 shadow-sm">
                            <h4 className="text-lg font-semibold text-slate-900">{area.subject}</h4>
                            <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                                {area.items.map((item) => (
                                    <li key={item} className="flex gap-2">
                                        <span aria-hidden="true" className="mt-1 text-cyan-700">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <article className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-white">Books Read & Favorite Ideas</h3>
                    <div className="mt-5 grid gap-4">
                        {books.map((book) => (
                            <a
                                key={book.title}
                                href={book.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${book.title} on Amazon (opens in a new tab)`}
                                className="glass-card-soft block rounded-2xl p-4 ui-transition hover:-translate-y-0.5 hover:border-cyan-400/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80"
                            >
                                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-900 ui-transition hover:text-amber-700">
                                    {book.title}
                                </span>
                                <p className="mt-2 text-sm leading-7 text-slate-700">{book.takeaway}</p>
                            </a>
                        ))}
                    </div>
                </article>

                <article className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-white">Courses & Current Goals</h3>
                    <ul className="mt-5 grid gap-3">
                        {courses.map((course) => (
                            <li key={course.title} className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-800">
                                <a
                                    href={course.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${course.title} (opens in a new tab)`}
                                    className="block font-medium ui-transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/80"
                                >
                                    {course.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="mt-6 border-t border-white/10 pt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Current Learning Goals</p>
                        <ul className="mt-3 grid gap-3">
                            {goals.map((goal) => (
                                <li key={goal.title} className="rounded-xl border border-cyan-300/24 bg-cyan-400/8 px-3 py-2 text-sm text-cyan-100">
                                    <a
                                        href={goal.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="ui-transition hover:text-cyan-50"
                                    >
                                        {goal.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </div>
        </Section>
    );
}
