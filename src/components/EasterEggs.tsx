"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const MatrixCanvas = dynamic(() => import("./MatrixCanvas"), { ssr: false });
const ParticlesCanvas = dynamic(() => import("./ParticlesCanvas"), { ssr: false });
const ChessAnimation = dynamic(() => import("./ChessAnimation"), { ssr: false });
const CommandPalette = dynamic(() => import("./CommandPalette"), { ssr: false });

export default function EasterEggs() {
    const router = useRouter();
    const [matrix, setMatrix] = useState(false);
    const [particles, setParticles] = useState(false);
    const [chess, setChess] = useState(false);
    const [darkVariant, setDarkVariant] = useState(false);
    const [paletteOpen, setPaletteOpen] = useState(false);
    const konamiRef = useRef<string[]>([]);

    const toggle = useCallback((key: string, value?: boolean) => {
        switch (key) {
            case "matrix":
                setMatrix((v) => (typeof value === "boolean" ? value : !v));
                break;
            case "particles":
                setParticles((v) => (typeof value === "boolean" ? value : !v));
                break;
            case "chess":
                setChess((v) => (typeof value === "boolean" ? value : !v));
                break;
            case "darkVariant":
                setDarkVariant((v) => (typeof value === "boolean" ? value : !v));
                break;
            default:
        }
    }, []);

    useEffect(() => {
        if (darkVariant) {
            document.documentElement.classList.add("dark-variant-1");
        } else {
            document.documentElement.classList.remove("dark-variant-1");
        }
    }, [darkVariant]);

    useEffect(() => {
        const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

        const onKey = (e: KeyboardEvent) => {
            const k = e.key;
            konamiRef.current.push(k);
            if (konamiRef.current.length > KONAMI.length) konamiRef.current.shift();
            if (KONAMI.every((v, i) => konamiRef.current[i] === v)) {
                setPaletteOpen(true);
                // gentle notification
                const el = document.createElement("div");
                el.textContent = "Easter egg unlocked";
                el.style.position = "fixed";
                el.style.right = "1rem";
                el.style.bottom = "1rem";
                el.style.padding = "0.5rem 0.75rem";
                el.style.borderRadius = "8px";
                el.style.background = "rgba(0,0,0,0.6)";
                el.style.color = "white";
                el.style.zIndex = "9999";
                document.body.appendChild(el);
                setTimeout(() => document.body.removeChild(el), 2400);
            }
            // quick open palette with ? or Ctrl+K
            if (k === "?" || (e.ctrlKey && k.toLowerCase() === "k")) {
                setPaletteOpen(true);
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <div aria-hidden={!matrix && !particles && !chess}>
            {matrix ? (
                <div className="pointer-events-none fixed inset-0 z-40 opacity-90">
                    <MatrixCanvas />
                </div>
            ) : null}

            {particles ? (
                <div className="pointer-events-none fixed inset-0 z-30 opacity-80">
                    <ParticlesCanvas />
                </div>
            ) : null}

            {chess ? (
                <div className="pointer-events-none fixed inset-0 z-50 flex items-end justify-center pb-12">
                    <ChessAnimation />
                </div>
            ) : null}

            <CommandPalette
                open={paletteOpen}
                onClose={() => setPaletteOpen(false)}
                onCommand={(cmd) => {
                    // parse simple commands
                    const parts = cmd.trim().toLowerCase().split(/\s+/);
                    if (parts[0] === "matrix") toggle("matrix", parts[1] !== "off");
                    if (parts[0] === "particles") toggle("particles", parts[1] !== "off");
                    if (parts[0] === "chess") toggle("chess", parts[1] !== "off");
                    if (parts[0] === "dark") toggle("darkVariant", parts[1] !== "off");
                    if (parts[0] === "about") router.push("/secret-about");
                }}
            />
        </div>
    );
}
