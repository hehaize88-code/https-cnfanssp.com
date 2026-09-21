const host="joyagoos.shop";
const key="3644b5669356ccdb6f9795b7b229f9b5";
const sitemap=await fetch(`https://${host}/sitemap.xml`).then(response=>{
  if(!response.ok)throw new Error(`Unable to read sitemap: ${response.status}`);
  return response.text();
});
const urlList=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]);
const response=await fetch("https://api.indexnow.org/indexnow",{method:"POST",headers:{"content-type":"application/json; charset=utf-8"},body:JSON.stringify({host,key,keyLocation:`https://${host}/${key}.txt`,urlList})});
if(!response.ok&&response.status!==202)throw new Error(`IndexNow submission failed: ${response.status} ${await response.text()}`);
console.log(`IndexNow accepted ${urlList.length} URLs with status ${response.status}.`);
