"use client";

import { useEffect, useState } from "react";

const navItems = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "journey", label: "Journey" },
    { id: "github-repos", label: "GitHub" },
    { id: "contact", label: "Contact" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About" }
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
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8 lg:px-12">
                <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-sm font-semibold text-white shadow-sm">
                        AS
                    </div>
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.32em] text-slate-400">Aarush Srivastava</p>
                        <p className="text-sm font-medium text-white/90">Student Developer Portfolio</p>
                    </div>
                </div>

                <nav className="hidden items-center gap-8 md:flex">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            aria-current={activeSection === item.id ? "page" : undefined}
                            className={`group relative text-sm font-medium ui-transition ${activeSection === item.id ? "text-white" : "text-slate-400 hover:text-white"}`}
                            onClick={() => setIsOpen(false)}
                        >
                            {item.label}
                            <span className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-300 to-violet-400 ui-transition ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white ui-transition hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-cyan-400/10 md:hidden"
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
                <div className="border-t border-white/10 bg-slate-950/95 px-6 py-4 backdrop-blur-xl md:hidden">
                    <div className="flex flex-col gap-3">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={`#${item.id}`}
                                className={`rounded-2xl px-4 py-3 text-sm font-medium ui-transition ${activeSection === item.id ? "bg-white/10 text-white" : "text-slate-300 hover:bg-white/5 hover:text-white"}`}
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
