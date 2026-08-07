import Section from "@/components/Section";

const books = [
    {
        title: "The Number Devil",
        takeaway: "Mathematics becomes much more engaging when viewed as a creative way to discover patterns and solve puzzles.",
        href: "https://www.amazon.com/dp/0805062998"
    },
    {
        title: "How Not to Be Wrong",
        takeaway: "Mathematical thinking helps evaluate claims, uncertainty, and real-world decisions.",
        href: "https://www.amazon.com/dp/REPLACE_BOOK_LINK_2"
    },
    {
        title: "The Pragmatic Programmer",
        takeaway: "Systems improve when small, consistent quality habits are maintained.",
        href: "https://www.amazon.com/dp/REPLACE_BOOK_LINK_3"
    }
];

const courses = [
    { title: "Course placeholder: Advanced Algebra", href: "https://example.com/course-placeholder-advanced-algebra" },
    { title: "Course placeholder: Intro to Robotics Systems", href: "https://example.com/course-placeholder-robotics" },
    { title: "Course placeholder: Data Analysis for Science", href: "https://example.com/course-placeholder-data-analysis" },
    { title: "Course placeholder: Foundations of AI", href: "https://example.com/course-placeholder-ai" }
];

const goals = [
    { title: "Publish weekly STEM learning notes.", href: "https://example.com/goal-placeholder-weekly-notes" },
    { title: "Complete a deeper calculus problem set track.", href: "https://example.com/goal-placeholder-calculus-track" },
    { title: "Build one simulation-backed science mini-project each month.", href: "https://example.com/goal-placeholder-simulation-project" }
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

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
                <article className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-white">Books Read & Favorite Ideas</h3>
                    <div className="mt-5 grid gap-4">
                        {books.map((book) => (
                            <div key={book.title} className="glass-card-soft rounded-2xl p-4">
                                <a
                                    href={book.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200 ui-transition hover:text-cyan-100"
                                >
                                    {book.title}
                                </a>
                                <p className="mt-2 text-sm leading-7 text-slate-300">{book.takeaway}</p>
                            </div>
                        ))}
                    </div>
                </article>

                <article className="interactive-card glass-card rounded-3xl p-6 ui-transition hover:border-cyan-400/30">
                    <h3 className="text-xl font-semibold text-white">Courses & Current Goals</h3>
                    <ul className="mt-5 grid gap-3">
                        {courses.map((course) => (
                            <li key={course.title} className="glass-card-soft rounded-xl px-3 py-2 text-sm text-slate-200">
                                <a
                                    href={course.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ui-transition hover:text-white"
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
