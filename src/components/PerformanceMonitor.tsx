"use client";

import { useEffect } from "react";

export default function PerformanceMonitor() {
    useEffect(() => {
        if (typeof window === "undefined" || !window.performance || !window.PerformanceObserver) {
            return;
        }

        const observer = new PerformanceObserver((list) => {
            const entries = list.getEntries();
            entries.forEach((entry) => {
                if (entry.entryType === "paint" || entry.entryType === "largest-contentful-paint" || entry.entryType === "layout-shift") {
                    // Preserve for future instrumentation or logging.
                    // This component intentionally does not send data to an external tracker by default.
                    console.debug("perf-entry", entry);
                }
            });
        });

        observer.observe({ type: "paint", buffered: true });
        observer.observe({ type: "largest-contentful-paint", buffered: true });
        observer.observe({ type: "layout-shift", buffered: true });

        return () => observer.disconnect();
    }, []);

    return null;
}
