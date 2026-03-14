export default function Sidebar() {
  return (
    <aside
      style={{
        width: "240px",
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>PhillyFoundry</h2>
      <ul style={{ listStyle: "none", padding: 0, lineHeight: 1.8 }}>
        <li><a href="/dashboard" style={{ color: "white" }}>Dashboard</a></li>
        <li><a href="/tools" style={{ color: "white" }}>AI Tools</a></li>
        <li><a href="/agents" style={{ color: "white" }}>Agents</a></li>
        <li><a href="/settings" style={{ color: "white" }}>Settings</a></li>
      </ul>
    </aside>
  );
}
