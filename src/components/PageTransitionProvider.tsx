"use client";

import { usePathname } from "next/navigation";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function PageTransitionProvider({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const prefersReducedMotion = usePrefersReducedMotion();

    return (
        <div key={pathname} className={`min-h-screen ${prefersReducedMotion ? "" : "animate-page-in"}`}>
            {children}
        </div>
    );
}
