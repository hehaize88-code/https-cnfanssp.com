#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [[ "${SITES_ENV_READY:-}" != "1" ]]; then
  exec "${script_dir}/sites-env.sh" -- "$0" "$@"
fi

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
for seo_file in sitemap.xml robots.txt; do
  source_file="${SITES_PROJECT_ROOT}/public/${seo_file}"
  if [[ ! -f "${source_file}" ]]; then
    echo "Missing required SEO file: ${source_file}" >&2
    exit 69
  fi
  mkdir -p "${output_dir}"
  cp "${source_file}" "${output_dir}/${seo_file}"
done

echo "Verified static SEO files in ${output_dir}."
