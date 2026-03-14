import { runAI } from "../lib/aiClient";

export async function optimizeSEO(url) {
  return runAI(`Give SEO recommendations for ${url}`);
}
