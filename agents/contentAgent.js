export async function contentAgent(topic) {
  const prompt = `Create a content outline about ${topic}.`;
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return res.json();
}
