"use client";
import {useState, type FormEvent} from "react";
import type {Lang} from "./site-data";
import {calculateWeight} from "./weight-math";

const labels = {
  en:{title:"Compare packed weight and volume",intro:"Illustrative starting values. Enter your own measurements and the divisor shown by your chosen route.",weight:"Packed weight (kg)",length:"Length (cm)",width:"Width (cm)",height:"Height (cm)",divisor:"Route divisor",button:"Calculate weights",volume:"Volumetric weight",comparison:"Larger weight, before rounding",note:"This calculates weights, not a shipping price. It applies only when the route uses the larger value. Check its divisor, billing increments, eligibility and current quote.",error:"Enter a positive number in every field."},
  de:{title:"Paketgewicht und Volumen vergleichen",intro:"Beispielwerte zum Start. Trage eigene Maße und den Divisor deiner gewählten Route ein.",weight:"Paketgewicht (kg)",length:"Länge (cm)",width:"Breite (cm)",height:"Höhe (cm)",divisor:"Divisor der Route",button:"Gewichte berechnen",volume:"Volumengewicht",comparison:"Größerer Wert vor Rundung",note:"Berechnet Gewichte, keinen Versandpreis. Gilt nur für Routen, die den größeren Wert nutzen. Divisor, Abrechnungsstufen, Eignung und aktuelles Angebot prüfen.",error:"In jedes Feld eine positive Zahl eingeben."},
  es:{title:"Compara peso embalado y volumen",intro:"Valores iniciales ilustrativos. Introduce tus medidas y el divisor indicado por la ruta elegida.",weight:"Peso embalado (kg)",length:"Largo (cm)",width:"Ancho (cm)",height:"Alto (cm)",divisor:"Divisor de la ruta",button:"Calcular pesos",volume:"Peso volumétrico",comparison:"Mayor peso antes de redondear",note:"Calcula pesos, no el precio del envío. Solo aplica si la ruta usa el valor mayor. Consulta divisor, escalones, elegibilidad y cotización actual.",error:"Introduce un número positivo en cada campo."},
  fr:{title:"Comparer poids emballé et volume",intro:"Valeurs de départ illustratives. Saisissez vos mesures et le diviseur indiqué par la ligne choisie.",weight:"Poids emballé (kg)",length:"Longueur (cm)",width:"Largeur (cm)",height:"Hauteur (cm)",divisor:"Diviseur de la ligne",button:"Calculer les poids",volume:"Poids volumétrique",comparison:"Poids le plus élevé avant arrondi",note:"Calcule des poids, pas un prix de livraison. Valable seulement si la ligne retient la valeur supérieure. Vérifiez diviseur, paliers, admissibilité et devis actuel.",error:"Saisissez un nombre positif dans chaque champ."},
  it:{title:"Confronta peso imballato e volume",intro:"Valori iniziali illustrativi. Inserisci misure e divisore indicato dalla linea scelta.",weight:"Peso imballato (kg)",length:"Lunghezza (cm)",width:"Larghezza (cm)",height:"Altezza (cm)",divisor:"Divisore della linea",button:"Calcola i pesi",volume:"Peso volumetrico",comparison:"Peso maggiore prima dell’arrotondamento",note:"Calcola pesi, non un prezzo di spedizione. Vale solo se la linea usa il valore maggiore. Controlla divisore, scaglioni, ammissibilità e preventivo attuale.",error:"Inserisci un numero positivo in ogni campo."}
};

export function WeightComparison({lang}:{lang:Lang}) {
  const t=labels[lang];
  const [result,setResult]=useState<ReturnType<typeof calculateWeight>>(null);
  const [error,setError]=useState(false);
  const format=new Intl.NumberFormat(lang,{maximumFractionDigits:2,minimumFractionDigits:2});
  function submit(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const values=new FormData(event.currentTarget);
    const next=calculateWeight(...["weight","length","width","height","divisor"].map(key=>Number(values.get(key))) as [number,number,number,number,number]);
    setResult(next);setError(!next);
    if(next) window.gtag?.("event","shipping_weight_calculate",{page_language:lang,source_page:window.location.pathname});
  }
  return <section className="weight-tool" id="weight-comparison" aria-labelledby="weight-tool-title">
    <h2 id="weight-tool-title">{t.title}</h2><p>{t.intro}</p>
    <form onSubmit={submit} onChange={()=>{setResult(null);setError(false);}}>
      <div className="weight-fields">{([["weight",2.8],["length",35],["width",25],["height",20],["divisor",6000]] as const).map(([name,value])=><label key={name} htmlFor={`weight-${name}`}>{t[name]}<input required id={`weight-${name}`} name={name} type="number" min="0.01" step="any" defaultValue={value} inputMode="decimal"/></label>)}</div>
      <button type="submit">{t.button} →</button>
    </form>
    <div className="weight-result" aria-live="polite" aria-atomic="true">{error&&<p>{t.error}</p>}{result&&<dl><div><dt>{t.volume}</dt><dd>{format.format(result.volumetric)} kg</dd></div><div><dt>{t.comparison}</dt><dd>{format.format(result.comparison)} kg</dd></div></dl>}</div>
    <p className="weight-note">{t.note}</p>
  </section>;
}
