import type { Metadata } from "next";
import "./globals.css";
import AnalyticsEvents from "./components/AnalyticsEvents";
import { languageAlternates } from "./i18n/paths";
import Document from "./components/Document";

export const metadata: Metadata = {
  metadataBase: new URL("https://findqcs.net"),
  title: "FindQCs: QC Photo Search and Inspection Guides",
  description: "Find product listings and learn to check Weidian, Taobao and 1688 QC photos, sneaker details, clothing measurements and color differences.",
  keywords: ["QC finder", "find QC photos", "QC photo guide", "product QC photos", "QC photo checklist"],
  alternates: { canonical: "/", languages: languageAlternates("/") },
  openGraph: { title: "QC Finder & QC Photo Guide | FindQCs", description: "Find product listings and use practical QC photo guides to inspect visible details.", type: "website", url: "/", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "QC Finder & QC Photo Guide | FindQCs", description: "Find product listings and use practical QC photo guides to inspect visible details.", images: ["/og.png"] },
  icons: { icon: "/findqc-logo.png", shortcut: "/findqc-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <Document><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-80350EE2X8" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-80350EE2X8');" }} />{children}<AnalyticsEvents/></body></Document>;
}
