export default function handler(req, res) {
  res.json({ leads: ["restaurants", "law firms", "salons", "gyms", "real estate"] });
}
