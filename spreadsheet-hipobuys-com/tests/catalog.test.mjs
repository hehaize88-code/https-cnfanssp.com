import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import worker from '../dist/client/_worker.js';

const base = 'https://spreadsheet-hipobuys.com';
const assets = { async fetch(request) {
  return new Response(await readFile(new URL('../public' + new URL(request.url).pathname, import.meta.url)));
} };
const api = path => worker.fetch(new Request(new URL(path, base)), { ASSETS: assets }, { waitUntil() {} });
const data = async path => {
  const response = await api(path);
  assert.equal(response.status, 200, path);
  return response.json();
};

test('marketplace IDs, catalog pagination and pricing sorts use source records', async () => {
  const match = await data('/api/catalog?q=7632511460');
  const item = match.items.find(item => item.buyUrl === 'https://hipobuy.com/product/weidian/7632511460');
  assert.equal(item?.name, 'Jersey-60');
  assert.equal(item.priceCny, 99);
  const gallery = await data('/api/gallery/' + item.id);
  assert.ok(gallery.images.includes(item.image));
  const first = await data('/api/catalog?sort=price-asc&limit=30');
  const second = await data('/api/catalog?sort=price-asc&limit=30&page=2');
  assert.ok(first.total > 1000);
  assert.equal(first.pages, Math.ceil(first.total / 30));
  assert.ok(first.items.at(-1).priceCny <= second.items[0].priceCny);
  assert.ok(second.items.every(b => first.items.every(a => a.id !== b.id)));
});

test('visual index includes every catalogue image and can retrieve a known listing', async () => {
  const records = JSON.parse(await readFile(new URL('../public/catalog-data/records.json', import.meta.url)));
  const hashes = JSON.parse(await readFile(new URL('../public/catalog-data/hashes.json', import.meta.url)));
  const sample = records.find(row => row[7] === '7632511460');
  assert.ok(sample);
  const [hash, sha] = hashes[sample[6][0]];
  const result = await data('/api/image-search?hash=' + hash + '&sha=' + sha);
  assert.ok(result.items.slice(0, 5).some(row => row.id === sample[0]));
  for (const row of records) {
    assert.ok(row[9], 'Missing source gallery for ' + row[0]);
    for (const path of row[6]) assert.match(hashes[path]?.[0] || '', /^[0-9a-f]{16}$/, path);
  }
});
