import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.pro"),
  title: "HacooVIP Pro — Hacoo Spreadsheet, Finds & QC Guide",
  description:
    "Independent Hacoo spreadsheet guide with organized finds, product routes, QC checks, size help and shipping preparation.",
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const requestHeaders = await headers();
  const pageLanguage = requestHeaders.get("x-site-language") ?? "en";

  return (
    <html lang={pageLanguage}>
      <body>{children}</body>
    </html>
  );
}
