export async function supportAgent(ticketText) {
  const prompt = `Draft a helpful support reply for: ${ticketText}`;
  const res = await fetch("/api/ai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  return res.json();
}
