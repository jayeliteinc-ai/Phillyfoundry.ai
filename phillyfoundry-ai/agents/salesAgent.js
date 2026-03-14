import { runAI } from "../lib/aiClient";

export async function salesAgent(offer) {
  return runAI(`Write a sales outreach sequence for this offer: ${offer}.`);
}
