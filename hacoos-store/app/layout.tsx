import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.store"),
  title: {
    default: "Hacoos Store — Hacoo Product Link IDs & Route Checks",
    template: "%s | Hacoos Store",
  },
  description:
    "Independent Hacoo product-link atlas for checking current product IDs, destination routes, first images, variants and category paths.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Hacoos Store",
    title: "Hacoos Store — Hacoo Product Link IDs & Route Checks",
    description: "Check current Hacoo product IDs, destination routes, first images, variants and category paths.",
    url: "https://hacoos.store/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoos Store — Hacoo Product Link IDs & Route Checks",
    description: "Check current Hacoo product IDs, destination routes, first images, variants and category paths.",
    images: ["/hacoo-logo.png"],
  },
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
        {children}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1R000L5K00" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-1R000L5K00');`}
        </Script>
      </body>
    </html>
  );
}
