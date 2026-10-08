#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
export SITES_PROJECT_ROOT="$(cd "${script_dir}/.." && pwd)"
cd "${SITES_PROJECT_ROOT}"

# Use the builder's configured Node and Python installations. Replacing HOME
# here can hide version-manager configuration in hosted build environments.
export WRANGLER_WRITE_LOGS=false
export WRANGLER_LOG_PATH="${SITES_PROJECT_ROOT}/.wrangler/logs"
export MINIFLARE_REGISTRY_PATH="${SITES_PROJECT_ROOT}/.wrangler/registry"

node --version
python3 --version

command -v timeout || {
  echo "build-verified.sh requires GNU timeout." >&2
  exit 69
}

vinext="${SITES_PROJECT_ROOT}/node_modules/.bin/vinext"
if [[ ! -x "${vinext}" ]]; then
  echo "vinext is unavailable. Run npm run install:ci and wait for it to finish before building." >&2
  exit 69
fi

echo "Running bounded vinext build..."
timeout \
  --signal=TERM \
  --kill-after="${SITES_BUILD_KILL_AFTER:-10s}" \
  "${SITES_BUILD_TIMEOUT:-3m}" \
  "${vinext}" build

output_dir="${SITES_PROJECT_ROOT}/dist/client"
for required_file in index.html 404.html robots.txt sitemap.xml; do
  if [[ ! -f "${output_dir}/${required_file}" ]]; then
    echo "Missing required Pages output: ${output_dir}/${required_file}" >&2
    exit 69
  fi
done

python3 "${SITES_PROJECT_ROOT}/scripts/localize-site.py"
node --test "${SITES_PROJECT_ROOT}/tests/localized-static.test.mjs"
echo "Verified complete multilingual Cloudflare Pages output in ${output_dir}."
