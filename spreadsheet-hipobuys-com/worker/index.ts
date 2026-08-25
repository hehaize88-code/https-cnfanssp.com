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

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const publicAssets = new Set([
  "/favicon.svg",
  "/file.svg",
  "/globe.svg",
  "/hipobuy-logo.png",
  "/og.png",
  "/window.svg",
]);

function isStaticAsset(pathname: string): boolean {
  return pathname.startsWith("/assets/") || publicAssets.has(pathname);
}

function withHeaders(response: Response, headersToSet: Record<string, string>): Response {
  const headers = new Headers(response.headers);
  for (const [name, value] of Object.entries(headersToSet)) headers.set(name, value);
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
}

function isRscRequest(request: Request): boolean {
  return request.headers.has("rsc")
    || request.headers.has("next-router-state-tree")
    || request.headers.has("next-router-prefetch")
    || request.headers.has("next-url")
    || (request.headers.get("accept") || "").includes("text/x-component");
}

function shouldCacheHtml(request: Request, url: URL): boolean {
  return request.method === "GET"
    && url.search === ""
    && !isRscRequest(request)
    && (request.headers.get("accept") || "").includes("text/html");
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.spreadsheet-hipobuys.com") {
      url.hostname = "spreadsheet-hipobuys.com";
      return Response.redirect(url.toString(), 301);
    }

    if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
      url.pathname = url.pathname.replace(/\/+$/, "");
      return Response.redirect(url.toString(), 301);
    }

    // Pages advanced mode gives the Worker control of every request. Forward
    // compiled CSS/JS and public images to the Pages asset service so the SSR
    // HTML is hydrated and styled instead of rendering as plain text.
    if (isStaticAsset(url.pathname)) {
      const assetResponse = await env.ASSETS.fetch(request);
      const cacheControl = url.pathname.startsWith("/assets/")
        ? "public, max-age=31536000, immutable"
        : "public, max-age=86400, stale-while-revalidate=604800";
      return withHeaders(assetResponse, { "cache-control": cacheControl });
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

    if (!shouldCacheHtml(request, url)) return handler.fetch(request, env, ctx);

    const cache = caches.default;
    const cacheKey = new Request(url.toString(), request);
    const cached = await cache.match(cacheKey);
    if (cached) return withHeaders(cached, { "x-hipo-cache": "HIT" });

    const response = await handler.fetch(request, env, ctx);
    const contentType = response.headers.get("content-type") || "";
    if (response.status !== 200 || !contentType.includes("text/html") || response.headers.has("set-cookie")) {
      return response;
    }

    const cacheable = withHeaders(response, {
      "cache-control": "public, max-age=0, s-maxage=3600, stale-while-revalidate=86400",
      "x-hipo-cache": "MISS",
    });
    ctx.waitUntil(cache.put(cacheKey, cacheable.clone()));
    return cacheable;
  },
};

export default worker;
