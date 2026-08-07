import type { ReactNode } from "react";

export const skillIcons: Record<string, ReactNode> = {
    python: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M12 2.25c-1.32 0-2.41 1.03-2.41 2.29v2.1h4.83v.6H9.59c-1.14 0-2.06.9-2.06 2.01v1.71h4.83v.6H7.53c-1.32 0-2.41 1.03-2.41 2.29v2.05c0 1.26 1.09 2.29 2.41 2.29h2.85c1.32 0 2.41-1.03 2.41-2.29v-2.05h-1.2v-1.2h4.83c1.32 0 2.41-1.03 2.41-2.29v-2.05c0-1.26-1.09-2.29-2.41-2.29h-2.85c-1.32 0-2.41 1.03-2.41 2.29v.3h1.2v1.2H9.59V4.54C9.59 3.27 10.68 2.25 12 2.25Z" fill="#3776AB" />
            <path d="M11.995 22.5c1.32 0 2.41-1.03 2.41-2.29v-2.1H9.57v-.6h4.83c1.14 0 2.06-.9 2.06-2.01v-1.71H11.61v-.6h4.83c1.32 0 2.41-1.03 2.41-2.29v-2.05c0-1.26-1.09-2.29-2.41-2.29h-2.85c-1.32 0-2.41 1.03-2.41 2.29v2.05h1.2v1.2H7.59c-1.32 0-2.41 1.03-2.41 2.29v2.05c0 1.26 1.09 2.29 2.41 2.29h2.85ZM9.82 18.04a1.32 1.32 0 1 1 0-2.64 1.32 1.32 0 0 1 0 2.64Zm4.6-10.5a1.32 1.32 0 1 1 0-2.64 1.32 1.32 0 0 1 0 2.64Z" fill="#FFD43B" />
        </svg>
    ),
    javascript: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M2 2h20v20H2V2Z" fill="#F7DF1E" />
            <path d="M16.51 18.715c.74 1.218 1.69 2.12 3.27 2.12 1.37 0 2.24-.68 2.24-1.62 0-1.12-.9-1.52-2.42-2.18l-.83-.35c-2.4-1.02-4-2.3-4-5.01 0-2.5 1.9-4.4 4.87-4.4 2.11 0 3.63.73 4.73 2.63l-2.58 1.65c-.57-1.02-1.19-1.42-2.15-1.42-1.1 0-1.8.7-1.8 1.42 0 1 .7 1.4 2.33 2.02l.83.35c2.8 1.18 4.4 2.37 4.4 5.04 0 2.9-2.26 4.5-5.28 4.5-2.94 0-4.8-1.4-5.72-3.22L16.5 18.72Zm-7.4-.1c.41.7.77 1.3 1.65 1.3.85 0 1.4-.34 1.4-1.66V13.9H11.5v3.96c0 1.83-1.07 2.67-2.63 2.67-1.4 0-2.2-.73-2.65-1.63l2.27-1.8Z" fill="#000" />
        </svg>
    ),
    typescript: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M9.5 7.75H14.5V9.25H11V14.75H9.5V7.75ZM15.45 9.33L16.98 10.46L14.79 12.36L16.98 14.25L15.45 15.37L12.74 12.89V15.25H11.26V9.5H12.74V12.23L15.45 9.33Z" fill="#fff" />
        </svg>
    ),
    htmlcss: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path d="M3 2h18l-1.75 19.5L12 22l-7.25-.5L3 2Z" fill="#E44D26" />
            <path d="M12 17.9h3.9l.33-3.66H12V11.7h4.97l-.14 1.54L12 17.9Zm-6.64-8.94h1.84l.14 1.66h3.88l.14-1.66h1.85l-.59 6.6L12 17.9l-3.9-1.08-.57-6.88Z" fill="#fff" />
            <path d="M12 4.5V7.1l3.46.95.24-2.7H12Zm-4.37 1.23.25 2.9h3.9V4.5H7.63Z" fill="#1572B6" />
        </svg>
    ),
    react: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <circle cx="12" cy="12" r="2.25" fill="#61DAFB" />
            <path d="M4.22 15.78c1.88-1.25 4.5-1.86 7.78-1.86s5.9.61 7.78 1.86M4.22 8.22c1.88 1.25 4.5 1.86 7.78 1.86s5.9-.61 7.78-1.86" stroke="#61DAFB" strokeWidth="1.8" />
            <path d="M14.6 3.21c1.57 1.28 2.74 3.25 3.28 5.48M9.4 20.79c-1.57-1.28-2.74-3.25-3.28-5.48" stroke="#61DAFB" strokeWidth="1.8" />
        </svg>
    ),
    next: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect width="24" height="24" rx="4" fill="#000" />
            <path d="M7.5 7.5h2.25v9.75h3.75V7.5h2.25L12 4.5l-4.5 3Z" fill="#fff" />
        </svg>
    ),
    tailwind: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect width="24" height="24" rx="4" fill="#38B2AC" />
            <path d="M7.7 15.3c1.18 0 2.32-.32 3.3-.92 1.07-.68 1.84-1.75 2.12-2.96h-1.85c-.3.86-.99 1.6-1.89 2.03-.82.38-1.73.57-2.63.57-.56 0-1.11-.07-1.62-.2v1.48c.55.14 1.12.21 1.7.21Zm0-5.6c1.18 0 2.32-.32 3.3-.92 1.07-.68 1.84-1.75 2.12-2.96H11.3c-.3.86-.99 1.6-1.89 2.03-.82.38-1.73.57-2.63.57-.56 0-1.11-.07-1.62-.2v1.48c.55.14 1.12.21 1.7.21Z" fill="#fff" />
        </svg>
    ),
    motion: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" fill="#0ea5e9" opacity="0.16" />
            <path d="M7 7L11.75 12L17 9" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 17L11.75 12L17 15" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    zustand: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect x="2" y="4" width="20" height="16" rx="4" fill="#2D3748" />
            <path d="M7 8h10v2H7V8Zm0 4h10v2H7v-2Zm0 4h6v2H7v-2Z" fill="#fff" opacity="0.85" />
        </svg>
    ),
    chartjs: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect x="2" y="4" width="20" height="16" rx="4" fill="#334155" />
            <path d="M7 16V10M11 16V8M15 16V12" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    github: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect width="24" height="24" rx="4" fill="#0f172a" />
            <path d="M12 4.5c-4.14 0-7.5 3.36-7.5 7.5 0 3.31 2.15 6.12 5.14 7.12.38.07.52-.17.52-.38 0-.19-.01-.82-.01-1.49-2.09.45-2.53-1.01-2.53-1.01-.34-.87-.83-1.1-.83-1.1-.68-.47.05-.46.05-.46.75.05 1.15.77 1.15.77.67 1.15 1.75.82 2.17.63.07-.49.26-.82.47-1.01-1.67-.19-3.42-.84-3.42-3.72 0-.82.29-1.5.76-2.03-.08-.19-.33-.95.07-1.98 0 0 .62-.2 2.05.76a7.1 7.1 0 0 1 1.86-.25c.63 0 1.26.08 1.86.25 1.43-.96 2.05-.76 2.05-.76.4 1.03.15 1.79.07 1.98.48.53.76 1.2.76 2.03 0 2.88-1.75 3.52-3.42 3.72.27.24.51.72.51 1.45 0 1.05-.01 1.89-.01 2.15 0 .21.14.46.52.38A7.507 7.507 0 0 0 19.5 12c0-4.14-3.36-7.5-7.5-7.5Z" fill="#fff" />
        </svg>
    ),
    vercel: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect width="24" height="24" rx="4" fill="#000" />
            <path d="M6 17h12L12 7 6 17Z" fill="#fff" />
        </svg>
    ),
    vscode: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect width="24" height="24" rx="4" fill="#0067B8" />
            <path d="M7 5l10 7-10 7V5Z" fill="#fff" />
            <path d="M17 5l2 1.4v11.2L17 19V5Z" fill="#0056A5" />
        </svg>
    ),
    ai: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" fill="#7C3AED" opacity="0.18" />
            <path d="M9 8h6v2H9V8Zm0 6h6v2H9v-2ZM8 12h2v2H8v-2Z" fill="#fff" />
            <path d="M14 12h2v2h-2v-2Z" fill="#fff" />
        </svg>
    ),
    game: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect x="3" y="6" width="18" height="12" rx="3" fill="#0EA5E9" />
            <path d="M8 10h2v2H8v-2Zm0 4h2v2H8v-2Zm6 0h2v2h-2v-2Zm0-4h2v2h-2v-2Z" fill="#fff" />
        </svg>
    ),
    rust: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" fill="#000" opacity="0.16" />
            <path d="M9 8h6v8H9V8Z" fill="#DEA584" />
            <path d="M12 8v-2" stroke="#DEA584" strokeWidth="1.6" strokeLinecap="round" />
            <path d="M12 18v-2" stroke="#DEA584" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
    ),
    graphql: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <circle cx="12" cy="12" r="10" fill="#E10098" opacity="0.18" />
            <path d="M8.5 6.5 15.5 9.5M8.5 17.5 15.5 14.5M12 4v16M4 12h16" stroke="#E10098" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
    ),
    docker: (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <rect x="3" y="8" width="18" height="10" rx="2" fill="#2563EB" />
            <path d="M6 10h3v2H6v-2Zm4 0h3v2h-4v-2Zm4 0h3v2h-3v-2ZM8 13h3v2H8v-2Zm4 0h3v2h-3v-2Z" fill="#DBEAFE" />
        </svg>
    )
};
