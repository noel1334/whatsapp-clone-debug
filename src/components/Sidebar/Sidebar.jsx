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
          timestamp="Yesterday"
        />
        <ChatListItem
          name="Jane Smith"
          lastMessage="Okay, see you later."
          timestamp="2 days ago"
        />
        {/* Add more ChatListItems here */}
      </div>
    </aside>
  );
};

export default Sidebar;
