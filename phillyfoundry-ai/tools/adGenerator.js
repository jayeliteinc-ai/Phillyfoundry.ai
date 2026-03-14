import { runAI } from "../lib/aiClient";

export async function generateAd(product) {
  return runAI(`Create 3 ad variants for ${product}`);
}
