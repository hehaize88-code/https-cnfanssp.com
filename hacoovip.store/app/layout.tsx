import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.store"),
  title: {
    default: "Hacoo Product Research Briefs & App Facts | HacooVIP",
    template: "%s | HacooVIP",
  },
  description: "Plan product requirements before browsing, then use an independent route index and dated Hacoo app facts without confusing either with an official spreadsheet.",
  alternates: {
    canonical: "/",
    languages: { "en": "/", "de": "/de", "es": "/es", "fr": "/fr", "it": "/it", "x-default": "/" },
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  openGraph: { type: "website", siteName: "HacooVIP", title: "Hacoo Product Research Briefs & App Facts", description: "Define product requirements first, then use an independent route index and dated Hacoo app research.", url: "https://hacoovip.store/", images: [{ url: "/article-covers/hacoo-app-facts.svg", width: 1200, height: 630, alt: "HacooVIP independent product research guide" }] },
  twitter: { card: "summary_large_image", title: "Hacoo Product Research Briefs | HacooVIP", description: "Product-research planning, independent routes and dated Hacoo app facts.", images: ["/article-covers/hacoo-app-facts.svg"] },
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
