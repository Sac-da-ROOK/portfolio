import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Lab Journal CMS',
    description: 'Private publishing workspace for the Lab Journal',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
