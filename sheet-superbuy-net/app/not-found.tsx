import Link from "next/link";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";

export default function NotFound() {
  return <><SiteHeader /><main className="resource-hero"><p className="eyebrow">404 · Not found</p><h1>This row is no longer in the sheet.</h1><p className="resource-intro">The requested page does not exist. Return to the current product index or open the research library.</p><div className="resource-actions"><Link className="button button-primary" href="/finds/">Browse current finds</Link><Link className="button button-outline" href="/articles/">Read the guides</Link></div></main><SiteFooter /></>;
}
