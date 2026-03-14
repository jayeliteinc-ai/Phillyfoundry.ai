import Sidebar from "../../components/Sidebar";
import ToolCard from "../../components/ToolCard";

const tools = [
  "AI Ad Generator",
  "Blog Generator",
  "SEO Optimizer",
  "Cold Email Writer",
  "Proposal Writer",
];

export default function ToolsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", flex: 1 }}>
        <h1>AI Tools Marketplace</h1>
        <div style={{ display: "grid", gap: "16px", gridTemplateColumns: "repeat(3, 1fr)" }}>
          {tools.map((tool) => (
            <ToolCard key={tool} name={tool} />
          ))}
        </div>
      </main>
    </div>
  );
}
