export default function RepoSkeleton() {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-xl shadow-black/20">
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-[pulse_1.8s_ease-in-out_infinite]" />
            <div className="h-6 w-40 rounded-full bg-slate-800/90" />
            <div className="mt-5 h-4 w-3/4 rounded-full bg-slate-800/90" />
            <div className="mt-4 grid gap-2">
                <div className="h-8 w-full rounded-full bg-slate-800/90" />
                <div className="h-8 w-5/6 rounded-full bg-slate-800/90" />
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
                <span className="h-8 w-16 rounded-full bg-slate-800/90" />
                <span className="h-8 w-20 rounded-full bg-slate-800/90" />
            </div>
            <div className="mt-5 flex items-center gap-4">
                <span className="h-10 w-24 rounded-full bg-slate-800/90" />
                <span className="h-10 w-24 rounded-full bg-slate-800/90" />
            </div>
        </div>
    );
}
