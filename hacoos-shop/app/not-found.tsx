import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p>404 / FIELD NOTE MISSING</p><h1>This page is not on the desk.</h1><Link href="/">Return to the field guide →</Link></main>;
}
