import React, { useContext, useState } from "react";
import styled from "styled-components";
import { InnerLayout } from "../../styles/Layouts";
import send_icon from "../../img/send_icon.png";
import user_icon from "../../img/user_icon.png";
import gemini_icon from "../../img/gemini_icon.png";
import { AIContext } from "../../context/AIContext";

function MentalWellness() {
  const { onSent, showResult, loading, resultData, setInput, input, chatHistory } = useContext(AIContext);
  const [hasSentMessage, setHasSentMessage] = useState(false); // Track first message

  const handleSend = () => {
    if (input.trim()) {
      if (!hasSentMessage) setHasSentMessage(true); // Hide greeting after first message
      onSent(input);
      setInput(""); // Clear input field
    }
  };

  return (
    <MentStyled>
      <InnerLayout className="main">
        <div className="nav">
          <h2>Mind-Bot</h2>
        </div>

        <div className="main-container">
          
          {/* Greeting Section (Only visible before first message) */}
          {!hasSentMessage && (
            <div className="greet">
              <p><span>Hi there!</span></p>
              <p>How are you feeling today?</p>
            </div>
          )}

          <div className="chat-history">
            {chatHistory.map((message, index) => (
              <div key={index} className={message.sender === "user" ? "user-message" : "ai-message"}>
                <img src={message.sender === "user" ? user_icon : gemini_icon} alt="" />
                <p dangerouslySetInnerHTML={{ __html: message.text }}></p>
              </div>
            ))}

            {/* Show AI Response (Real-time Loading Effect) */}
            {showResult && loading && (
              <div className="ai-message">
                <img src={gemini_icon} alt="" />
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              </div>
            )}
          </div>

          <div className="main-bottom">
            <div className="search-box">
              <input 
                onChange={(e) => setInput(e.target.value)} 
                value={input} 
                type="text" 
                placeholder="Share your thoughts here"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <div>
                <img onClick={handleSend} src={send_icon} alt="" />
              </div>
            </div>
            <p className="bottom-info">
              Mind-Bot cannot replace professional help. If needed, it will guide you to mental health resources.
            </p>
          </div>
        </div>
      </InnerLayout>
    </MentStyled>
  );
}

const MentStyled = styled.nav`
  .nav h2 {
    color: darkviolet;
    font-size: 25px;
    font-weight: 605;
    margin: 11px 12px;
  }
  .main {
    flex: 1;
    min-height: 100vh;
    padding-bottom: 15vh;
    position: relative;
  }
  .main .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 22px;
    padding: 20px;
  }
  .main-container {
    max-width: 900px;
    margin: -15px 88px;
    color: black;
  }
   .main .greet {
    margin: 50px 0px;
    font-size: 40px;
    color: #928989;
    font-weight: 540;
    padding: 20px;
  }

  
  .chat-history {
    max-height: 50vh; 
    overflow-y: auto;
    padding: 10px;
    margin-bottom: 20px;
  }
  .chat-history::-webkit-scrollbar {
    display: none;
  }
  .user-message, .ai-message {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px;
  }
  .user-message {
    justify-content: flex-end;
    text-align: right;
  }
  .ai-message {
    justify-content: flex-start;
    text-align: left;
  }
  .user-message img, .ai-message img {
    width: 30px;
    border-radius: 50%;
  }
  .user-message p, .ai-message p {
    background: none;  /* Remove white box */
    color:#1A1A1A;      /* Ensure text is readable */
    padding: 8px 12px;
    border-radius: 10px;
  }
  .main-bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    max-width: 900px;
    padding: 0px 20px;
    margin: 70px -48px;
  }
  .search-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    background-color: #f0f4f9;
    margin: 10px 40px;
    padding: 7px 17px;
    border-radius: 50px;
  }
  .search-box img {
    width: 24px;
    cursor: pointer;
  }
  .search-box input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    padding: 9px;
    font-size: 18px;
  }
  .main .bottom-info {
    font-size: 13px;
    margin: 15px;
    text-align: center;
    font-weight: 300px;
  }
  .loader {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .loader hr {
    border-radius: 4px;
    border: none;
    background-color: #f6f7f8;
    background: linear-gradient(to right, #D5A8FF, #f6f7f8, #D5A8FF);
    background-size: 800px 50px;
    height: 20px;
    animation: loader 3s infinite linear;
  }
  @keyframes loader {
    0% {
      background-position: -800px 0px;
    }
    100% {
      background-position: 800px 0px;
    }
  }
`;

export default MentalWellness;
