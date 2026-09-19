import type { Metadata } from "next";
import Script from "next/script";
import { AnalyticsEvents } from "@/components/analytics-events";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.store"),
  title: {
    default: "Hacoo Spreadsheet 2026: Links, Shipping & App Facts",
    template: "%s | HacooVIP",
  },
  description: "Browse an independent Hacoo spreadsheet, verify live links, check product photos, shipping, returns and current app facts before opening a product route.",
  alternates: {
    canonical: "/",
    languages: { "en": "/", "de": "/de", "es": "/es", "fr": "/fr", "it": "/it", "x-default": "/" },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", siteName: "HacooVIP", title: "Hacoo Spreadsheet 2026: Links, Shipping & App Facts", description: "Independent Hacoo product routes with current guides to links, tracking, shipping, returns and app facts.", url: "https://hacoovip.store/", images: [{ url: "/article-covers/hacoo-app-facts.svg", width: 1200, height: 630, alt: "HacooVIP independent product research guide" }] },
  twitter: { card: "summary_large_image", title: "Hacoo Spreadsheet 2026 | HacooVIP", description: "Independent Hacoo product routes plus current shipping, tracking, returns and app guidance.", images: ["/article-covers/hacoo-app-facts.svg"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  other: { "codex-preview": "development" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <AnalyticsEvents />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebSite", "@id": "https://hacoovip.store/#website", url: "https://hacoovip.store/", name: "HacooVIP", description: "Independent product-research planning, route index and source-checked Hacoo app facts.", inLanguage: ["en", "de", "es", "fr", "it"] },
            { "@type": "Organization", "@id": "https://hacoovip.store/#publisher", name: "HacooVIP", url: "https://hacoovip.store/", description: "Independent product-research publisher; not affiliated with Hacoo.", publishingPrinciples: "https://hacoovip.store/editorial-policy", correctionsPolicy: "https://hacoovip.store/corrections" }
          ]
        }) }} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-HRNBL4V44H" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-HRNBL4V44H");`}</Script>
      </body>
    </html>
  );
}
