"use client";

import { useId, useState } from "react";
import type { Lang } from "./site-data";
import { calculateParcelWeight } from "./weight-math";

const labels = {
  en: { title: "Compare actual and volumetric weight", intro: "Enter the packed parcel dimensions, then use the divisor and billing rule shown for your route.", length: "Length (cm)", width: "Width (cm)", height: "Height (cm)", actual: "Actual weight (kg)", divisor: "Route divisor", rule: "Route billing rule", greater: "Higher of actual / volumetric", actualOnly: "Actual weight only", volume: "Volumetric weight", result: "Weight before route rounding", note: "Illustration only, not a shipping quote. A route may apply rounding, minimum weight, size limits and other conditions. Final packed measurements and the current route terms control.", invalid: "Enter positive dimensions and weight." },
  de: { title: "Tatsächliches Gewicht und Volumengewicht vergleichen", intro: "Gib die Maße des gepackten Pakets ein und verwende Teiler und Abrechnungsregel deiner Route.", length: "Länge (cm)", width: "Breite (cm)", height: "Höhe (cm)", actual: "Tatsächliches Gewicht (kg)", divisor: "Routenteiler", rule: "Abrechnungsregel", greater: "Höheres Gewicht verwenden", actualOnly: "Nur tatsächliches Gewicht", volume: "Volumengewicht", result: "Gewicht vor Routenrundung", note: "Rechenbeispiel, kein Versandangebot. Rundung, Mindestgewicht, Größenlimits und weitere Bedingungen sind möglich. Maßgeblich sind das endgültig gepackte Paket und die aktuellen Routenregeln.", invalid: "Positive Maße und ein positives Gewicht eingeben." },
  es: { title: "Compara peso real y volumétrico", intro: "Introduce las medidas del paquete embalado y utiliza el divisor y la regla indicados para tu ruta.", length: "Largo (cm)", width: "Ancho (cm)", height: "Alto (cm)", actual: "Peso real (kg)", divisor: "Divisor de la ruta", rule: "Regla de facturación", greater: "Mayor entre real y volumétrico", actualOnly: "Solo peso real", volume: "Peso volumétrico", result: "Peso antes del redondeo", note: "Ejemplo de cálculo, no presupuesto de envío. Pueden aplicarse redondeos, mínimos, límites de tamaño y otras condiciones. Mandan las medidas finales y las reglas actuales de la ruta.", invalid: "Introduce medidas y peso positivos." },
  fr: { title: "Comparer poids réel et poids volumétrique", intro: "Saisissez les dimensions du colis emballé, puis le diviseur et la règle indiqués pour votre route.", length: "Longueur (cm)", width: "Largeur (cm)", height: "Hauteur (cm)", actual: "Poids réel (kg)", divisor: "Diviseur de route", rule: "Règle de facturation", greater: "Le plus élevé des deux poids", actualOnly: "Poids réel uniquement", volume: "Poids volumétrique", result: "Poids avant arrondi", note: "Exemple de calcul, pas un devis. Arrondis, poids minimal, limites dimensionnelles et autres conditions peuvent s’appliquer. Les mesures finales et les règles actuelles de la route font référence.", invalid: "Saisissez des dimensions et un poids positifs." },
  it: { title: "Confronta peso reale e volumetrico", intro: "Inserisci le dimensioni del pacco imballato e usa divisore e regola indicati per la tua rotta.", length: "Lunghezza (cm)", width: "Larghezza (cm)", height: "Altezza (cm)", actual: "Peso reale (kg)", divisor: "Divisore della rotta", rule: "Regola di fatturazione", greater: "Il maggiore tra i due pesi", actualOnly: "Solo peso reale", volume: "Peso volumetrico", result: "Peso prima dell’arrotondamento", note: "Esempio di calcolo, non preventivo. Possono applicarsi arrotondamenti, peso minimo, limiti dimensionali e altre condizioni. Valgono le misure finali e le regole attuali della rotta.", invalid: "Inserisci dimensioni e peso positivi." }
};
export default function WeightCalculator({ lang }: { lang: Lang }) {
  const t = labels[lang], id = useId();
  const [values, setValues] = useState({ length: "30", width: "20", height: "20", actual: "1.7" });
  const [divisor, setDivisor] = useState("6000");
  const [rule, setRule] = useState("greater");
  const result = calculateParcelWeight(Number(values.length), Number(values.width), Number(values.height), Number(values.actual), Number(divisor), rule === "actual");
  const format = (value: number) => new Intl.NumberFormat(lang, { maximumFractionDigits: 3 }).format(value);
  return <section className="weight-calculator" aria-labelledby={`${id}-title`}>
    <h2 id={`${id}-title`}>{t.title}</h2><p>{t.intro}</p>
    <div className="weight-inputs">
      {(["length", "width", "height", "actual"] as const).map(key => <label key={key} htmlFor={`${id}-${key}`}>{t[key]}<input id={`${id}-${key}`} type="number" inputMode="decimal" min="0.01" step="any" value={values[key]} onChange={event => setValues({ ...values, [key]: event.target.value })}/></label>)}
      <label htmlFor={`${id}-divisor`}>{t.divisor}<select id={`${id}-divisor`} value={divisor} onChange={event => setDivisor(event.target.value)}>{[5000, 6000, 7000, 8000].map(value => <option key={value} value={value}>{value}</option>)}</select></label>
      <label htmlFor={`${id}-rule`}>{t.rule}<select id={`${id}-rule`} value={rule} onChange={event => setRule(event.target.value)}><option value="greater">{t.greater}</option><option value="actual">{t.actualOnly}</option></select></label>
    </div>
    <div className="weight-result" role="status" aria-live="polite">{result ? <><span>{t.volume}<strong>{format(result.volume)} kg</strong></span><span>{t.result}<strong>{format(result.weight)} kg</strong></span></> : <p>{t.invalid}</p>}</div>
    <small>{t.note}</small>
  </section>;
}
