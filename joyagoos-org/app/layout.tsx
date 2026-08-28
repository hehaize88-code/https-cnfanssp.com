import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./atlas.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joyagoos.org"),
  title: "Joyagoo Spreadsheet 2026, Finds, QC & Shipping Guide | Joyagoos",
  description: "Independent Joyagoo spreadsheet companion with image-matched finds, QC checks, packing decisions and source-backed shipping guidance.",
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
