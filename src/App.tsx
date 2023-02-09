import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Chatbot from "react-chatbot-kit";
import config from "./chatbot/config";
import MessageParser from "./chatbot/MessageParser";
import ActionProvider from "./chatbot/ActionProvider";

import Header from "./elements/Header";
import Footer from "./elements/Footer";
import Home from "./elements/Home";
import Bio from "./components/Bio";

import "@picocss/pico/css/pico.min.css";
import "./styles/chatbot.css";
import "./App.css";

function App() {
  const [activateChatBot, setActivateChatBot] = useState(false);
  const [hideChatBot, setHideChatBot] = useState(false);
  const [chatCounter, setChatCounter] = useState(0);

  const handleClick = () => {
    setActivateChatBot(true);
    setChatCounter(() => chatCounter + 1);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    chatCounter % 2 === 0 ? setHideChatBot(false) : setHideChatBot(true);
  };

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          {/* <Route path='/*' element={() => <h2>Oops, something broke!</h2>}/> */}
        </Routes>
        <div
          className={`chat-container ${
            hideChatBot ? "chat-container-hidden" : ""
          }`}
        >
          {/* CHAT */}
          <div
            className="chat-button"
            onClick={handleClick}
            role="button"
            tabIndex={0}
          >
            Let&apos;s chat
          </div>
          {activateChatBot && (
            <Chatbot
              config={config}
              messageParser={MessageParser}
              actionProvider={ActionProvider}
              headerText={`Let's chat`}
            />
          )}
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
