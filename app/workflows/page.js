import Sidebar from "../../components/Sidebar";

export default function WorkflowsPage() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ padding: "40px", flex: 1 }}>
        <h1>Automation Workflows</h1>
        <ul>
          <li>Marketing Workflow</li>
          <li>Lead Workflow</li>
          <li>Content Workflow</li>
        </ul>
      </main>
    </div>
  );
}
