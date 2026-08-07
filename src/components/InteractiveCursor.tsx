"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function InteractiveCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    // Keep the initial render deterministic between server and client.
    const [canUseFinePointer, setCanUseFinePointer] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();
    const enabled = canUseFinePointer && !prefersReducedMotion;

    useEffect(() => {
        if (typeof window === "undefined") return;
        const mediaQuery = window.matchMedia("(pointer: fine)");
        setCanUseFinePointer(mediaQuery.matches);
        const onChange = (event: MediaQueryListEvent) => setCanUseFinePointer(event.matches);
        mediaQuery.addEventListener("change", onChange);
        return () => mediaQuery.removeEventListener("change", onChange);
    }, []);

    useEffect(() => {
        if (!enabled) return;

        const onMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const selector = "a, button, .interactive-card, input, textarea, select";

        const onOver = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            setHovering(Boolean(target?.closest(selector)));
        };

        const onOut = (event: MouseEvent) => {
            const related = event.relatedTarget as HTMLElement | null;
            if (!related?.closest(selector)) {
                setHovering(false);
            }
        };

        window.addEventListener("mousemove", onMove);
        document.addEventListener("mouseover", onOver);
        document.addEventListener("mouseout", onOut);

        return () => {
            window.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseover", onOver);
            document.removeEventListener("mouseout", onOut);
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none fixed left-0 top-0 z-[70] hidden h-5 w-5 rounded-full border border-cyan-300/70 md:block ${hovering ? "bg-cyan-300/20" : "bg-cyan-400/15"
                }`}
            style={{
                transform: `translate3d(${position.x - 10}px, ${position.y - 10}px, 0) scale(${hovering ? 1.7 : 1})`,
                transition: "transform 90ms linear, background-color 140ms ease",
            }}
        />
    );
}
