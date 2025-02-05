// src/components/Layout/MainLayout.jsx
import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Chat from "../Chat/Chat";
import "./MainLayout.css";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main-layout">
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Chat toggleSidebar={toggleSidebar} />{" "}
      {/* Pass toggleSidebar as a prop */}
    </div>
  );
};

export default MainLayout;
