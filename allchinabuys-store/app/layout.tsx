import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageModule";

export const metadata: Metadata = {
  metadataBase: new URL("https://allchinabuys.store"),
  title: { default: "AllChinaBuy Product Records 2026 | Source-Checked Listings", template: "%s | AllChinaBuy Product Records" },
  description: "Review source-checked AllChinaBuy product records, option checks, current source links, QC checklists and practical shipping guides.",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: { type: "website", title: "AllChinaBuy Product Records 2026", description: "Check the source. Compare the options. Review the record.", url: "/", images: [{ url: "/og-v2.png", width: 1732, height: 908, alt: "AllChinaBuy product records workspace" }] },
  twitter: { card: "summary_large_image", title: "AllChinaBuy Product Records 2026", description: "Check the source. Compare the options. Review the record.", images: ["/og-v2.png"] },
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
      <body className="antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "AllChinaBuy Product Records", url: "https://allchinabuys.store", description: "An independent product-record verification and shopping education resource." }) }} />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
