type SectionSkeletonProps = {
    minHeightClass?: string;
};

export default function SectionSkeleton({ minHeightClass = "min-h-[520px]" }: SectionSkeletonProps) {
    return (
        <div className={`border-t border-white/10 bg-[#050816] px-6 py-24 sm:px-8 lg:px-12 ${minHeightClass}`} aria-hidden="true">
            <div className="mx-auto max-w-6xl animate-pulse">
                <div className="h-4 w-48 rounded-full bg-slate-800/80" />
                <div className="mt-5 h-10 w-2/3 rounded-2xl bg-slate-800/70" />
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    <div className="h-44 rounded-3xl bg-slate-900/80" />
                    <div className="h-44 rounded-3xl bg-slate-900/80" />
                </div>
            </div>
        </div>
    );
}
