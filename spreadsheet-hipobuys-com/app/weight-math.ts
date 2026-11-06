export type WeightRow = { grams: number; quantity: number };

/** User-supplied item weights, plus one explicit packing allowance. */
export function parcelWeight(rows: WeightRow[], packingGrams: number) {
  if (!rows.length || !Number.isFinite(packingGrams) || packingGrams < 0 || rows.some(row =>
    !Number.isFinite(row.grams) || row.grams <= 0 || !Number.isSafeInteger(row.quantity) || row.quantity <= 0
  )) throw new Error("Enter complete item weights and quantities");
  const itemsGrams = rows.reduce((sum, row) => sum + row.grams * row.quantity, 0);
  const packedKg = (itemsGrams + packingGrams) / 1000;
  if (!Number.isFinite(packedKg)) throw new Error("Weight exceeds the supported range");
  return { itemsGrams, packedKg };
}
