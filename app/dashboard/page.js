import Sidebar from "../../components/Sidebar";
import DashboardGrid from "../../components/DashboardGrid";

export default function Dashboard() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ padding: "40px", flex: 1 }}>
        <h1>PhillyFoundry Control Center</h1>
        <h2>AI Agents</h2>
        <DashboardGrid />
      </div>
    </div>
  );
}
