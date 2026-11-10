import Link from "next/link";
import type { Metadata } from "next";
import { Footer, Header, SearchDesk } from "./components";

export const metadata: Metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() { return <><Header /><main className="not-found shell"><span>404 / NOT FOUND</span><h1>This reference is not in the desk.</h1><p>The address may be incomplete or the guide may have moved. Search the live catalog or return to a verified internal page.</p><SearchDesk compact /><div><Link href="/">Return home</Link><Link href="/categories">Browse categories</Link></div></main><Footer /></>; }
