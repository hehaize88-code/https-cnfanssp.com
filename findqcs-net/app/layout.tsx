import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://findqcs.net"),
  title: "QC Finder & QC Photo Guide for Product Research | FindQCs",
  description: "Use an independent QC finder workflow to find product listings, review QC photos, compare measurements and inspect visible product details before you decide.",
  keywords: ["QC finder", "find QC photos", "QC photo guide", "product QC photos", "QC photo checklist"],
  alternates: { canonical: "/" },
  openGraph: { title: "QC Finder & QC Photo Guide | FindQCs", description: "Find product listings and use practical QC photo guides to inspect visible details.", type: "website", url: "/", images: ["/og.png"] },
  twitter: { card: "summary_large_image", title: "QC Finder & QC Photo Guide | FindQCs", description: "Find product listings and use practical QC photo guides to inspect visible details.", images: ["/og.png"] },
  icons: { icon: "/findqc-logo.png", shortcut: "/findqc-logo.png" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-80350EE2X8" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-80350EE2X8');" }} />{children}</body></html>;
}
