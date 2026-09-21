import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./atlas.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://joyagoos.org"),
  title: "Joyagoo Guide 2026: Spreadsheet, QC, Fees & Shipping",
  description: "Use the Joyagoo spreadsheet, verify product links and QC evidence, and understand fees, returns, warehouse storage and shipping before paying.",
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-VWBVPSF1B4" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-VWBVPSF1B4");
document.addEventListener("click", function(event) {
  var target = event.target;
  var link = target && target.closest ? target.closest("a") : null;
  if (!link) return;
  var name = null;
  if (link.closest(".language-menu")) name = "language_change";
  else if (link.closest(".article-grid, .publishing-order, .update-strip")) name = "article_cta_click";
  else if (link.closest(".category-grid")) name = "category_click";
  else if (link.hostname === "cnfanssp.com") name = "outbound_product_click";
  if (name) gtag("event", name, {link_url: link.href, link_text: (link.textContent || "").trim().slice(0, 100)});
});
document.addEventListener("submit", function(event) {
  var form = event.target;
  if (form && form.matches && form.matches(".search-panel")) {
    var input = form.querySelector("input[name=keywords]");
    gtag("event", "search_submit", {search_term: input ? input.value : ""});
  }
});`}</Script>
        {children}
      </body>
    </html>
  );
}
