"use client";

import { useMemo } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

export default function AmbientBackground() {
    const prefersReducedMotion = usePrefersReducedMotion();

    const particles = useMemo(
        () =>
            Array.from({ length: 11 }, (_, index) => ({
                id: index,
                left: `${(index * 9 + 6) % 100}%`,
                top: `${(index * 13 + 11) % 100}%`,
                size: index % 3 === 0 ? 8 : 6,
                delay: index * 0.65,
            })),
        []
    );

    if (prefersReducedMotion) return null;

    return (
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
            <div className="ambient-orb ambient-orb-one" />
            <div className="ambient-orb ambient-orb-two" />
            <div className="ambient-orb ambient-orb-three" />
            {particles.map((particle) => (
                <span
                    key={particle.id}
                    className="absolute rounded-full bg-cyan-300/20"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                        animation: `particleDrift 14s ease-in-out ${particle.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
