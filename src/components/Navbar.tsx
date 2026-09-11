"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "competitions", label: "Competitions & Achievements", href: "#competitions" },
    { id: "learning", label: "Learning", href: "#learning" },
    { id: "chess", label: "Chess", href: "#chess" },
    { id: "robotics", label: "Robotics", href: "#robotics" },
    { id: "stem-gallery", label: "STEM Gallery", href: "#stem-gallery" },
    { id: "computer-science", label: "Computer Science", href: "/cs" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "blog", label: "Blog", href: "#blog" },
    { id: "contact", label: "Contact", href: "#contact" }
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
        <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 lg:px-8">
            <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-2 rounded-[1.35rem] border border-slate-900/20 bg-white/92 px-3 py-2.5 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:gap-3 sm:px-4 lg:px-5">
                <div className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
                    <Link href="/" aria-label="Go to the homepage" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-900/20 bg-amber-200 text-sm font-semibold text-slate-900 shadow-[4px_4px_0_rgba(17,24,39,0.08)] transition-transform duration-200 hover:-translate-y-0.5 sm:h-11 sm:w-11">
                        AS
                    </Link>
                    <div className="min-w-0">
                        <p className="truncate text-[9px] font-semibold uppercase tracking-[0.24em] text-slate-600 sm:text-[10px]">Aarush Srivastava</p>
                        <p className="truncate text-[11px] font-semibold text-slate-900 sm:text-xs">Personal STEM Portfolio</p>
                    </div>
                </div>

                <nav className="hidden min-w-0 flex-1 items-center justify-center md:flex" aria-label="Primary navigation">
                    <div className="flex items-center justify-center gap-2 whitespace-nowrap lg:gap-3 xl:gap-4">
                        {navItems.map((item) => {
                            const isRouteLink = item.href.startsWith("/");
                            const linkClasses = `group relative flex items-center justify-center whitespace-nowrap px-1 py-1.5 text-[11px] font-semibold leading-none tracking-[-0.01em] ui-transition sm:text-[11.5px] lg:text-[12px] ${activeSection === item.id ? "text-slate-900" : "text-slate-600 hover:text-slate-900"}`;

                            if (isRouteLink) {
                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        aria-current={activeSection === item.id ? "page" : undefined}
                                        className={linkClasses}
                                        onClick={() => closeMenu(false)}
                                    >
                                        {item.label}
                                        <span className={`absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 ui-transition ${activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                                    </Link>
                                );
                            }

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    aria-current={activeSection === item.id ? "page" : undefined}
                                    className={linkClasses}
                                    onClick={() => closeMenu(false)}
                                >
                                    {item.label}
                                    <span className={`absolute inset-x-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 ui-transition ${activeSection === item.id ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                                </a>
                            );
                        })}
                    </div>
                </nav>

                <button
                    type="button"
                    ref={buttonRef}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-900/20 bg-amber-100 text-slate-900 ui-transition hover:-translate-y-0.5 hover:bg-amber-200 md:hidden"
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

            <div className={`mx-auto w-full max-w-6xl overflow-hidden px-3 transition-[max-height,opacity,transform] duration-300 ease-out md:hidden sm:px-4 ${isOpen ? "pointer-events-auto mt-3 max-h-[calc(100vh-6rem)] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}>
                <nav
                    id="mobile-navigation"
                    ref={menuRef}
                    aria-label="Mobile navigation"
                    className="rounded-[1.35rem] border border-slate-900/20 bg-white/96 px-4 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                >
                    <div className="flex max-h-[calc(100vh-9rem)] flex-col gap-2 overflow-y-auto pr-1">
                        {navItems.map((item, index) => {
                            const isRouteLink = item.href.startsWith("/");
                            const className = `rounded-2xl border px-4 py-3 text-sm font-semibold ui-transition ${activeSection === item.id ? "border-amber-300 bg-amber-100 text-slate-900" : "border-slate-900/20 text-slate-700 hover:bg-amber-50 hover:text-slate-900"}`;

                            if (isRouteLink) {
                                return (
                                    <Link
                                        key={item.id}
                                        ref={index === 0 ? firstMenuLinkRef : undefined}
                                        href={item.href}
                                        aria-current={activeSection === item.id ? "page" : undefined}
                                        className={className}
                                        onClick={() => closeMenu(false)}
                                    >
                                        {item.label}
                                    </Link>
                                );
                            }

                            return (
                                <a
                                    key={item.id}
                                    ref={index === 0 ? firstMenuLinkRef : undefined}
                                    href={item.href}
                                    aria-current={activeSection === item.id ? "page" : undefined}
                                    className={className}
                                    onClick={() => closeMenu(false)}
                                >
                                    {item.label}
                                </a>
                            );
                        })}
                    </div>
                </nav>
            </div>
        </header>
    );
}
