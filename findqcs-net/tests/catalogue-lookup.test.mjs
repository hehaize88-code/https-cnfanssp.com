import test from "node:test";
import assert from "node:assert/strict";
import { catalogueSearch, identifyListing } from "../app/catalogueLookup.ts";

test("keeps marketplace IDs separate from catalogue page IDs", () => {
  assert.deepEqual(identifyListing("https://weidian.com/item.html?spm=abc&itemID=7632511460"), {sourceId:"7632511460"});
  assert.deepEqual(identifyListing("weidian.com/item.html?itemId=7632591132"), {sourceId:"7632591132"});
  assert.deepEqual(identifyListing("https://www.cnfanssp.com/AllProducts/6667.html?ref=x"), {catalogueUrl:"https://cnfanssp.com/AllProducts/6667.html"});
  assert.equal(identifyListing("https://weidian.com.example.org/item.html?itemID=7632511460"), undefined);
  assert.equal(identifyListing("https://weidian.com/item.html?itemID=bad"), undefined);
  assert.equal(identifyListing("blue jersey"), undefined);
  assert.equal(new URL(catalogueSearch("blue & white")).searchParams.get("keywords"), "blue & white");
  assert.equal(catalogueSearch(""), "https://cnfanssp.com/AllProducts/");
});
