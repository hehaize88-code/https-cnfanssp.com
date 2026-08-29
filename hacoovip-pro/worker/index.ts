/** Cloudflare Worker entry point for HacooVIP Pro. */
import handler from "vinext/server/app-router-entry";

const canonicalHost = "hacoovip.pro";
const htmlCacheControl = "public, max-age=300, stale-while-revalidate=86400";
const edgeCacheControl = "public, max-age=86400, stale-while-revalidate=604800";
const immutableCacheControl = "public, max-age=31536000, immutable";
const imageCacheControl = "public, max-age=2592000, stale-while-revalidate=604800";

function permanentRedirect(url: URL): Response {
  return new Response(null, {
    status: 308,
    headers: {
      location: url.toString(),
      // Workers Cache can normalize HTTP and HTTPS onto the same edge cache
      // key. Keep permanent redirect semantics for crawlers, but never cache
      // this response or an HTTP redirect can be replayed to the HTTPS URL.
      "cache-control": "no-store",
    },
  });
}

function cachePolicy(pathname: string, contentType: string): {
  browser: string;
  edge?: string;
} | null {
  if (pathname.startsWith("/_next/static/") || pathname.startsWith("/assets/")) {
    return { browser: immutableCacheControl, edge: immutableCacheControl };
  }

  if (
    contentType.startsWith("image/") ||
    pathname === "/favicon.svg" ||
    pathname.startsWith("/products/")
  ) {
    return { browser: imageCacheControl, edge: imageCacheControl };
  }

  if (
    contentType.includes("text/html") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt"
  ) {
    return { browser: htmlCacheControl, edge: edgeCacheControl };
  }

  return null;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (
      (url.hostname === canonicalHost || url.hostname === `www.${canonicalHost}`) &&
      (url.protocol !== "https:" || url.hostname !== canonicalHost)
    ) {
      url.hostname = canonicalHost;
      url.protocol = "https:";
      if (url.pathname === "/") url.pathname = "/en";
      return permanentRedirect(url);
    }

    if (url.hostname === canonicalHost && url.pathname === "/") {
      url.pathname = "/en";
      return permanentRedirect(url);
    }

    const response = await handler.fetch(request, env, ctx);
    const policy = cachePolicy(
      url.pathname,
      response.headers.get("content-type") ?? "",
    );

    if (!policy || request.method !== "GET" || response.status !== 200) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.set("cache-control", policy.browser);
    if (policy.edge) headers.set("cloudflare-cdn-cache-control", policy.edge);
    headers.set("x-content-type-options", "nosniff");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
