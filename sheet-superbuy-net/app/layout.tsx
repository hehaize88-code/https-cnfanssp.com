import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sheet-superbuy.net"),
  title: {
    default: "Superbuy Spreadsheet 2026: Curated Finds, USD Prices & QC Checks",
    template: "%s",
  },
  description:
    "Browse a curated Superbuy spreadsheet with current product links, USD reference prices, QC checks and practical 2026 buying guides.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Superbuy Spreadsheet 2026",
    title: "Superbuy Spreadsheet 2026: Curated Finds, USD Prices & QC Checks",
    description: "Current product links, USD reference prices, QC checks and practical 2026 buying guides.",
    images: [{ url: "/og.png", width: 1672, height: 941, alt: "Superbuy Spreadsheet 2026 clean product index" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Superbuy Spreadsheet 2026: Curated Finds, USD Prices & QC Checks",
    description: "Current product links, USD reference prices, QC checks and practical 2026 buying guides.",
    images: ["/og.png"],
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
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-H4PY5G9L1M" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-H4PY5G9L1M');document.addEventListener('click',function(e){var n=e.target instanceof Element?e.target.closest('a[href]'):null;if(!n)return;var u=new URL(n.href,location.href),p={link_url:u.href,link_text:(n.textContent||'').trim().slice(0,100),page_path:location.pathname};if(u.hostname==='www.cnfanssp.com'){gtag('event','main_site_click',p);if(u.pathname.indexOf('/AllProducts/')===0){gtag('event','product_click',p);gtag('event','outbound_product_click',p);}}else if(u.hostname===location.hostname&&u.pathname.indexOf('/articles/')===0){gtag('event','article_click',p);}});document.addEventListener('submit',function(e){var f=e.target;if(!(f instanceof HTMLFormElement)||f.action.indexOf('cnfanssp.com/search')===-1)return;var q=new FormData(f).get('keywords');gtag('event','search_submit',{search_term:typeof q==='string'?q.trim().slice(0,100):'',page_path:location.pathname});});",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
