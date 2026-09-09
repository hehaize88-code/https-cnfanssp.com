import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | AllChinaBuy Finds",
  description: "This URL is not a current AllChinaBuy spreadsheet, guide or product-discovery page.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return <main className="not-found"><div><a className="not-found-logo" href="/"><img src="/allchinabuy-logo.png" alt="AllChinaBuy" /></a><p className="section-kicker">404 / Link not found</p><h1>This page left the spreadsheet.</h1><p>The requested URL does not match a current guide or product-discovery page.</p><div><a href="/">Return home</a><a href="/spreadsheet/">Browse spreadsheet</a></div></div></main>;
}
