import { runAI } from "../lib/aiClient";

export async function leadFinder(city) {
  const prompt = `
Find small businesses in ${city}
that need help with marketing
`;

  return runAI(prompt);
}
