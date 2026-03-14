import { runAI } from "../lib/aiClient";

export async function supportAgent(ticket) {
  return runAI(`Draft a customer support response for: ${ticket}`);
}
