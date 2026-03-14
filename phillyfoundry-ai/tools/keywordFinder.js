import { runAI } from "../lib/aiClient";

export async function findKeywords(topic) {
  return runAI(`List high-intent SEO keywords for ${topic}`);
}
