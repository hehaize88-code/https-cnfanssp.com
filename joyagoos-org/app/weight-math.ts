export function calculateParcelWeight(length: number, width: number, height: number, actual: number, divisor: number, actualOnly = false) {
  if (![length, width, height, actual, divisor].every(value => Number.isFinite(value) && value > 0)) return null;
  const volume = length * width * height / divisor;
  if (!Number.isFinite(volume)) return null;
  return { volume, weight: actualOnly ? actual : Math.max(actual, volume) };
}
