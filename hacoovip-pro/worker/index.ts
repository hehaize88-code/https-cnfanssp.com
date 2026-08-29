/** Cloudflare Worker entry point for HacooVIP Pro. */
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (url.hostname === "www.hacoovip.pro") {
      url.hostname = "hacoovip.pro";
      url.protocol = "https:";
      return Response.redirect(url.toString(), 308);
    }

    return handler.fetch(request, env, ctx);
  },
};

export default worker;
