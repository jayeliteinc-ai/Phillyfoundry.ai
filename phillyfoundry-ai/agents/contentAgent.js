import { runAI } from "../lib/aiClient";

export async function contentAgent(topic) {
  return runAI(`Create a content calendar for ${topic}.`);
}
