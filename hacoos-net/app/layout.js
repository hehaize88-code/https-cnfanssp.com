import "./globals.css";
import "./search.css";
import "./mobile.css";
import "./product.css";
import "./research-modules.css";
import "./hacoos-club.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { SEARCH_INDEXING_ENABLED, SITE_URL } from "./data";
import { languageAlternates, LOCALES } from "./i18n";
import { SOCIAL_IMAGE } from "./seo";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Hacoo Spreadsheet 2026 — Finds, Links & Shopping Guide | Hacoos", template: "%s | Hacoos" },
  description: "Independent Hacoo spreadsheet guide for category routes, current product links, sizing, QC photo checks and responsible shopping research.",
  alternates: languageAlternates("/", "en"),
  openGraph: { type: "website", siteName: "Hacoos", locale: "en_US", title: "Hacoo Spreadsheet 2026 — Finds, Links & Shopping Guide | Hacoos", description: "Independent Hacoo spreadsheet routes, product finds, QC checks and practical shopping guides.", url: SITE_URL, images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title: "Hacoo Spreadsheet Guide & Product Links | Hacoos", description: "Independent Hacoo spreadsheet categories and practical guides.", images: [SOCIAL_IMAGE.url] },
  robots: {
    index: SEARCH_INDEXING_ENABLED,
    follow: SEARCH_INDEXING_ENABLED,
    googleBot: { index: SEARCH_INDEXING_ENABLED, follow: SEARCH_INDEXING_ENABLED },
  },
};

export default function RootLayout({ children }) {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Hacoos", url: SITE_URL, description: "Independent Hacoo spreadsheet discovery and editorial guide." },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Hacoos", publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: LOCALES }
  ]};
  return <html lang="en" suppressHydrationWarning><body><StructuredData data={schema}/><Header/><main>{children}</main><Footer/></body></html>;
}
