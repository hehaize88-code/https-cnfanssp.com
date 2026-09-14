import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";
import AnalyticsEvents from "./components/AnalyticsEvents";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheet-hipobuys.com"),
  title: { default: "Hipobuy Spreadsheet 2026 — Verified Product Links", template: "%s | Hipo Index" },
  description: "Browse a Hipobuy spreadsheet with product links, live-listing checks, freshness labels and practical source-page verification guides.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Hipobuy Spreadsheet 2026 — Verified Product Links", description: "Hipobuy product links, live-listing checks, freshness labels and category discovery.", url: "/", siteName: "Hipo Index", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hipobuy spreadsheet and listing verification" }] },
  twitter: { card: "summary_large_image", title: "Hipobuy Spreadsheet 2026 — Verified Product Links", description: "Hipobuy product links, listing checks and freshness guidance.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", name: "Hipo Index", url: "https://spreadsheet-hipobuys.com/", description: "Independent Hipobuy product index for live-listing verification, source-page checks and category discovery.",
  potentialAction: { "@type": "SearchAction", target: "https://cnfanssp.com/search.html?channelid=2&keywords={search_term_string}", "query-input": "required name=search_term_string" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Script src="https://www.googletagmanager.com/gtag/js?id=G-VWLN1VNXX0" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VWLN1VNXX0');`}</Script><LanguageProvider><AnalyticsEvents />{children}</LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /></body></html>;
}
