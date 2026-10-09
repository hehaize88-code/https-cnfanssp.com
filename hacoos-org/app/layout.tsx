import type { Metadata } from "next";
import "./globals.css";
import { locales, type Locale } from "@/lib/site-data";
import { headers } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.org"),
  title: "Hacoos.org — Independent Hacoo Product Library",
  description: "An independent, multilingual Hacoo product research library with live references, QC notes, sizing and shipping guides.",
  alternates: {
    canonical: "https://hacoos.org/en",
    languages: {
      "x-default": "https://hacoos.org/en",
      en: "https://hacoos.org/en",
      de: "https://hacoos.org/de",
      fr: "https://hacoos.org/fr",
      es: "https://hacoos.org/es",
      it: "https://hacoos.org/it",
      pt: "https://hacoos.org/pt",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: "Hacoos.org",
    title: "Hacoo Product Links & Independent Finds | Hacoos.org",
    description: "An independent, multilingual Hacoo product research library with live references, QC notes, sizing and shipping guides.",
    url: "https://hacoos.org/en",
  },
  twitter: {
    card: "summary",
    title: "Hacoo Product Links & Independent Finds | Hacoos.org",
    description: "Independent Hacoo product links, finds and practical verification guides.",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await headers()).get("x-hacoos-locale") ?? "en";
  const language = locales.includes(locale as Locale) ? locale : "en";
  return (
    <html lang={language}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-FNVB24S4VG" />
        <script defer src="/analytics.js" />
      </head>
      <body>{children}</body>
    </html>
  );
}
