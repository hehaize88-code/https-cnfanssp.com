import { readFileSync } from "node:fs";
import vinext from "vinext";
import { defineConfig } from "vite";

// macOS Seatbelt blocks FSEvents, so Codex previews need polling for HMR.
const isCodexSeatbeltSandbox = process.env.CODEX_SANDBOX === "seatbelt";

const localBindingConfig = {
  main: "./worker/index.ts",
  compatibility_date: "2026-08-25",
  compatibility_flags: ["nodejs_compat"],
};

export default defineConfig(async () => {
  // Keep Wrangler and Miniflare state project-local. These are non-secret tool
  // settings; application environment belongs in ignored `.env*` files.
  process.env.WRANGLER_WRITE_LOGS ??= "false";
  process.env.WRANGLER_LOG_PATH ??= ".wrangler/logs";
  process.env.MINIFLARE_REGISTRY_PATH ??= ".wrangler/registry";

  // Wrangler snapshots its log path while the Cloudflare plugin is imported.
  const { cloudflare } = await import("@cloudflare/vite-plugin");
  const pagesCommitSha = process.env.CF_PAGES_COMMIT_SHA || "local";

  // Only the small home preview travels in the JS bundle. The full catalog stays in assets.
  type Row = [string, string, number | null, string, number, number, string[], string | null, string[], boolean];
  const rows: Row[] = JSON.parse(readFileSync(new URL("./public/catalog-data/records.json", import.meta.url), "utf8"));
  const featured = rows.filter(row => row[6]?.length).sort((a,b) => b[4] - a[4]).slice(0,4)
    .map(([id,name,priceCny,category,,,images,item,,resolved]) => ({
      id, name, priceCny, category, image:new URL(images[0], "https://www.cnfanssp.com").href,
      buyUrl:item ? "https://hipobuy.com/product/weidian/" + item : resolved ? null : "/api/buy/" + id
    }));
  return {
    define: {
      __CATALOG_HOME__: JSON.stringify(featured),
      __PAGES_COMMIT_SHA__: JSON.stringify(pagesCommitSha),
    },
    server: {
      host: "0.0.0.0",
      allowedHosts: ["terminal.local"],
      ...(isCodexSeatbeltSandbox
        ? { watch: { useFsEvents: false, usePolling: true } }
        : {}),
    },
    plugins: [
      vinext(),
      cloudflare({
        viteEnvironment: { name: "rsc", childEnvironments: ["ssr"] },
        inspectorPort: false,
        config: localBindingConfig,
      }),
    ],
  };
});
