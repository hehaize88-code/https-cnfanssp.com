import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.store"),
  title: {
    default: "Hacoo Spreadsheet 2026 — App Facts, Links & Reviews | HacooVIP",
    template: "%s | HacooVIP",
  },
  description: "Independent Hacoo spreadsheet and source-led research on the app, product links, reviews, shipping, returns, QC photos and sizing.",
  alternates: {
    canonical: "/",
    languages: { "en": "/", "de": "/de", "es": "/es", "fr": "/fr", "it": "/it", "x-default": "/" },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", siteName: "HacooVIP", title: "Hacoo Spreadsheet 2026 — App Facts, Links & Reviews", description: "A visual product index plus source-led Hacoo app, review, shipping and return research.", url: "https://hacoovip.store/" },
  twitter: { card: "summary", title: "Hacoo Spreadsheet 2026 | HacooVIP", description: "Image-matched product links and independent, source-led Hacoo research." },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "WebSite", "@id": "https://hacoovip.store/#website", url: "https://hacoovip.store/", name: "HacooVIP", description: "Independent Hacoo spreadsheet, product links and shopping guides.", inLanguage: ["en", "de", "es", "fr", "it"], potentialAction: { "@type": "SearchAction", target: "https://cnfanssp.com/search.html?channelid=2&keywords={search_term_string}", "query-input": "required name=search_term_string" } },
            { "@type": "Organization", "@id": "https://hacoovip.store/#publisher", name: "HacooVIP", url: "https://hacoovip.store/", description: "Independent product-discovery publisher; not affiliated with Hacoo." }
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
