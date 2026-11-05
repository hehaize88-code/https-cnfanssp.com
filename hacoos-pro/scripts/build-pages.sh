#!/usr/bin/env bash
set -euo pipefail

project_root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${project_root}"

npm run build

output_dir="${project_root}/pages-dist"
server_log="${project_root}/.sites-runtime/pages-build.log"
port="4178"

rm -rf "${output_dir}"
mkdir -p "${output_dir}"
cp -a "${project_root}/dist/client/." "${output_dir}/"

"${project_root}/node_modules/.bin/vinext" start --port "${port}" >"${server_log}" 2>&1 &
server_pid=$!
cleanup() {
  kill "${server_pid}" 2>/dev/null || true
  wait "${server_pid}" 2>/dev/null || true
}
trap cleanup EXIT

base_url="http://127.0.0.1:${port}"
for attempt in $(seq 1 40); do
  if curl --fail --silent --output /dev/null "${base_url}/"; then
    break
  fi
  if ! kill -0 "${server_pid}" 2>/dev/null; then
    cat "${server_log}" >&2
    exit 1
  fi
  sleep 0.25
done

curl --fail --silent --show-error "${base_url}/sitemap.xml" --output "${output_dir}/sitemap.xml"
curl --fail --silent --show-error "${base_url}/robots.txt" --output "${output_dir}/robots.txt"

mapfile -t routes < <(sed -n 's|.*<loc>https://hacoos\.pro\([^<]*\)</loc>.*|\1|p' "${output_dir}/sitemap.xml")
if [[ "${#routes[@]}" -eq 0 ]]; then
  echo "No sitemap routes were discovered." >&2
  exit 1
fi

for route in "${routes[@]}"; do
  relative="${route#/}"
  if [[ -z "${relative}" ]]; then
    target="${output_dir}/index.html"
  else
    target="${output_dir}/${relative%/}/index.html"
    mkdir -p "$(dirname "${target}")"
  fi
  curl --fail --location --silent --show-error "${base_url}${route}" --output "${target}"
  locale="en"
  case "${route}" in
    /de/*) locale="de" ;;
    /fr/*) locale="fr" ;;
    /es/*) locale="es" ;;
    /it/*) locale="it" ;;
  esac
  sed -i "s/<html lang=\"en\"/<html lang=\"${locale}\"/" "${target}"
done

curl --silent --show-error "${base_url}/page-that-does-not-exist" --output "${output_dir}/404.html"

echo "Prepared ${#routes[@]} localized HTML pages for Cloudflare Pages."
