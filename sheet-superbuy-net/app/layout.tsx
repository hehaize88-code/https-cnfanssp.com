import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sheet-superbuy.net"),
  title: {
    default: "Superbuy Spreadsheet 2026 | Finds, QC Notes & Guides",
    template: "%s | Superbuy Spreadsheet 2026",
  },
  description:
    "Browse an independent Superbuy spreadsheet with curated finds, USD price references, QC checklists and practical buying guides.",
  alternates: {
    canonical: "/",
    languages: { "x-default": "/", "en": "/", "zh-CN": "/zh", "de": "/de", "fr": "/fr", "es": "/es", "it": "/it", "pt": "/pt", "pl": "/pl", "nl": "/nl" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Superbuy Spreadsheet 2026",
    title: "Superbuy Spreadsheet 2026",
    description: "Finds, prices, QC notes and practical buying guides.",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Superbuy Spreadsheet 2026 clean product index" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Superbuy Spreadsheet 2026",
    description: "Finds, prices, QC notes and practical buying guides.",
    images: ["/og.png"],
  },
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
      <body>{children}</body>
    </html>
  );
}
