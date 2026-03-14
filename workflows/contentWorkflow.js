import { contentAgent } from "../agents/contentAgent";

export async function contentWorkflow(topic) {
  return contentAgent(topic);
}
