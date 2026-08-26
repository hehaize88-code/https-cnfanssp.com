import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function NotFound() {
  return <PageShell><main className="not-found"><div><p className="eyebrow">Page not found</p><h1>404</h1><h2>This record is not in the directory.</h2><p>It may have moved, expired or never existed. Use the spreadsheet to continue browsing.</p><Link href="/spreadsheet" className="button button-dark">Open spreadsheet</Link></div></main></PageShell>;
}
