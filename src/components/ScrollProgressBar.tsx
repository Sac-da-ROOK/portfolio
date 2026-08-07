"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let ticking = false;

        const updateProgress = () => {
            if (ticking) return;
            ticking = true;

            window.requestAnimationFrame(() => {
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                const nextProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
                setProgress(Math.min(100, Math.max(0, nextProgress)));
                ticking = false;
            });
        };

        updateProgress();
        window.addEventListener("scroll", updateProgress, { passive: true });
        window.addEventListener("resize", updateProgress);

        return () => {
            window.removeEventListener("scroll", updateProgress);
            window.removeEventListener("resize", updateProgress);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-1 bg-transparent" aria-hidden="true">
            <div
                className="h-full bg-gradient-to-r from-yellow-300 via-cyan-400 to-indigo-500 transition-[width] duration-200"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
