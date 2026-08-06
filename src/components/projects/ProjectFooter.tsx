import Link from "next/link";

export default function ProjectFooter() {
    return (
        <div className="mt-16 flex flex-col gap-4 rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-slate-300 sm:flex-row sm:items-center sm:justify-between">
            <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Ready to explore more?</p>
                <p className="mt-2 text-base leading-7 text-white">Go back to the portfolio and browse other projects.</p>
            </div>
            <Link href="/" className="inline-flex items-center justify-center rounded-full bg-cyan-400/10 px-5 py-3 text-sm font-semibold text-cyan-200 transition duration-300 hover:bg-cyan-400/20 hover:text-white">
                Return to home
            </Link>
        </div>
    );
}
