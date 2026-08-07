"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function InteractiveCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const [enabled, setEnabled] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (typeof window === "undefined") return;
        const canUseFinePointer = window.matchMedia("(pointer: fine)").matches;
        setEnabled(canUseFinePointer && !prefersReducedMotion);
    }, [prefersReducedMotion]);

    useEffect(() => {
        if (!enabled) return;

        const onMove = (event: MouseEvent) => {
            setPosition({ x: event.clientX, y: event.clientY });
        };

        const onEnter = () => setHovering(true);
        const onLeave = () => setHovering(false);

        const targets = document.querySelectorAll("a, button, .interactive-card, input, textarea, select");

        window.addEventListener("mousemove", onMove);
        targets.forEach((target) => {
            target.addEventListener("mouseenter", onEnter);
            target.addEventListener("mouseleave", onLeave);
        });

        return () => {
            window.removeEventListener("mousemove", onMove);
            targets.forEach((target) => {
                target.removeEventListener("mouseenter", onEnter);
                target.removeEventListener("mouseleave", onLeave);
            });
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
