import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://findqcs.net"),
  title: "FindQCs – Free QC Photo Finder & Product Research",
  description: "Search product listings, browse categories and use practical QC photo checklists before you buy. Free independent product research.",
  alternates: { canonical: "/" },
  openGraph: { title: "FindQCs – Free QC Photo Finder", description: "Search. Check. Choose.", type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "FindQCs – Free QC Photo Finder", description: "Search. Check. Choose.", images: ["/og.png"] },
  icons: { icon: "/findqc-logo.png", shortcut: "/findqc-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
