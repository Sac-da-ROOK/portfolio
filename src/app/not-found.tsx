import Link from "next/link";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#050816] px-6 py-24 text-white sm:px-8 lg:px-12">
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-white/10 bg-slate-950/80 p-12 text-center shadow-2xl shadow-black/20">
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Page not found</p>
                <h1 className="mt-6 text-4xl font-semibold">We couldn&apos;t find that page.</h1>
                <p className="mt-4 text-base leading-8 text-slate-300">
                    The project you are looking for may have moved or no longer exists.
                </p>
                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-full bg-cyan-400/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white"
                >
                    Return to home
                </Link>
            </div>
        </main>
    );
}
