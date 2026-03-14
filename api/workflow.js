export default function handler(req, res) {
  res.json({ workflows: ["marketingWorkflow", "leadWorkflow", "contentWorkflow"] });
}
