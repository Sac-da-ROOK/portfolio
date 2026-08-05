"use client";

export default function ChessAnimation() {
    return (
        <div className="pointer-events-none rounded-2xl bg-gradient-to-br from-slate-900/90 to-slate-800/80 p-4 shadow-2xl" style={{ width: 220 }}>
            <div className="grid grid-cols-8 gap-0 rounded-sm overflow-hidden" style={{ width: 200 }}>
                {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} style={{ width: 25, height: 25, background: (Math.floor(i / 8) + (i % 8)) % 2 === 0 ? "#0b1220" : "#172033" }} />
                ))}
            </div>
            <div className="mt-3 text-center text-xs text-slate-300">Secret chess animation</div>
        </div>
    );
}
