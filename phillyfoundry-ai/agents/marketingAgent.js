import { runAI } from "../lib/aiClient";

export async function marketingAgent(business) {
  return runAI(`Create a marketing strategy for ${business} including social media, ads, and email.`);
}
