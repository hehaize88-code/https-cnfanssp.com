import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://allchinabuys.shop"),
  title: "AllChinaBuy Spreadsheet & Finds | Curated Product Index",
  description: "Browse a cleaner AllChinaBuy spreadsheet with curated product finds, QC checklists, shipping guidance and beginner-friendly buying steps.",
  alternates: { canonical: "https://allchinabuys.shop/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "AllChinaBuy Spreadsheet & Finds",
    description: "Curated links, QC guides and shipping help in one cleaner product-discovery experience.",
    type: "website",
    url: "https://allchinabuys.shop/",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "AllChinaBuy Spreadsheet & Finds" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AllChinaBuy Spreadsheet & Finds",
    description: "Curated links, QC guides and shipping help.",
    images: ["/og.png"],
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-1DRVB6BDCK" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1DRVB6BDCK');" }} />{children}</body></html>;
}
