export default function handler(req, res) {
  res.status(200).json({ leads: ["restaurants", "law firms", "salons", "gyms", "real estate"] });
}
