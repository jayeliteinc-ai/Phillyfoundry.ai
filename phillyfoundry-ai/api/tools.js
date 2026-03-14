export default function handler(req, res) {
  res.status(200).json({
    tools: ["blogGenerator", "emailWriter", "adGenerator", "seoOptimizer", "keywordFinder", "proposalWriter"],
  });
}
