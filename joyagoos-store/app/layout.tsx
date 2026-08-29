import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { buildPageMetadata, SITE_NAME, SITE_URL } from "./seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildPageMetadata({
    title: "Joyagoo Product Directory 2026 | Live Listing Routes",
    description: "Use an independent Joyagoo product directory to check listing destinations, image matches, options, reference prices and the next product route.",
    path: "/",
  }),
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = { "@context":"https://schema.org", "@graph":[{ "@type":"WebSite", name:SITE_NAME, url:`${SITE_URL}/`, description:"Independent Joyagoo product directory, listing-route checks and buyer guides." },{ "@type":"Organization", name:SITE_NAME, url:`${SITE_URL}/`, logo:`${SITE_URL}/joyagoo-logo.png` }] };
  return <html lang="en"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /><Script src="https://www.googletagmanager.com/gtag/js?id=G-EQVYBRD6DV" strategy="afterInteractive" /><Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-EQVYBRD6DV");`}</Script></body></html>;
}
