import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.uk"),
  title: {
    default: "Hacoo UK Product Links & Buying Guide",
    template: "%s | Hacoo UK Guide",
  },
  description:
    "Independent UK guide to current Hacoo product links, matching images, QC checks, sizing, shipping and returns.",
  openGraph: {
    type: "website",
    siteName: "Hacoo UK Guide",
    title: "Hacoo UK Product Links & Buying Guide",
    description: "Check current Hacoo product links, first images, QC, sizing, UK shipping and returns.",
    url: "https://hacoos.uk/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoo UK Product Links & Buying Guide",
    description: "Check current Hacoo product links, first images, QC, sizing, UK shipping and returns.",
    images: ["/hacoo-logo.png"],
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
