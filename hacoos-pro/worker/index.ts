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

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Keep one crawlable origin. The apex host is canonical across metadata,
    // hreflang and the sitemap, so alternate protocol/host requests must not
    // return a second copy of the site.
    if (
      url.hostname === "www.hacoos.pro" ||
      (url.hostname === "hacoos.pro" && url.protocol === "http:")
    ) {
      url.protocol = "https:";
      url.hostname = "hacoos.pro";
      url.port = "";
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

    const response = await handler.fetch(request, env, ctx);
    if (request.method !== "GET" || response.status !== 200) return response;

    const contentType = response.headers.get("content-type") ?? "";
    const cacheableDocument =
      contentType.includes("text/html") ||
      url.pathname === "/sitemap.xml" ||
      url.pathname === "/robots.txt";

    if (!cacheableDocument) return response;

    const headers = new Headers(response.headers);
    // Browsers revalidate; Cloudflare may reuse a fresh edge response for one
    // hour and serve it stale while the next version is fetched.
    headers.set(
      "Cache-Control",
      "public, max-age=0, must-revalidate, s-maxage=3600, stale-while-revalidate=86400",
    );

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};

export default worker;
