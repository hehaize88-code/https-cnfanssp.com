export function chargeableWeight(actual:number,length:number,width:number,height:number,divisor:number,increment:number,volumetric:boolean) {
  if (![actual,length,width,height,divisor,increment].every(Number.isFinite) || actual<=0 || divisor<=0 || increment<=0 || Math.min(length,width,height)<=0) throw new Error("Invalid parcel measurements");
  const volume=length*width*height/divisor;
  const basis=volumetric?Math.max(actual,volume):actual;
  // Avoid rounding exact increments upward because of binary floating point noise.
  const billed=Math.ceil(basis/increment-1e-9)*increment;
  return {volume,billed};
}
