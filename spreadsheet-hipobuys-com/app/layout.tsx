import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://spreadsheet-hipobuys.com"),
  title: { default: "Hipobuy Product Index 2026 — Listing Verification & Finds", template: "%s | Hipo Index" },
  description: "Browse an independent Hipobuy product index focused on live-listing verification, source-page checks, category discovery and index freshness.",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: { type: "website", title: "Hipobuy Product Index 2026 — Listing Verification & Finds", description: "Organized product finds, live-listing verification, source-page checks and category discovery.", url: "/", siteName: "Hipo Index", images: [{ url: "/og.png", width: 1200, height: 630, alt: "Hipobuy product index and listing verification" }] },
  twitter: { card: "summary_large_image", title: "Hipobuy Product Index 2026 — Listing Verification & Finds", description: "Product finds, live-listing checks and category discovery.", images: ["/og.png"] },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

const websiteSchema = {
  "@context": "https://schema.org", "@type": "WebSite", name: "Hipo Index", url: "https://spreadsheet-hipobuys.com/", description: "Independent Hipobuy product index for live-listing verification, source-page checks and category discovery.",
  potentialAction: { "@type": "SearchAction", target: "https://cnfanssp.com/search.html?channelid=2&keywords={search_term_string}", "query-input": "required name=search_term_string" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><LanguageProvider>{children}</LanguageProvider><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} /></body></html>;
}
