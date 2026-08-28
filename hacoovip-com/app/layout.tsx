import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.com"),
  title: "Hacoo Product Comparison & Decision Guides | Hacoo VIP",
  description: "Independent Hacoo product comparison hub with matched shortlists, decision criteria, QC evidence, delivery facts and returns guidance.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
