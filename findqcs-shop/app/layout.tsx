import type { Metadata } from "next";
import "./globals.css";
import { LanguageRuntime } from "./language";

export const metadata: Metadata = {
  metadataBase: new URL("https://findqcs.shop"),
  title: {
    default: "FindQC — QC Finder, Product Search & Inspection Guides",
    template: "%s | FindQC",
  },
  description: "Search exact product listings, browse destination categories and use practical QC photo checklists before international shipping.",
  keywords: ["QC finder", "QC photos", "QC finds", "product finder", "spreadsheet finds", "warehouse QC checklist"],
  alternates: { canonical: "https://findqcs.shop" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://findqcs.shop",
    siteName: "FindQC",
    title: "FindQC — Find the Item. Check the Evidence.",
    description: "Exact product destinations, matched listing references and practical QC inspection guides.",
  },
  twitter: { card: "summary", title: "FindQC — QC Finder & Inspection Guides", description: "Find the item. Check the evidence." },
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
      <body className="antialiased">{children}<LanguageRuntime /></body>
    </html>
  );
}
