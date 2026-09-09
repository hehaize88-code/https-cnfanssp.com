import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { LanguageProvider } from "@/components/LanguageModule";

export const metadata: Metadata = {
  metadataBase: new URL("https://allchinabuys.store"),
  title: { default: "ACBuy Finds 2026 | AllChinaBuy Product Index", template: "%s | ACBuy Finds" },
  description: "Browse ACBuy finds, AllChinaBuy product records, QC checklists and current catalog links in an independent, source-checked product index.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: { type: "website", title: "ACBuy Finds 2026 | AllChinaBuy Product Index", description: "Browse ACBuy finds, product records, QC checklists and current catalog links.", url: "/", images: [{ url: "/og-v2.png", width: 1732, height: 908, alt: "ACBuy finds and AllChinaBuy product index" }] },
  twitter: { card: "summary_large_image", title: "ACBuy Finds 2026 | AllChinaBuy Product Index", description: "Browse ACBuy finds, product records, QC checklists and current catalog links.", images: ["/og-v2.png"] },
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-Q81YBM09Z1" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Q81YBM09Z1');"}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "ACBuy Finds and AllChinaBuy Product Index", alternateName: "AllChinaBuy Spreadsheet", url: "https://allchinabuys.store", description: "An independent product-record and shopping research resource." }) }} />
        <LanguageProvider><AnalyticsEvents />{children}</LanguageProvider>
      </body>
    </html>
  );
}
