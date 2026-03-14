const items = [
  "Marketing AI",
  "Sales AI",
  "SEO AI",
  "Lead Finder",
  "Customer Support",
  "Content Generator",
];

export default function DashboardGrid() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "20px",
      }}
    >
      {items.map((item) => (
        <div key={item} style={{ border: "1px solid #e2e8f0", borderRadius: "8px", padding: "20px" }}>
          {item}
        </div>
      ))}
    </div>
  );
}
