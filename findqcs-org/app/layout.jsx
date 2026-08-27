import Script from "next/script";\nimport "./globals.css";
import SiteHeader from "../components/SiteHeader";
import Footer from "../components/Footer";
import LanguageProvider from "../components/LanguageProvider";
import { DEFAULT_LANGUAGE } from "../lib/i18n";
import { localizedMetadata } from "../lib/seo";

export const metadata = localizedMetadata({
  metadataBase: new URL("https://findqcs.org"),
  title: {
    default: "FindQCS — Product Finder, QC Guides & Direct Links",
    template: "%s | FindQCS",
  },
  description:
    "Search 100+ mapped product listings, open exact catalog pages, and use practical QC photo and shipping checklists before international delivery.",
  keywords: ["product finder", "QC photos", "quality check guide", "warehouse inspection", "product spreadsheet", "shipping guide"],
  robots: { index: true, follow: true },
  openGraph: {
    title: "FindQCS — Find the item. Check the evidence.",
    description: "Exact catalog links, useful finds and practical QC checklists.",
    url: "https://findqcs.org",
    siteName: "FindQCS",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FindQCS — Find the item. Check the evidence.",
    description: "Exact catalog links, useful finds and practical QC checklists.",
    images: ["/og.png"],
  },
  icons: { icon: "/findqc-logo.png", apple: "/findqc-logo.png" },
}, "/");

export default function RootLayout({ children }) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "FindQCS",
    url: "https://findqcs.org/",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://findqcs.org/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang={DEFAULT_LANGUAGE}>
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-3H09E182KX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-3H09E182KX");`}</Script>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <LanguageProvider>
          <SiteHeader />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
