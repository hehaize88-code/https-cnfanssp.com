export async function GET() {
  return new Response(
    "User-agent: *\nAllow: /\n\nSitemap: https://hacoos.org/sitemap.xml\n",
    {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
    },
  );
}
