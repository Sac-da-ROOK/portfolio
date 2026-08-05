"use client";

import { useEffect, useRef } from "react";

export default function MatrixCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animation = 0;
        const columns = Math.floor(window.innerWidth / 14);
        const drops = new Array(columns).fill(0).map(() => Math.random() * 1000);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);

        const draw = () => {
            if (!ctx) return;
            ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#0ff";
            ctx.font = "14px monospace";

            for (let i = 0; i < drops.length; i++) {
                const text = String.fromCharCode(0x30a0 + Math.random() * 96);
                ctx.fillText(text, i * 14, drops[i]);
                drops[i] += 14 + Math.random() * 6;
                if (drops[i] > canvas.height) drops[i] = 0;
            }

            animation = requestAnimationFrame(draw);
        };

        animation = requestAnimationFrame(draw);

        return () => {
            cancelAnimationFrame(animation);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="h-full w-full block" />;
}
