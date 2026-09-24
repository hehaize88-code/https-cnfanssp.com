import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.uk"),
  title: {
    default: "Hacoo UK: Delivery, Sizing, Reviews & App Guide",
    template: "%s",
  },
  description:
    "Independent UK guide to delivery, UK/EU sizing, review-photo evidence, returns and externally matched catalogue routes.",
  openGraph: {
    type: "website",
    siteName: "Hacoo UK Guide",
    title: "Hacoo UK: Delivery, Sizing, Reviews & App Guide",
    description: "Check UK delivery times, tracking, returns, UK/EU sizing, the app and verified product-link research.",
    url: "https://hacoos.uk/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoo UK: Delivery, Sizing, Reviews & App Guide",
    description: "Check UK delivery times, tracking, returns, UK/EU sizing, the app and verified product-link research.",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LBGWZSKSBM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-LBGWZSKSBM");`}</Script>
        {children}
      </body>
    </html>
  );
}
