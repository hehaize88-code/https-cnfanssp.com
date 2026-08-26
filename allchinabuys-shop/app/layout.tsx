import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://allchinabuys.shop"),
  title: "AllChinaBuy Spreadsheet & Finds | Verified Product Links",
  description: "Browse an independent AllChinaBuy product index built around live-link checks, category discovery, listing verification and dated shortlists.",
  alternates: { canonical: "https://allchinabuys.shop/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AllChinaBuy Spreadsheet & Finds",
    description: "Curated product links, category discovery and listing-verification guidance in one independent index.",
    type: "website",
    url: "https://allchinabuys.shop/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AllChinaBuy Spreadsheet & Finds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AllChinaBuy Spreadsheet & Finds",
    description: "Curated product links, category discovery and listing-verification guidance.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
