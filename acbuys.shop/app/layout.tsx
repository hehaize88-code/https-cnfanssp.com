import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./ui/LanguageProvider";
import AnalyticsEvents from "./ui/AnalyticsEvents";

export const metadata: Metadata = {
  title: "ACBuy Spreadsheet 2026 | Updated Finds, QC Photos & Prices",
  description: "Browse an updated ACBuy spreadsheet for 2026 with organized finds, USD prices, QC guidance, shipping planning, fees and warehouse guides.",
  other: process.env.SITE_PUBLIC_INDEXING === "true" ? {} : { "codex-preview": "development" },
  robots: process.env.SITE_PUBLIC_INDEXING === "true"
    ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } }
    : { index: false, follow: false },
  openGraph: {
    title: "ACBuy Spreadsheet 2026 | Updated Finds & QC Guide",
    description: "Search updated ACBuy finds, check QC photos and plan fees, warehouse storage and shipping.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "ACBuy Finds & QC Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACBuy Spreadsheet 2026 | Updated Finds & QC Guide",
    description: "Search updated ACBuy finds, check QC photos and plan fees, warehouse storage and shipping.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-ZQZ5EEZ1VR" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-ZQZ5EEZ1VR');" }} /><AnalyticsEvents /><LanguageProvider>{children}</LanguageProvider></body></html>;
}
