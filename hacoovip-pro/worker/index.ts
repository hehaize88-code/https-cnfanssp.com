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

function withCachePolicy(request: Request, url: URL, response: Response): Response {
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
}

function isStaticAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/assets/") ||
    pathname.startsWith("/_next/static/") ||
    pathname.startsWith("/products/") ||
    pathname === "/favicon.svg" ||
    pathname === "/hacoo-logo.png" ||
    pathname === "/file.svg" ||
    pathname === "/globe.svg" ||
    pathname === "/window.svg"
  );
}

function isPageCacheRequest(request: Request, url: URL): boolean {
  const accept = request.headers.get("accept") ?? "";
  return (
    request.method === "GET" &&
    url.protocol === "https:" &&
    url.hostname === canonicalHost &&
    !isStaticAsset(url.pathname) &&
    !request.headers.has("rsc") &&
    !request.headers.has("next-router-prefetch") &&
    (accept.includes("text/html") ||
      url.pathname === "/sitemap.xml" ||
      url.pathname === "/robots.txt")
  );
}

function pageCacheKey(url: URL): Request {
  const key = new URL(url);
  key.protocol = "https:";
  key.hostname = canonicalHost;
  key.port = "";
  key.search = "";
  return new Request(key.toString(), { method: "GET" });
}

function withWorkerCacheStatus(response: Response, status: "HIT" | "MISS"): Response {
  const headers = new Headers(response.headers);
  headers.set("x-worker-cache", status);
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

function forEdgeCache(url: URL, response: Response): Response {
  const policy = cachePolicy(
    url.pathname,
    response.headers.get("content-type") ?? "",
  );
  const headers = new Headers(response.headers);
  headers.set("cache-control", policy?.edge ?? policy?.browser ?? edgeCacheControl);
  headers.delete("cloudflare-cdn-cache-control");
  headers.delete("x-worker-cache");
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
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

    if (request.method === "GET" && isStaticAsset(url.pathname)) {
      const assetResponse = await env.ASSETS.fetch(request);
      return withCachePolicy(request, url, assetResponse);
    }

    const usePageCache = isPageCacheRequest(request, url) && typeof caches !== "undefined";
    const edgeCache = usePageCache
      ? (caches as unknown as { default: Cache }).default
      : null;
    const key = usePageCache ? pageCacheKey(url) : null;
    if (key && edgeCache) {
      const cached = await edgeCache.match(key);
      if (cached) {
        return withWorkerCacheStatus(withCachePolicy(request, url, cached), "HIT");
      }
    }

    const response = await handler.fetch(request, env, ctx);
    const prepared = withCachePolicy(request, url, response);
    if (key && edgeCache && prepared.status === 200) {
      ctx.waitUntil(edgeCache.put(key, forEdgeCache(url, prepared.clone())));
      return withWorkerCacheStatus(prepared, "MISS");
    }
    return prepared;
  },
};

export default worker;
