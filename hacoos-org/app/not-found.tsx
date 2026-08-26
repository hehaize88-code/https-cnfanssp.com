import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p>404 / REFERENCE NOT FOUND</p>
      <h1>This page has left the catalogue.</h1>
      <Link href="/en">Return to the library →</Link>
    </main>
  );
}
