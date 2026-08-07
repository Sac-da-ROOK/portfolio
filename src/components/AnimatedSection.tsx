"use client";

import { useEffect, useRef, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

type AnimatedSectionProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
};

export default function AnimatedSection({
    children,
    className = "",
    delay = 0,
    threshold = 0.16,
    rootMargin = "0px 0px -8% 0px",
    once = true,
}: AnimatedSectionProps) {
    const elementRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const prefersReducedMotion = usePrefersReducedMotion();

    useEffect(() => {
        if (!elementRef.current) return;

        if (prefersReducedMotion) {
            setIsVisible(true);
            setHasAnimated(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (once) {
                        setHasAnimated(true);
                        observer.disconnect();
                    }
                } else if (!once) {
                    setIsVisible(false);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [once, prefersReducedMotion, rootMargin, threshold]);

    const isShown = prefersReducedMotion || isVisible || hasAnimated;

    return (
        <div
            ref={elementRef}
            className={`transform-gpu transition-all duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${isShown ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
