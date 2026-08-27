import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">{children}</body>
    </html>
  );
}
