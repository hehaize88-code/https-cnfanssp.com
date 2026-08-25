#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
esbuild="${project_root}/node_modules/.bin/esbuild"
server_entry="${project_root}/dist/server/index.js"
pages_worker="${project_root}/dist/client/_worker.js"
redirected_worker_config="${project_root}/.wrangler/deploy/config.json"

[[ -x "${esbuild}" ]] || {
  echo "esbuild is unavailable after dependency installation." >&2
  exit 69
}
[[ -f "${server_entry}" ]] || {
  echo "Vinext server output is missing: ${server_entry}" >&2
  exit 69
}

"${esbuild}" "${server_entry}" \
  --outfile="${pages_worker}" \
  --bundle \
  --format=esm \
  --platform=neutral \
  --target=es2022 \
  --conditions=workerd,worker,browser \
  '--external:node:*' \
  --legal-comments=none

# The Vite plugin writes a pointer to its generated Workers config. Cloudflare
# Pages must validate the root wrangler.jsonc instead; leaving this pointer in
# place makes Pages read both `main` and `pages_build_output_dir` and fail.
node --input-type=module - "${redirected_worker_config}" <<'NODE'
import { unlink } from "node:fs/promises";

try {
  await unlink(process.argv[2]);
} catch (error) {
  if (error?.code !== "ENOENT") throw error;
}
NODE

echo "Prepared Cloudflare Pages advanced-mode output: dist/client/_worker.js"
