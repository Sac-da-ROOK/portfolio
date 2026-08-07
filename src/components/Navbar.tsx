"use client";

import { useEffect, useState } from "react";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "competitions", label: "Competitions & Achievements" },
    { id: "learning", label: "Learning" },
    { id: "chess", label: "Chess" },
    { id: "robotics", label: "Robotics" },
    { id: "stem-gallery", label: "STEM Gallery" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" }
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -55% 0px",
                threshold: 0
            }
        );

        navItems.forEach((item) => {
            const section = document.getElementById(item.id);
            if (section) observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-2xl border-2 border-slate-900/25 bg-white/92 px-4 py-3 shadow-[8px_8px_0_rgba(17,24,39,0.18)] sm:px-6">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-slate-900/25 bg-amber-200 text-sm font-semibold text-slate-900 shadow-[4px_4px_0_rgba(17,24,39,0.16)]">
                        AS
                    </div>
                    <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-600">Aarush Srivastava</p>
                        <p className="text-sm font-semibold text-slate-900">Personal STEM Portfolio</p>
                    </div>
                </div>

                <nav className="hidden items-center gap-5 md:flex lg:gap-6">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            aria-current={activeSection === item.id ? "page" : undefined}
                            className={`group relative text-sm font-semibold tracking-[0.02em] ui-transition ${activeSection === item.id ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                            <span className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 ui-transition ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-slate-900/25 bg-amber-100 text-slate-900 ui-transition hover:-translate-y-0.5 hover:bg-amber-200 md:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label="Toggle navigation menu"
                >
                    <span className="flex h-5 w-5 flex-col justify-between">
                        <span className="h-[2px] w-full rounded-full bg-current" />
                        <span className="h-[2px] w-full rounded-full bg-current" />
                        <span className="h-[2px] w-full rounded-full bg-current" />
                    </span>
                </button>
            </div>

            {isOpen && (
                <div className="mx-auto mt-3 w-full max-w-6xl rounded-2xl border-2 border-slate-900/25 bg-white/95 px-5 py-4 shadow-[8px_8px_0_rgba(17,24,39,0.18)] md:hidden">
                    <div className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`rounded-2xl border-2 px-4 py-3 text-sm font-semibold ui-transition ${activeSection === item.id ? "border-amber-300 bg-amber-100 text-slate-900" : "border-slate-900/20 text-slate-700 hover:bg-amber-50 hover:text-slate-900"}`}
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
