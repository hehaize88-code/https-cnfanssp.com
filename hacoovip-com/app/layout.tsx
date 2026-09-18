import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.com"),
  title: "Hacoo Product Comparison & Decision Guides | Hacoo VIP",
  description: "Independent Hacoo product comparison hub with matched shortlists, decision criteria, QC evidence, delivery facts and returns guidance.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}<Script src="https://www.googletagmanager.com/gtag/js?id=G-TC65EF1C8T" strategy="afterInteractive"/><Script id="ga4-hacoovip" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-TC65EF1C8T');`}</Script></body></html>;
}
