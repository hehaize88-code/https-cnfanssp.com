import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { buildPageMetadata, SITE_NAME, SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata({
    title: "Joyagoo Spreadsheet 2026 | Verified Finds & Product Links",
    description: "Browse Joyagoo spreadsheet finds by category, verify live product links, compare images and options, and use practical QC and shipping guides updated for 2026.",
    path: "/",
  }),
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context":"https://schema.org", "@graph":[{ "@type":"WebSite", name:SITE_NAME, url:`${SITE_URL}/`, description:"Independent Joyagoo spreadsheet, product-link checks and buyer guides." },{ "@type":"Organization", name:SITE_NAME, url:`${SITE_URL}/`, logo:`${SITE_URL}/joyagoo-logo.png` }] };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /><Script src="https://www.googletagmanager.com/gtag/js?id=G-EQVYBRD6DV" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-EQVYBRD6DV");`}</Script></body></html>;
}
