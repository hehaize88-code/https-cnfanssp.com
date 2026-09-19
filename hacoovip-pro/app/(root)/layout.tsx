import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.pro"),
  title: "Hacoo Spreadsheet & Finds 2026 | Links, QC & Shipping",
  description:
    "Browse an independent Hacoo spreadsheet with product links, finds, QC checks, size guidance, shipping information and current app resources for 2026.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
