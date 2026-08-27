import "./globals.css";
import "./search.css";
import "./mobile.css";
import "./product.css";
import "./research-modules.css";
import "./hacoos-club.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { SEARCH_INDEXING_ENABLED, SITE_URL } from "./data";
import { languageAlternates, LOCALES } from "./i18n";
import { SOCIAL_IMAGE } from "./seo";
import DocumentLanguage from "@/components/DocumentLanguage";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Hacoo Finds 2026 — Product Links, Categories & Listing Checks | Hacoos", template: "%s | Hacoos" },
  description: "Independent Hacoo finds index for current product links, category routes, listing verification, measurements and practical wardrobe decisions.",
  alternates: languageAlternates("/", "en"),
  openGraph: { type: "website", siteName: "Hacoos", locale: "en_US", title: "Hacoo Finds 2026 — Product Links, Categories & Listing Checks | Hacoos", description: "Independent Hacoo product finds, category routes and live listing checks.", url: SITE_URL, images: [SOCIAL_IMAGE] },
  twitter: { card: "summary_large_image", title: "Hacoo Finds & Verified Product Links | Hacoos", description: "Independent Hacoo product categories and live listing checks.", images: [SOCIAL_IMAGE.url] },
  robots: {
    index: SEARCH_INDEXING_ENABLED,
    follow: SEARCH_INDEXING_ENABLED,
    googleBot: { index: SEARCH_INDEXING_ENABLED, follow: SEARCH_INDEXING_ENABLED },
  },
};

export default function RootLayout({ children }) {
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Hacoos", url: SITE_URL, description: "Independent Hacoo finds, category and live-listing research guide." },
    { "@type": "WebSite", "@id": `${SITE_URL}/#website`, url: SITE_URL, name: "Hacoos", publisher: { "@id": `${SITE_URL}/#organization` }, inLanguage: LOCALES }
  ]};
  return <html lang="en" suppressHydrationWarning><body>
    <DocumentLanguage/>
    <Script src="https://www.googletagmanager.com/gtag/js?id=G-W7PM5VDRQL" strategy="afterInteractive" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-W7PM5VDRQL");`}
    </Script>
    <StructuredData data={schema}/><Header/><main>{children}</main><Footer/>
  </body></html>;
}
