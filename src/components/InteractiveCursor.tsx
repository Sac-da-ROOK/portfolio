"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function InteractiveCursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);
    const [ready, setReady] = useState(false);
    const [canUseFinePointer, setCanUseFinePointer] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();
    const enabled = ready && canUseFinePointer && !prefersReducedMotion;

    useEffect(() => {
        if (typeof window === "undefined") return;

        const mediaQuery = window.matchMedia("(pointer: fine)");
        const initializeCursor = () => {
            setCanUseFinePointer(mediaQuery.matches);
            setReady(true);
        };

        const frameId = window.requestAnimationFrame(initializeCursor);
        const onChange = (event: MediaQueryListEvent) => setCanUseFinePointer(event.matches);
        mediaQuery.addEventListener("change", onChange);

        return () => {
            window.cancelAnimationFrame(frameId);
            mediaQuery.removeEventListener("change", onChange);
        };
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

    return (
        <div
            aria-hidden="true"
            className={`pointer-events-none fixed left-0 top-0 z-[70] h-5 w-5 rounded-full border border-cyan-300/70 md:block ${hovering ? "bg-cyan-300/20" : "bg-cyan-400/15"}`}
            style={{
                transform: `translate3d(${enabled ? position.x - 10 : 0}px, ${enabled ? position.y - 10 : 0}px, 0) scale(${enabled && hovering ? 1.7 : 1})`,
                transition: "transform 90ms linear, background-color 140ms ease",
                opacity: enabled ? 1 : 0,
            }}
        />
    );
}
