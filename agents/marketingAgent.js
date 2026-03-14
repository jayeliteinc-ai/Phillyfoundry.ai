export async function marketingAgent(business) {
  const prompt = `Create a marketing strategy for ${business} including social media, ads, and email.`;

  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  return res.json();
}
