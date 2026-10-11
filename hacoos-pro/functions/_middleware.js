const CANONICAL_HOST = "hacoos.pro";
const DOCUMENT_CACHE_CONTROL =
  "public, max-age=0, must-revalidate, s-maxage=3600, stale-while-revalidate=86400";

/**
 * Cloudflare Pages middleware for canonical-host consolidation and document
 * caching. This project is deployed as a Pages static build, so these rules
 * must live in /functions instead of the unused vinext Worker entry point.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (
    url.hostname === `www.${CANONICAL_HOST}` ||
    (url.hostname === CANONICAL_HOST && url.protocol === "http:")
  ) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return Response.redirect(url.toString(), 308);
  }

  const response = await context.next();
  if (
    !["GET", "HEAD"].includes(context.request.method) ||
    response.status !== 200
  ) {
    return response;
  }

  const contentType = response.headers.get("content-type") ?? "";
  const isDocument =
    contentType.includes("text/html") ||
    url.pathname === "/sitemap.xml" ||
    url.pathname === "/robots.txt";

  if (!isDocument) return response;

  const headers = new Headers(response.headers);
  headers.set("Cache-Control", DOCUMENT_CACHE_CONTROL);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
