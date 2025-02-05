import "./Message.css";

const Message = ({ text, timestamp, isOutgoing }) => {
  return (
    <div className={`message ${isOutgoing ? "outgoing" : "incoming"}`}>
      <div className="message-content">
        <p>{text}</p>
        <span className="timestamp">{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
