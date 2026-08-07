"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function BackToTopButton() {
    const [visible, setVisible] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 700);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!visible) return null;

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    };

    return (
        <button
            type="button"
            onClick={scrollTop}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-[55] inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-950/85 text-xl text-cyan-200 shadow-xl shadow-cyan-500/10 backdrop-blur ui-transition hover:-translate-y-1 hover:border-cyan-300/70 hover:text-white"
        >
            ↑
        </button>
    );
}
