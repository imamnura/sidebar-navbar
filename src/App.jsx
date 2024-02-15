import { useState } from "react";
import Dashboard from "./component/Dashboard";
import Sidebar from "./component/Sidebar";
import "./index.css";

function App() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="flex">
      <Sidebar sidebarToggle={sidebarToggle} />
      <Dashboard
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />
    </div>
  );
}

export default App;
