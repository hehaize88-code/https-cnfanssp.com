// A horizontal difference hash, with rows and nibbles written left to right.
export type ImageSignature = {hash:string; sha:string};
async function contentDigest(file: File): Promise<string> {
  try {
    const bytes = new Uint8Array(await crypto.subtle.digest("SHA-256", await file.arrayBuffer()));
    return [...bytes].map(byte => byte.toString(16).padStart(2,"0")).join("");
  } catch { return ""; }
}
export async function hashImage(file: File): Promise<ImageSignature> {
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = new Image();
    image.src = objectUrl;
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = 9;
    canvas.height = 8;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    if (!context) throw new Error("Canvas unavailable");
    context.fillStyle = "#fff";
    context.fillRect(0, 0, 9, 8);
    context.imageSmoothingQuality = "high";
    context.drawImage(image, 0, 0, 9, 8);
    const pixels = context.getImageData(0, 0, 9, 8).data;
    const gray = (offset: number) => 299 * pixels[offset] + 587 * pixels[offset + 1] + 114 * pixels[offset + 2];
    let result = "";
    for (let y = 0; y < 8; y++) {
      let bits = 0;
      for (let x = 0; x < 8; x++) {
        const offset = 4 * (y * 9 + x);
        bits = (bits << 1) | Number(gray(offset) > gray(offset + 4));
        if (x % 4 === 3) { result += bits.toString(16); bits = 0; }
      }
    }
    return {hash:result, sha:await contentDigest(file)};
  } finally { URL.revokeObjectURL(objectUrl); }
}
