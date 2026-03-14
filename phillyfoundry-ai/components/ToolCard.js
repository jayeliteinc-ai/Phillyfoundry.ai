export default function ToolCard({ name }) {
  return (
    <article style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: 16 }}>
      <h3>{name}</h3>
      <p>Launch this tool with one click from your workspace.</p>
    </article>
  );
}
