import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <span>404</span>
      <h1>This link has moved.</h1>
      <p>Return to the current Hacoos index and search from there.</p>
      <Link href="/">Open the index</Link>
    </main>
  );
}
