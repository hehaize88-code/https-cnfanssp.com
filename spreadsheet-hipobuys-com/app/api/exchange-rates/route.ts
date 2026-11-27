import fallback from "../../catalog/exchange-rates.json";

export async function GET() {
  let data = fallback;
  let fresh = false;
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/CNY", { signal: AbortSignal.timeout(6000) });
    if (!response.ok) throw new Error("Exchange rates unavailable");
    const value = await response.json();
    if (value.result === "success" && value.base_code === "CNY" && value.time_last_update_unix >= fallback.updated) {
      const rates = Object.fromEntries(Object.keys(fallback.rates).map(code => [code, value.rates[code]]));
      if (Object.values(rates).every(rate => typeof rate === "number" && Number.isFinite(rate) && rate > 0)) {
        data = { updated: value.time_last_update_unix, rates: rates as typeof fallback.rates };
        fresh = true;
      }
    }
  } catch { /* The response includes the date of the last known exchange table. */ }
  return Response.json(data, { headers: { "cache-control": fresh ? "public, max-age=3600, s-maxage=21600" : "public, max-age=120" } });
}
