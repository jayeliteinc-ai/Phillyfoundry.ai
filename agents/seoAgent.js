export async function seoAgent(website) {
  const prompt = `Give an SEO optimization plan for ${website}.`;
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return res.json();
}
