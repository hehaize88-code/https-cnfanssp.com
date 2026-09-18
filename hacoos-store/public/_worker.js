const ARTICLE_ROUTE = /^\/(?:de\/|fr\/|es\/|it\/)?articles(?:\/|$)/;

export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    const { pathname } = new URL(request.url);

    if (!ARTICLE_ROUTE.test(pathname)) {
      return response;
    }

    const headers = new Headers(response.headers);
    headers.set("Cache-Control", "no-store, no-cache, must-revalidate");
    headers.set("CDN-Cache-Control", "no-store");
    headers.set("Cloudflare-CDN-Cache-Control", "no-store");
    headers.set("X-Hacoos-Articles-Release", "2026-09-18-eight-guides");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
