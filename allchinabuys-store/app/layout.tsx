import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageModule";

export const metadata: Metadata = {
  metadataBase: new URL("https://allchinabuys.store"),
  title: { default: "AllChinaBuy Spreadsheet 2026 | Verified Product Finds", template: "%s | AllChinaBuy Spreadsheet" },
  description: "Browse organized AllChinaBuy spreadsheet finds, product source records, QC checklists and practical shipping guides.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: { type: "website", title: "AllChinaBuy Index 2026", description: "Check the source. Compare the details.", images: [{ url: "/og-v2.png", width: 1732, height: 908, alt: "AllChinaBuy Index — product intelligence workspace" }] },
  twitter: { card: "summary_large_image", title: "AllChinaBuy Index 2026", description: "Check the source. Compare the details.", images: ["/og-v2.png"] },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased"><script async src="https://www.googletagmanager.com/gtag/js?id=G-Q81YBM09Z1" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Q81YBM09Z1');" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "AllChinaBuy Spreadsheet 2026", url: "https://allchinabuys.store", description: "An independent product discovery and shopping education resource." }) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
