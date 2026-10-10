export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.findqcs.shop") {
      url.protocol = "https:";
      url.hostname = "findqcs.shop";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
