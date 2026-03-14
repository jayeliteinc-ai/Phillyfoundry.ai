import { runAI } from "../lib/aiClient";

export async function generateBlog(topic) {
  return runAI(`Write a professional blog post about ${topic}`);
}
