import type { Metadata } from "next";
import "./globals.css";
import "./atlas.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joyagoos.shop"),
  title: "Joyagoo Spreadsheet 2026, Fees, QC & Shipping Research | Joyagoos",
  description: "Independent Joyagoo buyer research with product discovery, verified official rules, QC decisions, warehouse planning, shipping math and balanced review analysis.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
