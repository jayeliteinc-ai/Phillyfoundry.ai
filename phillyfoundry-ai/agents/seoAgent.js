import { runAI } from "../lib/aiClient";

export async function seoAgent(website) {
  return runAI(`Give an SEO optimization plan for ${website}.`);
}
