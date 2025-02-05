// src/components/Chat/ChatTopbar.jsx
import React from "react";
import "./ChatTopbar.css";
import { GiHamburgerMenu } from "react-icons/gi"; // Import menu icon
import { useTheme } from "../../context/ThemeContext";

const ChatTopbar = ({ toggleSidebar }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className="chat-topbar">
      <h3>Chat</h3>
      <button
        aria-label="menu"
        className="toggle-menu-button"
        onClick={toggleSidebar}
      >
        <GiHamburgerMenu color={isDarkMode ? "white" : "black"} />
      </button>
    </div>
  );
};

export default ChatTopbar;
