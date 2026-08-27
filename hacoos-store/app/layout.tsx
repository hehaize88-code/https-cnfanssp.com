import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.store"),
  title: {
    default: "Hacoos Store — Hacoo Product Links, Finds & Guides",
    template: "%s | Hacoos Store",
  },
  description:
    "Independent Hacoo spreadsheet guide with checked product links, category routes, QC guidance, sizing help and shipping research.",
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1R000L5K00" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-1R000L5K00");`}</Script>{children}</body>
    </html>
  );
}
