// src/components/Chat/Chat.jsx
import React from "react";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import MessageInput from "./MessageInput";
import "./Chat.css";
import ChatTopbar from "./ChatTopbar";

const Chat = ({ toggleSidebar }) => {
  return (
    <div className="chat">
      <ChatTopbar toggleSidebar={toggleSidebar} />
      <ChatHeader />
      <div className="chat-body">
        {/* Sample Messages */}
        <Message text="Hello!" timestamp="10:00 AM" isOutgoing={false} />
        <Message text="Hi there!" timestamp="10:01 AM" isOutgoing={true} />
        {/* More messages here */}
      </div>
      <MessageInput />
    </div>
  );
};

export default Chat;
