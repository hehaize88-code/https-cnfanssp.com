"use client";
import { useState } from "react";
import { t, localPath, type Lang } from "../i18n";
import { parcelWeight } from "../weight-math";

export default function WeightEstimator({lang}:{lang:Lang}) {
  const [rows,setRows]=useState([0,1]);
  const [nextId,setNextId]=useState(2);
  const [result,setResult]=useState<{itemsGrams:number;packedKg:number}|null>(null);
  const [error,setError]=useState(false);
  const clear=()=>{setResult(null);setError(false);};
  const number=(value:number)=>new Intl.NumberFormat(lang,{maximumFractionDigits:3}).format(value);
  return <section className="shipping-calculator weight-estimator" id="weight-estimator">
    <p className="section-kicker">{t("Plan with your own measurements",lang)}</p>
    <h2>{t("Hipobuy weight estimator",lang)}</h2>
    <p>{t("Enter the weight of one item in grams and its quantity. Add packaging once. These are your estimates, not warehouse measurements or a shipping quote.",lang)}</p>
    <form onChange={clear} onSubmit={event=>{
      event.preventDefault();
      const form=new FormData(event.currentTarget);
      try {
        const packing=String(form.get('packing')??'').trim();
        if(!packing)throw new Error('Unknown packing weight');
        setResult(parcelWeight(rows.map(id=>({grams:Number(form.get(`grams-${id}`)),quantity:Number(form.get(`quantity-${id}`))})),Number(packing)));
        setError(false);
        (window as Window & {gtag?:(command:string,name:string,parameters:Record<string,string>)=>void}).gtag?.('event','weight_estimate',{language:lang,source_page:window.location.pathname});
      } catch {setResult(null);setError(true);}
    }}>
      {rows.map((id,index)=><fieldset key={id} className="weight-row"><legend>{t("Item",lang)} {index+1}</legend><div className="calculator-fields">
        <label>{t("Item reference (optional)",lang)}<input name={`reference-${id}`} maxLength={80} autoComplete="off"/></label>
        <label>{t("Weight per item (g)",lang)}<input name={`grams-${id}`} type="number" min="0.001" step="any" required inputMode="decimal"/></label>
        <label>{t("Quantity",lang)}<input name={`quantity-${id}`} type="number" min="1" step="1" defaultValue="1" required inputMode="numeric"/></label>
      </div><button type="button" className="text-button" disabled={rows.length===1} onClick={()=>{setRows(rows.filter(row=>row!==id));clear();}} aria-label={`${t("Remove item",lang)} ${index+1}`}>{t("Remove item",lang)}</button></fieldset>)}
      <button type="button" className="text-button" disabled={rows.length>=30} onClick={()=>{setRows([...rows,nextId]);setNextId(nextId+1);clear();}}>{t("Add item",lang)}</button>
      <div className="calculator-fields"><label className="calculator-wide">{t("Additional packaging (g)",lang)}<input name="packing" type="number" min="0" step="any" required placeholder={t("Unknown",lang)} inputMode="decimal"/></label></div>
      <p className="calculator-help">{t("Include only packaging not already counted in the item weights. Enter 0 only if no additional weight is needed. Item references stay in this form and are not sent to analytics.",lang)}</p>
      <button type="submit" className="solid-button">{t("Estimate packed weight",lang)}</button>
    </form>
    {error?<p role="alert">{t("Enter a positive weight, a whole quantity and a non-negative packaging allowance.",lang)}</p>:null}
    <div aria-live="polite">{result?<div className="calculator-result"><p>{t("Items subtotal",lang)}: <strong>{number(result.itemsGrams)} g</strong></p><p>{t("Estimated packed weight",lang)}: <strong>{number(result.packedKg)} kg</strong></p><p>{t("This is scale weight only. Parcel dimensions, route rules and rounding may produce a higher chargeable weight.",lang)}</p><a href={localPath('/shipping',lang)+'#shipping-calculator'}>{t("Compare chargeable weight and shipping costs →",lang)}</a></div>:null}</div>
  </section>;
}
