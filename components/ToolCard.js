export default function ToolCard({ name }) {
  return (
    <article style={{ border: "1px solid #e2e8f0", borderRadius: "10px", padding: "16px" }}>
      <h3>{name}</h3>
      <p>Ready to run for your business workflows.</p>
    </article>
  );
}
