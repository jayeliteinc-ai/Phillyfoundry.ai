import { marketingAgent } from "../agents/marketingAgent";

export async function marketingWorkflow(business) {
  return marketingAgent(business);
}
