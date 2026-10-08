import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
import { LanguageProvider } from "@/components/LanguageModule";

export const metadata: Metadata = {
  metadataBase: new URL("https://allchinabuys.store"),
  title: { default: "AllChinaBuy Finds | Products, Sizing and QC Guides", template: "%s | AllChinaBuy Finds" },
  description: "Browse AllChinaBuy product finds, compare sizing and QC evidence, and read practical guides to measurements, packaging and shipping.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: { type: "website", title: "AllChinaBuy Finds | Products, Sizing and QC Guides", description: "Explore AllChinaBuy finds, measurement guides and practical QC checklists.", url: "/", images: [{ url: "/og-v2.png", width: 1732, height: 908, alt: "ACBuy finds and AllChinaBuy product index" }] },
  twitter: { card: "summary_large_image", title: "AllChinaBuy Finds | Products, Sizing and QC Guides", description: "Browse ACBuy finds, product records, QC checklists and current catalog links.", images: ["/og-v2.png"] },
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
