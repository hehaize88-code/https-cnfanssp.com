import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://findqcs.shop"),
  title: {
    default: "FindQC Guide: Find QC Photos and Check Product Details",
    template: "%s | FindQC",
  },
  description: "Learn how to find QC photos from Weidian, Taobao and 1688 links, match product images and check size, shape and stitching before shipping.",
  keywords: ["FindQC", "QC finder", "find QC", "QC finds", "QC checker", "QC photos", "FindQC reviews", "QC photo analysis"],
  alternates: { canonical: "https://findqcs.shop" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: "https://findqcs.shop",
    siteName: "FindQC",
    title: "FindQC & QC Finder Guide — Check Photos and Product Evidence",
    description: "Independent guides for FindQC search, QC photos, product finds, measurements and evidence limits.",
  },
  twitter: { card: "summary", title: "FindQC Research & QC Evidence Guides", description: "Understand the platform. Check the evidence." },
  icons: {
    icon: "/findQC.png",
    shortcut: "/findQC.png",
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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9XTZZLDSQZ" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-9XTZZLDSQZ");`}</Script>
        <Script id="site-events" strategy="afterInteractive">{`(function(){
  function send(name, element) {
    if (typeof window.gtag !== "function") return;
    window.gtag("event", name, {
      link_text: (element.textContent || "").trim().slice(0, 100),
      link_url: element.href || element.action || "",
      page_path: window.location.pathname
    });
  }
  document.addEventListener("click", function(event) {
    var anchor = event.target.closest && event.target.closest("a");
    if (!anchor) return;
    var explicit = anchor.getAttribute("data-track");
    if (explicit) return send(explicit, anchor);
    try {
      var url = new URL(anchor.href, window.location.href);
      if (url.hostname === "www.cnfanssp.com" || url.hostname === "cnfanssp.com") return send("main_site_click", anchor);
      if (url.origin === window.location.origin && /^\\/(?:nl\\/|de\\/|it\\/|es\\/)?articles\\//.test(url.pathname)) return send("article_click", anchor);
    } catch (_) {}
  });
  document.addEventListener("submit", function(event) {
    var form = event.target;
    if (!form || !form.matches || !form.matches("form.search-desk")) return;
    if (typeof window.gtag !== "function") return;
    var data = new FormData(form);
    window.gtag("event", "search_submit", { search_term: data.get("keywords") || "", page_path: window.location.pathname });
  });
})();`}</Script>{children}</body>
    </html>
  );
}
