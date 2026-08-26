import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.org"),
  title: "Hacoos.org — Independent Hacoo Product Library",
  description: "An independent, multilingual Hacoo product research library with live references, QC notes, sizing and shipping guides.",
  alternates: {
    canonical: "https://hacoos.org/",
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
