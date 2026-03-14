const cards = [
  "Blog Generator",
  "Email Writer",
  "Ad Generator",
  "SEO Optimizer",
  "Lead Finder",
  "Proposal Generator",
];

export default function DashboardGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "20px" }}>
      {cards.map((card) => (
        <div key={card} style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: 20 }}>
          {card}
        </div>
      ))}
    </div>
  );
}
