import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./atlas.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joyagoos.org"),
  title: "Joyagoo Reviews, Fees & Buyer Policy Guide | Joyagoos",
  description: "Independent research on Joyagoo fees, QC evidence, return eligibility, warehouse clocks, billable weight, shipping rules and buyer review signals.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VWBVPSF1B4" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-VWBVPSF1B4");`}</Script>
        {children}
      </body>
    </html>
  );
}
