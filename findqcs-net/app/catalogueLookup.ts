const catalogue = "https://cnfanssp.com";

export function catalogueSearch(value: string) {
  if (!value) return catalogue + "/AllProducts/";
  return catalogue + "/search.html?" + new URLSearchParams({ keywords: value, channelid: "2" });
}

export function identifyListing(input: string) {
  let link: URL;
  try {
    link = new URL(input.includes("://") ? input : "https://" + input);
  } catch {
    return;
  }
  if (!["https:", "http:"].includes(link.protocol) || link.username || link.password) return;
  const host = link.hostname.replace(/^www\./, "").toLowerCase();
  if (host === "cnfanssp.com") {
    const match = /^\/AllProducts\/(\d+)\.html\/?$/i.exec(link.pathname);
    if (match) return { catalogueUrl: catalogue + "/AllProducts/" + match[1] + ".html" };
  }
  if (host === "weidian.com" && /^\/item\.html\/?$/i.test(link.pathname)) {
    for (const [name, id] of link.searchParams) {
      if (name.toLowerCase() === "itemid" && /^\d+$/.test(id)) return { sourceId: id };
    }
  }
}
