import type { Metadata } from "next";
import "./globals.css";
import "./atlas.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joyagoos.org"),
  title: "Joyagoo Spreadsheet 2026, Finds, QC & Shipping Guide | Joyagoos",
  description: "Independent Joyagoo spreadsheet companion with image-matched finds, QC checks, packing decisions and source-backed shipping guidance.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
