"use client";

import { useEffect, useRef, useState } from "react";

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
    const headerRef = useRef<HTMLElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const firstMenuLinkRef = useRef<HTMLAnchorElement | null>(null);

    const closeMenu = (restoreFocus = true) => {
        setIsOpen(false);
        if (restoreFocus) {
            window.requestAnimationFrame(() => {
                buttonRef.current?.focus();
            });
        }
    };

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

    useEffect(() => {
        if (isOpen) {
            firstMenuLinkRef.current?.focus();
        }
    }, [isOpen]);

    useEffect(() => {
        const onPointerDown = (event: PointerEvent) => {
            if (!isOpen) return;
            const target = event.target as Node | null;
            if (!target) return;
            if (headerRef.current?.contains(target)) return;
            closeMenu();
        };

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        const onResize = () => {
            if (window.innerWidth >= 1024) {
                closeMenu(false);
            }
        };

        window.addEventListener("pointerdown", onPointerDown);
        window.addEventListener("keydown", onKeyDown);
        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("pointerdown", onPointerDown);
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener("resize", onResize);
        };
    }, [isOpen]);

    return (
        <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 lg:px-8">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 rounded-2xl border-2 border-slate-900/25 bg-white/92 px-4 py-3 shadow-[8px_8px_0_rgba(17,24,39,0.18)] sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-slate-900/25 bg-amber-200 text-sm font-semibold text-slate-900 shadow-[4px_4px_0_rgba(17,24,39,0.16)]">
                        AS
                    </div>
                    <div className="min-w-0">
                        <p className="truncate text-[11px] font-semibold uppercase tracking-[0.32em] text-slate-600">Aarush Srivastava</p>
                        <p className="truncate text-sm font-semibold text-slate-900">Personal STEM Portfolio</p>
                    </div>
                </div>

                <nav className="hidden items-center gap-5 lg:flex lg:gap-6" aria-label="Primary navigation">
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            aria-current={activeSection === item.id ? "page" : undefined}
                            className={`group relative text-sm font-semibold tracking-[0.02em] ui-transition ${activeSection === item.id ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`}
                            onClick={() => closeMenu(false)}
                        >
                            {item.label}
                            <span className={`absolute -bottom-1 left-0 h-[3px] rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 ui-transition ${activeSection === item.id ? "w-full" : "w-0 group-hover:w-full"}`} />
                        </a>
                    ))}
                </nav>

                <button
                    type="button"
                    ref={buttonRef}
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-2 border-slate-900/25 bg-amber-100 text-slate-900 ui-transition hover:-translate-y-0.5 hover:bg-amber-200 lg:hidden"
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="mobile-navigation"
                    aria-haspopup="menu"
                >
                    <span className="flex h-5 w-5 flex-col justify-between">
                        <span className="h-[2px] w-full rounded-full bg-current" />
                        <span className="h-[2px] w-full rounded-full bg-current" />
                        <span className="h-[2px] w-full rounded-full bg-current" />
                    </span>
                </button>
            </div>

            <div className={`mx-auto w-full max-w-6xl overflow-hidden px-3 transition-[max-height,opacity,transform] duration-300 ease-out lg:hidden sm:px-4 ${isOpen ? "pointer-events-auto mt-3 max-h-[calc(100vh-6rem)] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}>
                <nav
                    id="mobile-navigation"
                    ref={menuRef}
                    aria-label="Mobile navigation"
                    className="rounded-2xl border-2 border-slate-900/25 bg-white/96 px-4 py-4 shadow-[8px_8px_0_rgba(17,24,39,0.18)] backdrop-blur-sm"
                >
                    <div className="flex max-h-[calc(100vh-9rem)] flex-col gap-2 overflow-y-auto pr-1">
                        {navItems.map((item, index) => (
                            <a
                                key={item.id}
                                ref={index === 0 ? firstMenuLinkRef : undefined}
                                href={`#${item.id}`}
                                aria-current={activeSection === item.id ? "page" : undefined}
                                className={`rounded-2xl border-2 px-4 py-3 text-sm font-semibold ui-transition ${activeSection === item.id ? "border-amber-300 bg-amber-100 text-slate-900" : "border-slate-900/20 text-slate-700 hover:bg-amber-50 hover:text-slate-900"}`}
                                onClick={() => closeMenu(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </header>
    );
}
