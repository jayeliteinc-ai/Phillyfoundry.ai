export async function salesAgent(offer) {
  const prompt = `Write a sales outreach message for this offer: ${offer}`;
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return res.json();
}
