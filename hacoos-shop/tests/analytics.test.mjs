import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import vm from 'node:vm';
const source = await readFile('public/analytics-events.js', 'utf8');
function setup() {
  const events = [], handlers = {}, counts = {};
  const context = { URL, location: { pathname: '/es/', origin: 'https://hacoos.shop', href: 'https://hacoos.shop/es/' }, window: { gtag: (...a) => events.push(a) }, document: { documentElement: { lang: 'es' }, addEventListener: (type, fn) => { handlers[type] = fn; counts[type] = (counts[type] || 0) + 1; } } };
  vm.runInNewContext(source, context);
  return { events, handlers, context, counts };
}
function link(href, lang = null) { return { href, hasAttribute: key => key === 'hreflang' && !!lang, getAttribute: () => lang }; }
test('new catalog product gets one product event with the actual ID', () => {
  const s = setup(); s.handlers.click({ target: { closest: () => link('https://cnfanshp.com/AllProducts/6045.html') } });
  assert.equal(s.events.length, 1); assert.equal(s.events[0][1], 'product_click');
  assert.equal(s.events[0][2].product_id, '6045'); assert.equal(s.events[0][2].page_language, 'es');
});
test('official sources are not miscounted as catalog conversions', () => {
  const s = setup(); s.handlers.click({ target: { closest: () => link('https://web.hacoo.app/en-US/pages/shipping-info') } }); assert.equal(s.events.length, 0);
});
test('search is counted without exporting entered personal data', () => {
  const s = setup(); s.handlers.submit({ target: { matches: () => true, querySelector: () => ({ value: 'personal@example.com' }), classList: { contains: () => false } } });
  assert.equal(s.events.length, 1); assert.equal(s.events[0][1], 'search_submit'); assert.ok(!JSON.stringify(s.events).includes('personal@example.com'));
});
test('event listeners are not doubled if script loads twice', () => {
  const s = setup(); vm.runInNewContext(source, s.context); assert.equal(s.counts.click, 1); assert.equal(s.counts.submit, 1);
});
test('switching an article language is not a second article selection', () => {
  const s = setup(); s.handlers.click({ target: { closest: () => link('https://hacoos.shop/fr/articles/hacoo-links-not-working/', 'fr') } });
  assert.equal(s.events.length, 1); assert.equal(s.events[0][1], 'language_change'); assert.equal(s.events[0][2].target_language, 'fr');
});
