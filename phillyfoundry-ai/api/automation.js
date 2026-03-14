export default function handler(req, res) {
  res.status(200).json({ jobs: ["leadFinder", "campaignRunner", "reportingBot"] });
}
