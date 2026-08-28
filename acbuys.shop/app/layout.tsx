import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./ui/LanguageProvider";

export const metadata: Metadata = {
  title: "ACBuy Finds & QC Guide",
  description: "Browse organized ACBuy finds with USD prices, QC photo counts, clear categories, and a practical shopping guide.",
  robots: process.env.SITE_PUBLIC_INDEXING === "true"
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false },
  openGraph: {
    title: "ACBuy Finds & QC Guide",
    description: "Search smarter. Check QC. Shop with confidence.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ACBuy Finds & QC Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACBuy Finds & QC Guide",
    description: "Search smarter. Check QC. Shop with confidence.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQZ5EEZ1VR" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ZQZ5EEZ1VR');" }} /><LanguageProvider>{children}</LanguageProvider></body></html>;
}
