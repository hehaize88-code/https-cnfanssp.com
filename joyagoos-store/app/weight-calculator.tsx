"use client";
import { useState, type FormEvent } from "react";
import type { SiteLanguage } from "./i18n";
import ui from "./content/november/ui.json";

export function WeightCalculator({language}:{language:SiteLanguage}) {
  const t=ui[language];
  const [result,setResult]=useState<{volume:number;chargeable:number}|null>(null);
  const [error,setError]=useState(false);
  function calculate(event:FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const values=["actual","length","width","height","divisor"].map(key=>Number(data.get(key)));
    if(values.some(value=>!Number.isFinite(value)||value<=0)){setError(true);setResult(null);return;}
    const [actual,length,width,height,divisor]=values;
    const volume=length*width*height/divisor;
    if(!Number.isFinite(volume)){setError(true);setResult(null);return;}
    setError(false);setResult({volume,chargeable:Math.max(actual,volume)});
  }
  const fields=[['actual',t.actual,3],['length',t.length,40],['width',t.width,30],['height',t.height,20],['divisor',t.divisor,6000]] as const;
  const format=(value:number)=>new Intl.NumberFormat(language,{maximumFractionDigits:3}).format(value);
  return <section className="weight-calculator" id="weight-calculator" aria-labelledby="weight-title">
    <h2 id="weight-title">{t.calculator}</h2><p id="weight-note">{t.note}</p>
    <form onSubmit={calculate} aria-describedby="weight-note"><div className="weight-fields">{fields.map(([key,label,value])=><label key={key} htmlFor={`weight-${key}`}>{label}<input id={`weight-${key}`} name={key} type="number" min="0.001" step="any" defaultValue={value} required inputMode="decimal"/></label>)}</div><button type="submit">{t.calculate}</button></form>
    <div className="weight-results" aria-live="polite">{error&&<p role="alert">{t.invalid}</p>}{result&&<><p>{t.volume}: <strong>{format(result.volume)} kg</strong></p><p>{t.chargeable}: <strong>{format(result.chargeable)} kg</strong></p></>}</div>
    <a href="https://joyagoo.com/estimation" target="_blank" rel="noreferrer">{t.estimate} ↗</a>
  </section>;
}
