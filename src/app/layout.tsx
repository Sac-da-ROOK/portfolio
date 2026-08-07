import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import SeoStructuredData from "@/components/SeoStructuredData";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import EasterEggs from "@/components/EasterEggs";
import PageTransitionProvider from "@/components/PageTransitionProvider";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import BackToTopButton from "@/components/BackToTopButton";
import InteractiveCursor from "@/components/InteractiveCursor";
import AmbientBackground from "@/components/AmbientBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aarushsrivastava.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aarush Srivastava — Portfolio",
    template: "%s | Aarush Srivastava",
  },
  description:
    "A premium student developer portfolio showcasing educational software, interactive games, and modern web experiences.",
  applicationName: "Aarush Srivastava Portfolio",
  keywords: [
    "Aarush Srivastava",
    "student developer",
    "portfolio",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "web development",
    "education",
    "interactive projects",
  ],
  creator: "Aarush Srivastava",
  authors: [
    { name: "Aarush Srivastava", url: "https://aarushsrivastava.dev" },
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Aarush Srivastava — Portfolio",
    description:
      "A premium student developer portfolio showcasing educational software, interactive games, and modern web experiences.",
    url: siteUrl,
    siteName: "Aarush Srivastava Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Aarush Srivastava portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarush Srivastava — Portfolio",
    description:
      "A premium student developer portfolio showcasing educational software, interactive games, and modern web experiences.",
    creator: "@Sac_da_ROOK",
    images: [`${siteUrl}/og-image.png`],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "manifest",
        url: "/manifest.json",
      },
    ],
  },
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  themeColor: "#0f172a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PerformanceMonitor />
        <SeoStructuredData />
        <ScrollProgressBar />
        <BackToTopButton />
        <InteractiveCursor />
        <AmbientBackground />
        {/* Easter eggs controller (hidden by default) */}
        <EasterEggs />
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only fixed left-4 top-4 z-50 rounded-md bg-white/5 px-3 py-2 text-sm text-white">Skip to main content</a>
        <PageTransitionProvider>{children}</PageTransitionProvider>
      </body>
    </html>
  );
}
