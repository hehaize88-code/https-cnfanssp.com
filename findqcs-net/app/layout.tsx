import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://findqcs.net"),
  title: "FindQCs – Independent QC Photo Guide & Product Research",
  description: "Search product listings, browse categories and use independent QC photo guides to inspect visible details before you decide.",
  alternates: { canonical: "/" },
  openGraph: { title: "FindQCs – Independent QC Photo Guide", description: "Independent product research and practical QC photo guidance.", type: "website", url: "/", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "FindQCs – Independent QC Photo Guide", description: "Independent product research and practical QC photo guidance.", images: ["/og.png"] },
  icons: { icon: "/findqc-logo.png", shortcut: "/findqc-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
