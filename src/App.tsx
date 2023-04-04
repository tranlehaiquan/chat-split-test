import { useState } from "react";
import "./App.css";
import splitMessage from "./splitMessage";

function App() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleEnter = (message: string) => {
    setMessages(splitMessage(message));
  };

  return (
    <div className="App">
      {/* textarea for input message */}
      <textarea
        cols={50}
        rows={10}
        className="border"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleEnter(e.currentTarget.value);
          }
        }}
      />

      {/* display messages */}
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
    </div>
  );
}

export default App;
