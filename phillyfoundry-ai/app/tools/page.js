import Sidebar from "../../components/Sidebar";
import ToolCard from "../../components/ToolCard";

const tools = [
  "Blog Generator",
  "Email Writer",
  "Ad Generator",
  "SEO Optimizer",
  "Keyword Finder",
  "Proposal Writer",
];

export default function ToolsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", flex: 1 }}>
        <h1>AI Tools Marketplace</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }}>
          {tools.map((tool) => (
            <ToolCard key={tool} name={tool} />
          ))}
        </div>
      </main>
    </div>
  );
}
