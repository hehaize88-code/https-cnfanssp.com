import Script from "next/script";\nimport type { Metadata } from "next";
import "./globals.css";

// Keep this file in the Pages build watch set when edge routing changes.
export const metadata: Metadata = {
  metadataBase: new URL("https://hacoos.pro"),
  title: {
    default: "Hacoo Evidence & Buyer Verification | Hacoos.pro",
    template: "%s | Hacoos",
  },
  description:
    "Independent Hacoo evidence desk for checking official policy dates, regional visibility, listing changes and buyer records.",
  robots: { index: true, follow: true },
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JXEDJMZZFB" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-JXEDJMZZFB");`}</Script>{children}</body>
    </html>
  );
}
