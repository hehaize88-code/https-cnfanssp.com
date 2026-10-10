import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

// Keep this file in the Pages build watch set when edge routing changes.
export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.pro"),
  title: {
    default: "Hacoo Spreadsheet, Shoe Links & Buying Guides | Hacoos.pro",
    template: "%s | Hacoos",
  },
  description:
    "Compare Hacoo product links, clothing and shoe sizes, photo checks and delivery updates. Independent buying guides.",
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
        <Script src="/analytics.js" strategy="afterInteractive" />{children}</body>
    </html>
  );
}
