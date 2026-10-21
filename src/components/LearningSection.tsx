import Section from "@/components/Section";

const library = [
    {
        title: "The Number Devil",
        author: "Hans Magnus Enzensberger",
        completed: "May 2025",
        rating: 9,
        ideas: [
            "Patterns often hide inside simple arithmetic.",
            "Mathematics is more creative than it first appears.",
            "A good puzzle can reveal a deeper idea faster than a formula."
        ],
        favoriteConcept: "Pattern recognition and mathematical intuition",
        reflection: "This book changed the way I think about math by showing that curiosity and play are often the beginning of real understanding.",
        cover: "from-amber-200 via-yellow-100 to-orange-200",
        short: "ND"
    },
    {
        title: "The Joy of x",
        author: "Steven Strogatz",
        completed: "June 2025",
        rating: 9,
        ideas: [
            "Mathematics explains structure in the world around us.",
            "Simple equations can describe surprisingly complex systems.",
            "A good idea in math often connects many fields at once."
        ],
        favoriteConcept: "How mathematical ideas show up in everyday life",
        reflection: "It made me see math as a way of thinking, not just a subject in school. That shift matters because I now look for patterns and explanations more often.",
        cover: "from-cyan-200 via-sky-100 to-indigo-200",
        short: "Jx"
    },
    {
        title: "How Not to Be Wrong",
        author: "Jordan Ellenberg",
        completed: "July 2025",
        rating: 8,
        ideas: [
            "Logic and probability help test ideas more carefully.",
            "Mistakes often come from bad assumptions, not bad effort.",
            "Reasoning is useful outside the classroom as well as inside it."
        ],
        favoriteConcept: "Probability and avoiding false certainty",
        reflection: "This book made me more careful with claims and more aware of how easy it is to look confident without being correct. It changed my thinking in a useful way.",
        cover: "from-emerald-200 via-teal-100 to-cyan-200",
        short: "HN"
    },
    {
        title: "What If?",
        author: "Randall Munroe",
        completed: "August 2025",
        rating: 9,
        ideas: [
            "Big questions become clearer when broken into simple assumptions.",
            "Science can be playful while still being serious.",
            "Unusual questions can lead to strong explanations."
        ],
        favoriteConcept: "Using rough calculations to explore the impossible",
        reflection: "It made me more comfortable asking strange questions and testing them with logic. That kind of thinking is excellent for science and curiosity.",
        cover: "from-violet-200 via-fuchsia-100 to-pink-200",
        short: "WI"
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        completed: "September 2025",
        rating: 8,
        ideas: [
            "The universe is deeply connected to physics and mathematics.",
            "Big questions often begin with simple observations.",
            "Even difficult ideas can be explained with careful language."
        ],
        favoriteConcept: "Cosmology and the structure of time and space",
        reflection: "It made me realize that big scientific ideas are not just about formulas—they are about asking better questions about reality itself.",
        cover: "from-slate-200 via-slate-100 to-indigo-200",
        short: "BH"
    },
    {
        title: "The Elegant Universe",
        author: "Brian Greene",
        completed: "October 2025",
        rating: 8,
        ideas: [
            "Theories can be elegant even when they are difficult to understand.",
            "Physics is often about finding deeper patterns beneath appearances.",
            "Big ideas in science can be both conceptual and beautiful."
        ],
        favoriteConcept: "The search for a single underlying explanation in physics",
        reflection: "This book helped me understand that science is not only about proving things—it is also about looking for deeper order in nature.",
        cover: "from-indigo-200 via-blue-100 to-cyan-200",
        short: "EU"
    },
    {
        title: "The Story of Physics",
        author: "J. P. McEvoy and Oscar Zarate",
        completed: "November 2025",
        rating: 8,
        ideas: [
            "Physics grew from experiments and observation, not just theory.",
            "Scientific ideas often change when new evidence appears.",
            "The history of science is full of people who improved the field by testing their assumptions."
        ],
        favoriteConcept: "How scientific ideas evolve over time",
        reflection: "It made me more patient with the process of learning. Progress in science is not always clean, but it is often built through careful revision and persistence.",
        cover: "from-red-200 via-orange-100 to-amber-200",
        short: "SP"
    },
    {
        title: "The Signal and the Noise",
        author: "Nate Silver",
        completed: "December 2025",
        rating: 7,
        ideas: [
            "Not every pattern in data is meaningful.",
            "Good prediction requires filtering signal from noise.",
            "Evidence is stronger when the method is transparent."
        ],
        favoriteConcept: "Separating real patterns from misleading ones",
        reflection: "This book taught me that data can be convincing but still wrong, which made me more careful about how I interpret information.",
        cover: "from-slate-300 via-sky-100 to-blue-200",
        short: "SN"
    },
    {
        title: "The Code Book",
        author: "Simon Singh",
        completed: "January 2026",
        rating: 9,
        ideas: [
            "Cryptography is deeply connected to logic and problem-solving.",
            "Security depends on clever design as much as brute force.",
            "Code can be both mathematical and practical."
        ],
        favoriteConcept: "How encryption turns logic into protection",
        reflection: "It changed how I think about information systems and made me more interested in how computers protect ideas and data.",
        cover: "from-emerald-200 via-lime-100 to-cyan-200",
        short: "CB"
    },
    {
        title: "The Art of Thinking Clearly",
        author: "Rolf Dobelli",
        completed: "February 2026",
        rating: 8,
        ideas: [
            "Bias affects even careful thinking.",
            "Good decisions are improved by slowing down and checking assumptions.",
            "Clear thinking is a skill that can be trained."
        ],
        favoriteConcept: "Cognitive bias and decision quality",
        reflection: "This book changed my thinking by helping me notice how easy it is to be confident without being accurate. It pushed me toward better habits of reflection.",
        cover: "from-rose-200 via-pink-100 to-violet-200",
        short: "AT"
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

            <div className="mt-10">
                <div className="mb-6 max-w-3xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-200">Aarush&apos;s STEM Library</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">Ten books that shaped how I think.</h3>
                </div>

                <div className="grid gap-6">
                    {library.map((book) => (
                        <article key={book.title} className="interactive-card glass-card rounded-[2rem] p-5 ui-transition hover:border-cyan-400/30 sm:p-6">
                            <div className="grid gap-5 lg:grid-cols-[160px_1fr]">
                                <div className={`flex h-52 items-center justify-center rounded-[1.5rem] bg-gradient-to-br ${book.cover} shadow-inner`}>
                                    <span className="text-3xl font-black tracking-[0.12em] text-slate-900">{book.short}</span>
                                </div>

                                <div className="min-w-0">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-cyan-200">{book.author}</p>
                                            <h4 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-white">{book.title}</h4>
                                        </div>
                                        <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm font-semibold text-cyan-100">
                                            {book.rating}/10
                                        </div>
                                    </div>

                                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                                        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">Completed</p>
                                            <p className="mt-2 text-sm font-medium text-slate-100">{book.completed}</p>
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">Favorite concept</p>
                                            <p className="mt-2 text-sm font-medium text-slate-100">{book.favoriteConcept}</p>
                                        </div>
                                        <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-3">
                                            <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400">Overall</p>
                                            <p className="mt-2 text-sm font-medium text-slate-100">Strong read</p>
                                        </div>
                                    </div>

                                    <div className="mt-5 grid gap-4 lg:grid-cols-2">
                                        <div className="rounded-[1.5rem] border border-cyan-400/20 bg-slate-950/50 p-4">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-emerald-200">Three ideas I learned</p>
                                            <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-200">
                                                {book.ideas.map((idea) => (
                                                    <li key={idea} className="flex gap-2">
                                                        <span aria-hidden="true" className="mt-2 text-emerald-300">•</span>
                                                        <span>{idea}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="rounded-[1.5rem] border border-amber-400/20 bg-amber-500/5 p-4">
                                            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-amber-200">How it changed my thinking</p>
                                            <p className="mt-3 text-sm leading-7 text-slate-200">{book.reflection}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <article className="interactive-card glass-card mt-10 rounded-3xl p-6 ui-transition hover:border-cyan-400/30">
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
        </Section>
    );
}
