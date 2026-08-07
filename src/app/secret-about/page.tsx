export const runtime = "edge";

export default function SecretAbout() {
    return (
        <main className="min-h-screen bg-[#050816] text-white p-12">
            <div className="mx-auto max-w-3xl">
                <h1 className="text-4xl font-semibold">Hidden STEM Note</h1>
                <p className="mt-6 text-lg text-slate-300">This hidden page is for curious visitors who discover the easter eggs. Aarush is a STEM-focused student documenting projects, competitions, and long-term learning milestones. Thanks for exploring!</p>
                <section className="mt-8 rounded-2xl bg-slate-900/70 p-6">
                    <h2 className="text-2xl font-semibold">Philosophy</h2>
                    <p className="mt-3 text-slate-300">Stay curious, think rigorously, and reflect often. This page is intentionally minimal and only accessible by those who find it.</p>
                </section>
            </div>
        </main>
    );
}
