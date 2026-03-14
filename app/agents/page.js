import Sidebar from "../../components/Sidebar";
import AgentCard from "../../components/AgentCard";

const agents = [
  "Marketing Agent",
  "SEO Agent",
  "Support Agent",
  "Content Agent",
  "Sales Agent",
  "Automation Agent",
];

export default function AgentsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", flex: 1 }}>
        <h1>Business AI Agents</h1>
        <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {agents.map((agent) => (
            <AgentCard key={agent} name={agent} />
          ))}
        </div>
      </main>
    </div>
  );
}
