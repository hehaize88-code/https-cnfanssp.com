export function WeightCalculator() {
  return <section className="weight-calculator" aria-label="Parcel weight calculator">
    <h2>Calculate parcel weight</h2><p>Compare scale weight with dimensional weight. Use the outside dimensions of the packed parcel and the divisor published for your selected route. This calculates weight, not a shipping quote.</p>
    <form data-weight-calculator>
      <div className="calculator-fields">
        <label>Length (cm)<input name="length" type="number" min="0.1" max="500" step="0.1" defaultValue="40" required /></label>
        <label>Width (cm)<input name="width" type="number" min="0.1" max="500" step="0.1" defaultValue="30" required /></label>
        <label>Height (cm)<input name="height" type="number" min="0.1" max="500" step="0.1" defaultValue="20" required /></label>
        <label>Scale weight (kg)<input name="weight" type="number" min="0.01" max="1000" step="0.01" defaultValue="3" required /></label>
        <label>Route divisor<input name="divisor" type="number" min="1" max="20000" step="1" defaultValue="6000" required /></label>
        <button className="button button-primary" type="submit">Calculate</button>
      </div>
      <div className="calculator-results" aria-live="polite"><p>Dimensional weight: <strong data-volume-result>4.00</strong> kg</p><p>Larger planning weight: <strong data-charge-result>4.00</strong> kg</p></div>
      <p className="calculator-note">Example: 40 × 30 × 20 ÷ 6,000 = 4 kg. Route rounding, minimum charges, eligibility and the carrier's final measurement can change billing.</p>
    </form>
  </section>;
}
