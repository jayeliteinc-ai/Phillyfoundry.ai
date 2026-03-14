import Sidebar from "../../components/Sidebar";
import AgentCard from "../../components/AgentCard";

const agents = [
  "Marketing Agent",
  "SEO Agent",
  "Content Agent",
  "Sales Agent",
  "Lead Generation Agent",
  "Customer Support Agent",
  "Analytics Agent",
  "Automation Manager",
];

export default function AgentsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", flex: 1 }}>
        <h1>AI Agents</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
          {agents.map((agent) => (
            <AgentCard key={agent} name={agent} />
          ))}
        </div>
      </main>
    </div>
  );
}
