export default function AgentCard({ name }) {
  return (
    <article style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: 16 }}>
      <h3>{name}</h3>
      <p>Automates client-facing business tasks.</p>
    </article>
  );
}
