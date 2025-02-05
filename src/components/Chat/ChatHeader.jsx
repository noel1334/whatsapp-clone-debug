import React from "react";
import "./ChatHeader.css";
import { IoMdMore } from "react-icons/io";

const ChatHeader = () => {
  return (
    <div className="chat-header">
      <div className="user-info">
        <img src="/noavatar.jpeg" alt="Contact Avatar" className="avatar" />
        <div className="user-details">
          <div className="name">John Doe</div>
          <div className="status">Online</div>
        </div>
      </div>
      <div className="header-actions">
        <button aria-label="more" className="more-options-button">
          <IoMdMore />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
