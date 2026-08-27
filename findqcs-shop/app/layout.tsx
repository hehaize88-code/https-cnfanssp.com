import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://findqcs.shop"),
  title: {
    default: "FindQC Research, Product Intelligence & QC Evidence Guides",
    template: "%s | FindQC",
  },
  description: "Independent research into FindQC features, Product Intelligence, Real Hauls and the limits of QC evidence before shipment.",
  keywords: ["FindQC Product Intelligence", "FindQC reviews", "FindQC Real Hauls", "Premium QC", "QC evidence analysis", "QC photo analysis"],
  alternates: { canonical: "https://findqcs.shop" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://findqcs.shop",
    siteName: "FindQC",
    title: "FindQC Research — Understand the Platform and Check the Evidence",
    description: "Independent research into Product Intelligence, Real Hauls, reviews and QC evidence limits.",
  },
  twitter: { card: "summary", title: "FindQC Research & QC Evidence Guides", description: "Understand the platform. Check the evidence." },
  icons: {
    icon: "/findQC.png",
    shortcut: "/findQC.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
