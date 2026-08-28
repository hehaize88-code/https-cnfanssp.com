import {readdir,readFile,writeFile} from "node:fs/promises";
import {join} from "node:path";

const languages=new Set(["en","de","es","fr","it"]);
let checked=0;

async function walk(directory,lang){
  for(const entry of await readdir(directory,{withFileTypes:true})){
    const target=join(directory,entry.name);
    if(entry.isDirectory())await walk(target,lang);
    else if(entry.name.endsWith(".html")){
      const source=await readFile(target,"utf8");
      const fixed=source.replace(/<html lang="[^"]*"/,`<html lang="${lang}"`);
      if(!fixed.includes(`<html lang="${lang}"`))throw new Error(`Unable to set lang=${lang} in ${target}`);
      if(fixed!==source)await writeFile(target,fixed);
      checked++;
    }
  }
}

for(const lang of languages)await walk(join("out",lang),lang);
if(!checked)throw new Error("No exported HTML files were checked");
console.log(`Verified HTML lang on ${checked} exported pages.`);
