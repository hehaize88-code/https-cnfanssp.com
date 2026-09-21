import type { Metadata } from "next";
import "./globals.css";
import "./atlas.css";
import "./article-enhancements.css";
import {AnalyticsEvents} from "./analytics";

const GA_MEASUREMENT_ID="G-BWGRZFMW66";

export const metadata: Metadata = {
  metadataBase: new URL("https://joyagoos.shop"),
  title: "Joyagoo Finds & Spreadsheet 2026 | Verified Product Links",
  description: "Independent Joyagoo product-link research with verified samples, category discovery, link-check methods, QC notes and shipping preparation.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "Joyagoos",
    images: [{ url: "/joyagoo-logo.png", width: 768, height: 235, alt: "Joyagoos product research" }],
  },
  twitter: { card: "summary_large_image", images: ["/joyagoo-logo.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head><script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}/><script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('js',new Date());gtag('config','${GA_MEASUREMENT_ID}',{send_page_view:true});`}}/></head><body>{children}<AnalyticsEvents/></body></html>;
}
