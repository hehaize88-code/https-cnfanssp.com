"use client";
import { useState } from "react";
import { t,type Lang } from "../i18n";
import { chargeableWeight } from "../shipping-math";
const weightFields=[['actual','Actual weight (kg)','3'],['length','Length (cm)','40'],['width','Width (cm)','30'],['height','Height (cm)','25'],['divisor','Route divisor','5000'],['increment','Billing increment (kg)','0.5']];
const costFields=[['freight','Quoted freight (USD)'],['items','Items (USD)'],['domestic','Domestic delivery (USD)'],['services','Services and payment fees (USD)'],['packing','Packing and insurance (USD)'],['import','Destination charges (USD)']];
export default function ShippingCalculator({lang}:{lang:Lang}) {
  const [result,setResult]=useState<{volume:number;billed:number;total:number;complete:boolean;hasCost:boolean}|null>(null);
  const [error,setError]=useState(false);
  const number=(value:number)=>new Intl.NumberFormat(lang,{maximumFractionDigits:2}).format(value);
  const currency=(value:number)=>new Intl.NumberFormat(lang,{style:"currency",currency:"USD"}).format(value);
  return <section id="shipping-calculator" className="shipping-calculator"><p className="section-kicker">{t("Use your own quote",lang)}</p><h2>{t("Shipping cost worksheet",lang)}</h2><p>{t("The dimensions below are an example. Enter your route’s actual rules and quote. This tool does not retrieve Hipobuy rates or calculate taxes.",lang)}</p>
    <form onChange={()=>{setResult(null);setError(false);}} onSubmit={event=>{
      event.preventDefault();
      const form=new FormData(event.currentTarget);
      try {
        const values=weightFields.map(([key])=>Number(form.get(key)));
        const weight=chargeableWeight(values[0],values[1],values[2],values[3],values[4],values[5],form.get('mode')==='higher');
        const entries=costFields.map(([key])=>String(form.get(key)||'').trim());
        if(entries.some(value=>value!==''&&(!Number.isFinite(Number(value))||Number(value)<0)))throw new Error('Invalid costs');
        setResult({...weight,total:entries.reduce((sum,value)=>sum+(value===''?0:Number(value)),0),complete:entries.every(value=>value!==''),hasCost:entries.some(value=>value!=='')});
        (window as Window & {gtag?:(command:string,name:string,parameters:Record<string,string>)=>void}).gtag?.('event','shipping_estimate',{language:lang,source_page:window.location.pathname});
      } catch {setError(true);}
    }}><div className="calculator-fields">{weightFields.map(([key,label,value])=><label key={key}>{t(label,lang)}<input name={key} type="number" min="0.0001" step="any" required defaultValue={value} inputMode="decimal"/></label>)}<label className="calculator-wide">{t("Weight rule",lang)}<select name="mode" defaultValue="higher"><option value="higher">{t("Higher of actual and volumetric",lang)}</option><option value="actual">{t("Actual weight only",lang)}</option></select></label></div>
      <p className="calculator-help">{t("Use the full freight quote for tiered rates. Enter each charge once, convert amounts to USD, and leave unknown costs blank. Enter 0 only when a cost is confirmed as zero or already included.",lang)}</p>
      <div className="calculator-fields">{costFields.map(([key,label])=><label key={key}>{t(label,lang)}<input name={key} type="number" min="0" step="0.01" placeholder={t("Unknown",lang)} inputMode="decimal"/></label>)}</div>
      <button type="submit" className="solid-button">{t("Calculate my estimate",lang)}</button>
    </form>
    {error?<p role="alert">{t("Enter valid positive measurements and non-negative costs.",lang)}</p>:null}
    <div aria-live="polite">{result?<div className="calculator-result"><p>{t("Volumetric weight",lang)}: <strong>{number(result.volume)} kg</strong></p><p>{t("Chargeable weight after rounding",lang)}: <strong>{number(result.billed)} kg</strong></p>{result.hasCost?<p>{t(result.complete?"Total of entered costs":"Known costs subtotal",lang)}: <strong>{currency(result.total)}</strong></p>:null}<p>{t(result.complete?"All cost fields are filled. Confirm included charges and current terms before payment.":"Partial estimate: blank costs are unknown, not zero. Complete the quote before treating this as a delivered total.",lang)}</p></div>:null}</div>
  </section>;
}
