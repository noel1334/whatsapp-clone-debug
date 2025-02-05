// src/components/Chat/ChatTopbar.jsx
import React from "react";
import "./ChatTopbar.css";
import { GiHamburgerMenu } from "react-icons/gi"; // Import menu icon

const ChatTopbar = ({ toggleSidebar }) => {
  return (
    <div className="chat-topbar">
      <button
        aria-label="menu"
        className="toggle-menu-button"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu color="black" />
      </button>
      {/* Add other topbar content here */}
    </div>
  );
};

export default ChatTopbar;
