const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("count", Date.now().toString());
const { default: worker } = await import(workerUrl.href);

const slugs = process.argv.slice(2);
for (const slug of slugs) {
  const response = await worker.fetch(
    new Request(`http://localhost/articles/${slug}/`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
  const html = await response.text();
  const start = html.indexOf('<article class="editorial-content shell">');
  const end = html.indexOf("</article>", start);
  const proseStart = html.indexOf('<div class="prose">', start);
  const visible = html
    .slice(proseStart, end)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&(?:amp|quot|#x27|#39|lt|gt);/g, " ");
  const words = visible.match(/[A-Za-z0-9]+(?:[’'-][A-Za-z0-9]+)*/g) ?? [];
  console.log(`${slug}\t${words.length}`);
}
