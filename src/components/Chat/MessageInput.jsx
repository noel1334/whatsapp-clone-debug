import "./MessageInput.css";
import { IoMdSend } from "react-icons/io"; // Example: Ionicons Send icon
import { IoMdAttach } from "react-icons/io"; // Example: Ionicons Attach icon

const MessageInput = () => {
  return (
    <div className="message-input">
      <button aria-label="attach" className="icon-button">
        <IoMdAttach />
      </button>
      <input type="text" placeholder="Type a message" />
      <button aria-label="send" className="icon-button">
        <IoMdSend />
      </button>
    </div>
  );
};

export default MessageInput;
