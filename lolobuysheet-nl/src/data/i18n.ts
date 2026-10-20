const files=import.meta.glob('./locales/*.json',{eager:true,import:'default'});
export const languages=['en','de','es','fr','it','pl','pt','ro','sv','nl','da','fi','el','cs','hu','bg','sk','hr','sl','lt','lv','et','ga','mt'] as const;
export type Language=typeof languages[number];
export const nativeNames:Record<Language,string>={en:'English',de:'Deutsch',es:'Español',fr:'Français',it:'Italiano',pl:'Polski',pt:'Português',ro:'Română',sv:'Svenska',nl:'Nederlands',da:'Dansk',fi:'Suomi',el:'Ελληνικά',cs:'Čeština',hu:'Magyar',bg:'Български',sk:'Slovenčina',hr:'Hrvatski',sl:'Slovenščina',lt:'Lietuvių',lv:'Latviešu',et:'Eesti',ga:'Gaeilge',mt:'Malti'};
export const content=Object.fromEntries(languages.map(l=>[l,files[`./locales/${l}.json`]])) as Record<Language,any>;
export const text=Object.fromEntries(languages.map(l=>[l,content[l]?.ui])) as Record<Language,any>;
export function pathFor(lang:Language,path=''){const prefix=lang==='en'?'':`/${lang}`;const legacy=path.match(/^product\/(\d+)$/);return legacy?`${prefix}/product/?id=${legacy[1]}`:`${prefix}/${path}${path?'/':''}`;}
