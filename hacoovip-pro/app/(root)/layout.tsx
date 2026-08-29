import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoovip.pro"),
  title: "Hacoo Item Checks, Fit Notes & Reviews | HacooVIP Pro",
  description:
    "Independent Hacoo item-check guides for received products, measurements, fit notes, care records and evidence-based reviews.",
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
