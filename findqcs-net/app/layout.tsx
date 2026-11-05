import type { Metadata } from "next";
import "./globals.css";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { languageAlternates } from "./i18n/paths";
import Document from "./components/Document";

export const metadata: Metadata = {
  metadataBase: new URL("https://findqcs.net"),
  title: "FindQCs – QC Photo Finder for Weidian, Taobao & 1688",
  description: "Search the catalogue by product link or keyword. Match a Weidian, Taobao or 1688 listing, then check available QC photos for size, stitching and visible defects.",
  keywords: ["QC finder", "find QC photos", "QC photo guide", "product QC photos", "QC photo checklist"],
  alternates: { canonical: "/", languages: languageAlternates("/") },
  openGraph: { title: "FindQCs – QC Photo Finder for Weidian, Taobao & 1688", description: "Search the catalogue by product link or keyword. Match a Weidian, Taobao or 1688 listing, then check available QC photos for size, stitching and visible defects.", type: "website", url: "/", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "FindQCs – QC Photo Finder for Weidian, Taobao & 1688", description: "Search the catalogue by product link or keyword. Match a Weidian, Taobao or 1688 listing, then check available QC photos for size, stitching and visible defects.", images: ["/og.png"] },
  icons: { icon: "/findqc-logo.png", shortcut: "/findqc-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Document><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-80350EE2X8" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-80350EE2X8');" }} />{children}<AnalyticsEvents/></body></Document>;
}
