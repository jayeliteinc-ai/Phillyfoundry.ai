import { runAI } from "../lib/aiClient";

export async function writeEmail(audience) {
  return runAI(`Write a conversion-focused email for ${audience}`);
}
