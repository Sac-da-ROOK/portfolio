"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Props = {
    open: boolean;
    onClose: () => void;
    onCommand: (cmd: string) => void;
};

const suggestions = [
    "matrix on",
    "matrix off",
    "particles on",
    "particles off",
    "chess on",
    "chess off",
    "dark on",
    "dark off",
    "about",
    "stats",
];

export default function CommandPalette({ open, onClose, onCommand }: Props) {
    const [value, setValue] = useState("");
    const ref = useRef<HTMLInputElement | null>(null);

    const closePalette = useCallback(() => {
        setValue("");
        onClose();
    }, [onClose]);

    useEffect(() => {
        if (open) {
            setTimeout(() => ref.current?.focus(), 50);
        }
    }, [open]);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") closePalette();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [closePalette]);

    const filtered = useMemo(() => {
        if (!value) return suggestions;
        return suggestions.filter((s) => s.includes(value.toLowerCase()));
    }, [value]);

    const submit = (cmd?: string) => {
        const c = cmd ?? value;
        if (!c) return;
        onCommand(c);
        closePalette();
    };

    if (!open) return null;

    return (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-60 flex items-start justify-center pt-28">
            <div className="mx-4 w-full max-w-2xl rounded-2xl bg-slate-900/90 p-4 shadow-2xl backdrop-blur" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
                <label className="sr-only">Command</label>
                <input ref={ref} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") submit(); }} className="w-full rounded-md bg-transparent px-4 py-3 text-white outline-none" placeholder="Type a command (e.g. 'matrix on')" />

                <div className="mt-3 grid gap-2">
                    {filtered.slice(0, 6).map((s) => (
                        <button key={s} onClick={() => submit(s)} className="text-left text-sm text-slate-300 hover:bg-white/5 rounded-md px-3 py-2">
                            {s}
                        </button>
                    ))}
                </div>

                <div className="mt-4 flex justify-end">
                    <button onClick={closePalette} className="rounded-md bg-white/5 px-3 py-2 text-sm text-white">Close</button>
                </div>
            </div>
        </div>
    );
}
