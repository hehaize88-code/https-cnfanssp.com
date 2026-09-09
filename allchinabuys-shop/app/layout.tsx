import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://allchinabuys.shop"),
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script async src="https://www.googletagmanager.com/gtag/js?id=G-1DRVB6BDCK" /><script dangerouslySetInnerHTML={{ __html: "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-1DRVB6BDCK'); document.addEventListener('click', function(event){ var link = event.target && event.target.closest ? event.target.closest('a') : null; if(link && link.hostname && link.hostname !== location.hostname){ gtag('event', 'outbound_click', {link_url: link.href, link_domain: link.hostname, transport_type: 'beacon'}); }});" }} />{children}</body></html>;
}
