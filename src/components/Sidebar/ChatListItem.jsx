import React from "react";
import "./ChatListItem.css";
import { formatDate } from "../../utils/dateFormatting";

const ChatListItem = ({ name, lastMessage, timestamp }) => {
  const formattedTimestamp = formatDate(timestamp);

  return (
    <div className="chat-list-item">
      <img src="/noavatar.jpeg" alt="Contact Avatar" className="avatar" />
      <div className="chat-details">
        <div className="chat-name">{name}</div>
        <div className="last-message">{lastMessage}</div>
      </div>
      <div className="timestamp">{formattedTimestamp}</div>
    </div>
  );
};

export default ChatListItem;
