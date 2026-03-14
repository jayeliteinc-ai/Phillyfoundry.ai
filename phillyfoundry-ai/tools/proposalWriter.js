import { runAI } from "../lib/aiClient";

export async function writeProposal(client) {
  return runAI(`Write a client proposal for ${client}`);
}
