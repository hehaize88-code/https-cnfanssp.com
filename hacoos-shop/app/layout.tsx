import Script from "next/script";\nimport type { Metadata } from "next";
import "./globals.css";
import "./research.css";

export const metadata: Metadata = {
  title: { default: "Hacoos Shop — Hacoo Finds & Field Guides", template: "%s | Hacoos Shop" },
  description: "Independent Hacoo finds, QC, shipping and buying guide with direct product and category routes.",
  metadataBase: new URL("https://hacoos.shop"),
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: `(function(){var p=location.pathname.split('/')[1];document.documentElement.lang=['es','fr','de','it'].includes(p)?p:'en'})()` }} /></head><body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-P2G3GQ21HX" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-P2G3GQ21HX");`}</Script>{children}</body></html>;
}
