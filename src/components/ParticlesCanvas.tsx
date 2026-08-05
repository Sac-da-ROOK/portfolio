"use client";

import { useEffect, useRef } from "react";

export default function ParticlesCanvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animation = 0;
        const particles: { x: number; y: number; vx: number; vy: number; r: number; c: string }[] = [];

        const init = () => {
            const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 60000));
            for (let i = 0; i < count; i++) {
                particles.push({ x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight, vx: (Math.random() - 0.5) * 0.6, vy: (Math.random() - 0.5) * 0.6, r: 1 + Math.random() * 2, c: "rgba(200,230,255,0.6)" });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener("resize", resize);
        init();

        const step = () => {
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
                ctx.beginPath();
                ctx.fillStyle = p.c;
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
            animation = requestAnimationFrame(step);
        };

        animation = requestAnimationFrame(step);

        return () => {
            cancelAnimationFrame(animation);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="h-full w-full block" />;
}
