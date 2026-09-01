import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'The Lab Journal',
    description: 'Writing workspace for The Lab Journal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" dir="ltr">
            <body dir="ltr">{children}</body>
        </html>
    );
}
