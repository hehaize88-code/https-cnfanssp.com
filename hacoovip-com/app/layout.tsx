import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.com"),
  title: "Hacoo Spreadsheet 2026 — Curated Links, Finds & QC Guide",
  description: "Independent Hacoo spreadsheet and link research hub with curated fashion finds, QC checks, shipping facts and returns guidance.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
