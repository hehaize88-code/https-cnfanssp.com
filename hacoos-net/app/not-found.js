import Link from "next/link";
import { Arrow } from "@/components/Icons";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
  alternates: {},
};

export default function NotFound() {
  return <section className="page-hero simple-hero full-page"><div className="wrap narrow"><span className="section-label">404 / page not found</span><h1>This route moved<br/><em>or never existed.</em></h1><p>Return to the current Hacoo finds directory, choose a category, or use the live listing search. This error page is not indexed.</p><div className="hero-actions"><Link className="button primary" href="/">Return home <Arrow/></Link><Link className="button quiet" href="/categories">Browse categories</Link></div></div></section>;
}
