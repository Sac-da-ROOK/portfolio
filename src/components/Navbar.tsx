"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type NavbarTheme = "default" | "cs";

const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "competitions", label: "Competitions & Achievements", href: "#competitions" },
    { id: "learning", label: "Learning", href: "#learning" },
    { id: "chess", label: "Chess", href: "#chess" },
    { id: "robotics", label: "Robotics", href: "#robotics" },
    { id: "gallery", label: "Gallery", href: "/gallery" },
    { id: "blog", label: "Blog", href: "#blog" },
    { id: "contact", label: "Contact", href: "#contact" }
];

export default function Navbar({ theme = "default" }: { theme?: NavbarTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const headerRef = useRef<HTMLElement | null>(null);
    const menuRef = useRef<HTMLDivElement | null>(null);
    const buttonRef = useRef<HTMLButtonElement | null>(null);
    const firstMenuLinkRef = useRef<HTMLAnchorElement | null>(null);
    const isCsTheme = theme === "cs";

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

    const shellClasses = isCsTheme
        ? "border border-cyan-400/20 bg-[#081a2a]/80 shadow-[0_18px_34px_rgba(8,47,73,0.28)] backdrop-blur-md"
        : "border border-slate-900/20 bg-white/92 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-sm";

    const brandClasses = isCsTheme
        ? "border border-cyan-300/30 bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-[4px_4px_0_rgba(34,211,238,0.2)]"
        : "border border-slate-900/20 bg-amber-200 text-slate-900 shadow-[4px_4px_0_rgba(17,24,39,0.08)]";

    const textClasses = isCsTheme ? "text-slate-200" : "text-slate-600";
    const activeTextClasses = isCsTheme ? "text-white" : "text-slate-900";
    const activeBarClasses = isCsTheme
        ? "from-cyan-400 via-sky-400 to-emerald-400"
        : "from-amber-400 to-yellow-300";
    const mobileShellClasses = isCsTheme
        ? "border border-cyan-400/20 bg-[#081a2a]/95"
        : "border border-slate-900/20 bg-white/96";
    const mobileItemClasses = isCsTheme
        ? "border border-cyan-400/20 bg-slate-900/40 text-slate-200 hover:bg-cyan-500/10 hover:text-white"
        : "border border-slate-900/20 text-slate-700 hover:bg-amber-50 hover:text-slate-900";
    const mobileActiveItemClasses = isCsTheme
        ? "border border-cyan-300/40 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 text-white"
        : "border-amber-300 bg-amber-100 text-slate-900";
    const menuButtonClasses = isCsTheme
        ? "border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 to-emerald-500/15 text-cyan-50 hover:bg-cyan-500/20"
        : "border border-slate-900/20 bg-amber-100 text-slate-900 hover:bg-amber-200";

    const csButtonClasses = isCsTheme
        ? "border border-cyan-300/30 bg-gradient-to-r from-cyan-500/20 via-sky-500/15 to-emerald-500/20 text-cyan-50 hover:border-cyan-200/50 hover:from-cyan-500/30 hover:to-emerald-500/30"
        : "border border-emerald-400/30 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 text-slate-950 shadow-[0_8px_22px_rgba(16,185,129,0.18)] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(16,185,129,0.25)]";

    return (
        <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-5 lg:px-8">
            <div className={`flex w-full max-w-7xl items-center gap-3 rounded-[1.35rem] px-3 py-2.5 sm:px-4 lg:px-5 md:mr-[190px] lg:translate-x-[80px] ${shellClasses}`}>
                <div className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-2.5">
                    <Link href="/" aria-label="Go to the homepage" className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 sm:h-11 sm:w-11 ${brandClasses}`}>
                        AS
                    </Link>
                    <div className="hidden min-w-0 sm:block">
                        <p className={`truncate text-[9px] font-semibold uppercase tracking-[0.24em] sm:text-[10px] ${isCsTheme ? "text-cyan-200" : "text-slate-600"}`}>Aarush Srivastava</p>
                        <p className={`truncate text-[11px] font-semibold sm:text-xs ${isCsTheme ? "text-white" : "text-slate-900"}`}>Personal STEM Portfolio</p>
                    </div>
                </div>

                <nav className="hidden min-w-0 flex-1 items-center justify-center md:flex" aria-label="Primary navigation">
                    <div className="flex min-w-0 items-center justify-center gap-2 whitespace-nowrap lg:gap-3 xl:gap-4">
                        {navItems.map((item) => {
                            const isRouteLink = item.href.startsWith("/");
                            const isActive = activeSection === item.id;
                            const linkClasses = `group relative flex items-center justify-center whitespace-nowrap px-2.5 py-2 text-[11px] font-semibold leading-none tracking-[-0.01em] ui-transition sm:text-[11.5px] lg:px-3 lg:text-[12px] ${isActive ? activeTextClasses : textClasses} ${isCsTheme ? "hover:text-white" : "hover:text-slate-900"}`;

                            if (isRouteLink) {
                                return (
                                    <Link
                                        key={item.id}
                                        href={item.href}
                                        aria-current={isActive ? "page" : undefined}
                                        className={linkClasses}
                                        onClick={() => closeMenu(false)}
                                    >
                                        {item.label}
                                        <span className={`absolute inset-x-1 -bottom-1 h-[2px] rounded-full bg-gradient-to-r ${activeBarClasses} ui-transition ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                                    </Link>
                                );
                            }

                            return (
                                <a
                                    key={item.id}
                                    href={item.href}
                                    aria-current={isActive ? "page" : undefined}
                                    className={linkClasses}
                                    onClick={() => closeMenu(false)}
                                >
                                    {item.label}
                                    <span className={`absolute inset-x-1 -bottom-1 h-[2px] rounded-full bg-gradient-to-r ${activeBarClasses} ui-transition ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`} />
                                </a>
                            );
                        })}
                    </div>
                </nav>

                <button
                    type="button"
                    ref={buttonRef}
                    className={`ml-auto inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ui-transition hover:-translate-y-0.5 md:hidden ${menuButtonClasses}`}
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

            <div className="absolute right-3 top-3 hidden md:block sm:right-4 md:right-5 lg:right-8">
                <Link
                    href="/cs"
                    aria-current={isCsTheme ? "page" : undefined}
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border px-4 py-2.5 text-[11px] font-bold leading-none transition duration-200 lg:px-5 lg:text-xs ${csButtonClasses}`}
                >
                    Computer Science Page
                </Link>
            </div>

            <div className={`mx-auto w-full max-w-7xl overflow-hidden px-3 transition-[max-height,opacity,transform] duration-300 ease-out md:hidden sm:px-4 ${isOpen ? "pointer-events-auto mt-3 max-h-[calc(100vh-6rem)] translate-y-0 opacity-100" : "pointer-events-none max-h-0 -translate-y-2 opacity-0"}`}>
                <nav
                    id="mobile-navigation"
                    ref={menuRef}
                    aria-label="Mobile navigation"
                    className={`rounded-[1.35rem] px-4 py-4 shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-sm ${mobileShellClasses}`}
                >
                    <div className="flex max-h-[calc(100vh-9rem)] flex-col gap-2.5 overflow-y-auto pr-1">
                        {navItems.map((item, index) => {
                            const isRouteLink = item.href.startsWith("/");
                            const isActive = activeSection === item.id;
                            const className = `rounded-2xl px-4 py-3 text-sm font-semibold ui-transition ${isActive ? mobileActiveItemClasses : mobileItemClasses}`;

                            if (isRouteLink) {
                                return (
                                    <Link
                                        key={item.id}
                                        ref={index === 0 ? firstMenuLinkRef : undefined}
                                        href={item.href}
                                        aria-current={isActive ? "page" : undefined}
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
                                    aria-current={isActive ? "page" : undefined}
                                    className={className}
                                    onClick={() => closeMenu(false)}
                                >
                                    {item.label}
                                </a>
                            );
                        })}

                        <Link
                            href="/cs"
                            aria-current={isCsTheme ? "page" : undefined}
                            className={`rounded-2xl px-4 py-3 text-sm font-bold ui-transition ${isCsTheme ? mobileActiveItemClasses : "border border-emerald-400/30 bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 text-slate-950"}`}
                            onClick={() => closeMenu(false)}
                        >
                            Computer Science Page
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}
