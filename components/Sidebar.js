export default function Sidebar() {
  return (
    <div
      style={{
        width: "240px",
        background: "#0f172a",
        color: "white",
        height: "100vh",
        padding: "20px",
      }}
    >
      <h2>PhillyFoundry</h2>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
        <li><a href="/dashboard" style={{ color: "white" }}>Dashboard</a></li>
        <li><a href="/tools" style={{ color: "white" }}>AI Tools</a></li>
        <li><a href="/agents" style={{ color: "white" }}>Agents</a></li>
        <li><a href="/workflows" style={{ color: "white" }}>Workflows</a></li>
      </ul>
    </div>
  );
}
