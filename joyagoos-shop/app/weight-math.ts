export function calculateWeight(weight: number, length: number, width: number, height: number, divisor: number) {
  if (![weight, length, width, height, divisor].every(value => Number.isFinite(value) && value > 0)) return null;
  const volumetric = length * width * height / divisor;
  if (!Number.isFinite(volumetric)) return null;
  return {volumetric, comparison: Math.max(weight, volumetric)};
}
