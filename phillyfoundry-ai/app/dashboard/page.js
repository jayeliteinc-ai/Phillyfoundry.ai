import Sidebar from "../../components/Sidebar";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "40px", flex: 1 }}>
        <h1>PhillyFoundry Control Center</h1>
        <h2>AI Tools</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
          }}
        >
          <div>Blog Generator</div>
          <div>Email Writer</div>
          <div>Ad Generator</div>
          <div>SEO Optimizer</div>
          <div>Lead Finder</div>
          <div>Proposal Generator</div>
        </div>
      </div>
    </div>
  );
}
