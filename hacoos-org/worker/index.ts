/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const CACHE_VERSION = "2026-08-26-seo-hardening-1";
const CACHE_CONTROL = "public, max-age=300, s-maxage=86400, stale-while-revalidate=604800";

function cachedResponse(response: Response, state: "HIT" | "MISS") {
  const headers = new Headers(response.headers);
  headers.set("Cache-Control", CACHE_CONTROL);
  headers.set("X-Hacoos-Cache", state);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if ((url.hostname === "hacoos.org" && url.protocol !== "https:") || url.hostname === "www.hacoos.org") {
      url.protocol = "https:";
      url.hostname = "hacoos.org";
      url.port = "";
      if (url.pathname === "/") url.pathname = "/en";
      return Response.redirect(url.toString(), 308);
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      return handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
    }

    const canUseEdgeCache = request.method === "GET" && url.hostname === "hacoos.org";
    const edgeCache = typeof caches === "undefined" ? null : (caches as unknown as { default: Cache }).default;
    const cacheUrl = new URL(url);
    cacheUrl.search = "";
    cacheUrl.searchParams.set("__hacoos_cache", CACHE_VERSION);
    const cacheKey = new Request(cacheUrl.toString(), { method: "GET" });

    if (canUseEdgeCache && edgeCache) {
      const hit = await edgeCache.match(cacheKey);
      if (hit) return cachedResponse(hit, "HIT");
    }

    const response = await handler.fetch(request, env, ctx);
    const contentType = response.headers.get("content-type") ?? "";
    const isCacheable = response.status === 200 && (
      contentType.includes("text/html") ||
      contentType.includes("application/xml") ||
      contentType.includes("text/plain")
    );

    if (!canUseEdgeCache || !isCacheable) return response;

    const cacheable = cachedResponse(response, "MISS");
    if (edgeCache) ctx.waitUntil(edgeCache.put(cacheKey, cacheable.clone()));
    return cacheable;
  },
};

export default worker;
