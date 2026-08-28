import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.uk"),
  title: {
    default: "Hacoo UK Delivery, Sizing & External Route Guide",
    template: "%s | Hacoo UK Guide",
  },
  description:
    "Independent UK guide to delivery, UK/EU sizing, review-photo evidence, returns and externally matched catalogue routes.",
  openGraph: {
    type: "website",
    siteName: "Hacoo UK Guide",
    title: "Hacoo UK Delivery, Sizing & External Route Guide",
    description: "Check UK delivery evidence, UK/EU sizing, review photos, returns and externally matched catalogue routes.",
    url: "https://hacoos.uk/",
    images: ["/hacoo-logo.png"],
  },
  twitter: {
    card: "summary",
    title: "Hacoo UK Delivery, Sizing & External Route Guide",
    description: "Check UK delivery evidence, UK/EU sizing, review photos, returns and externally matched catalogue routes.",
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
      </body>
    </html>
  );
}
