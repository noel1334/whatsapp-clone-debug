import React from "react";
import SidebarHeader from "./SidebarHeader";
import SearchBar from "./SearchBar";
import ChatListItem from "./ChatListItem";
import "./Sidebar.css";

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <SidebarHeader />
      <SearchBar />
      <div className="chat-list">
        {/* Sample Chat List Items */}
        <ChatListItem
          name="John Doe"
          lastMessage="Hey there!"
          timestamp="12/31/2023 23:59"
        />
        <ChatListItem
          name="Jane Smith"
          lastMessage="Okay, see you later."
          timestamp="12/31/2023 23:59"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
