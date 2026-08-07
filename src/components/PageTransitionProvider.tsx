"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const prefersReducedMotion = usePrefersReducedMotion();
    const [isReady, setIsReady] = useState(prefersReducedMotion);

    useEffect(() => {
        if (prefersReducedMotion) {
            setIsReady(true);
            return;
        }

        setIsReady(false);
        const timer = window.setTimeout(() => setIsReady(true), 180);
        return () => window.clearTimeout(timer);
    }, [pathname, prefersReducedMotion]);

    return (
        <div className={`min-h-screen transition-opacity duration-300 ${isReady ? "opacity-100" : "opacity-0"}`}>
            {children}
        </div>
    );
}
