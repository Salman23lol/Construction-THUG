import React, { useState } from "react";
import { FaHome, FaChartBar, FaUser, FaCog, FaBars } from "react-icons/fa"; // Import icons
import Home from "./Panels/Home"; // Import different panels
import Analytics from "./Panels/Analytics"; // Import different panels
import UserList from "./Panels/UserList";

const sidebarItems = [
  { name: "Home", icon: FaHome, component: Home },
  { name: "Analytics", icon: FaChartBar, component: Analytics },
  { name: "Users", icon: FaUser, component: UserList },
  { name: "Settings", icon: FaCog, component: Home },
];

const Dashboard = () => {
  // State to track the active panel and sidebar visibility
  const [activePanel, setActivePanel] = useState("Home");
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar open state for mobile

  // Find the active panel component
  const ActiveComponent = sidebarItems.find(
    (item) => item.name === activePanel
  )?.component;

  return (
    <div className="w-full h-screen flex overflow-hidden relative">
      {/* Sidebar toggle button (visible on mobile) */}
      <div
        className="w-10 h-10 bg-orange-600 text-white rounded absolute top-4 left-4 flex md:hidden items-center justify-center cursor-pointer"
        onClick={() => setSidebarOpen(!isSidebarOpen)}
      >
        <FaBars size={18} />
      </div>

      <div
        className={`w-64 h-full bg-orange-600 text-white flex-col items-start justify-start absolute md:relative z-20 transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:flex md:translate-x-0`}
      >
        <h1 className="text-xl font-medium p-3 mt-3 mb-6">Admin | Dash Panel</h1>
        <div className="w-full h-auto overflow-y-auto flex flex-col gap-4 py-2 px-2">
          {sidebarItems.map((item) => (
            <div
              key={item.name}
              className={`w-full px-3 py-2 rounded bg-opacity-50 hover:bg-opacity-80 duration-200 cursor-pointer flex items-center justify-start ${
                activePanel === item.name ? "bg-orange-700" : "bg-orange-600"
              }`}
              onClick={() => {
                setActivePanel(item.name);
                setSidebarOpen(false); // Close sidebar on mobile after selection
              }}
            >
              <item.icon className="text-xl mr-3" />
              {item.name}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full py-8 px-2 overflow-y-scroll">
        {ActiveComponent ? <ActiveComponent /> : <Home />}
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)} 
        ></div>
      )}
    </div>
  );
};

export default Dashboard;
