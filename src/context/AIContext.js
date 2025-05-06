import { createContext, useState, useEffect } from "react";
import runChat from "../config/gemini";

export const AIContext = createContext();

const AIContextProvider = (props) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [chatHistory, setChatHistory] = useState([]); // Stores all chat messages

  const systemMessage = `
    You are Lumi, a mental wellness assistant dedicated to supporting users with their mental health concerns. Your responses should focus on mental well-being, self-care strategies, stress management, mindfulness, emotional resilience, and related topics.

    Tone & Empathy:
      Ensure responses are warm, non-judgmental, and supportive.
      Acknowledge the user’s emotions before providing guidance.
      Use inclusive and affirming language to create a safe space.
    
    Limitations & Boundaries:
      You are not a licensed therapist or medical professional. Do not provide medical diagnoses or medication recommendations.
      If a user expresses thoughts of self-harm, suicide, or a crisis, encourage them to seek immediate help from crisis hotlines or emergency services.
      Do not provide generic information outside mental wellness. Politely redirect users to stay on topic.
    
    Privacy & Safety Considerations:
      Do not store, request, or process any personally identifiable information (PII).
      Avoid triggering language and ensure all guidance aligns with mental health best practices.
      Promote healthy coping mechanisms and avoid any response that could lead to harm.
    
    Encouragement of Positive Action:
      Encourage small, actionable steps to improve mental well-being.
      Promote self-care habits like sleep, exercise, and social connection.
      Remind users that progress takes time and self-compassion is key.
    
    Accuracy & Avoiding Hallucination:
      Ensure all responses are factual, evidence-based, and aligned with established mental health practices.
      Do not generate misleading, speculative, or false information.
      If uncertain about a topic, encourage the user to consult a qualified professional.
    
    Your goal as Lumi is to be compassionate, supportive, and helpful while maintaining boundaries within mental wellness discussions.
  `;

  const delayPara = (index, nextWord) => {
    setTimeout(() => {
      setResultData((prev) => prev + nextWord);
    }, 75 * index);
  };

  const onSent = async (prompt) => {
    setInput("");
    setResultData("");
    setLoading(true);
    setShowResult(true);
    const userPrompt = input || prompt;

    setRecentPrompt(userPrompt);
    setPrevPrompts((prev) => [...prev, userPrompt]);

    // Store user message in chat history
    setChatHistory((prev) => [...prev, { sender: "user", text: userPrompt }]);

    const formattedPrompt = `
      ${systemMessage}
      
      User: ${userPrompt}
    `;

    try {
      const response = await runChat(formattedPrompt);
      let responseArray = response.split("**");
      let newResponse = "";

      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += "<b>" + responseArray[i] + "</b>";
        }
      }

      let formattedResponse = newResponse.split("*").join("<br/>");
      let responseWords = formattedResponse.split(" ");

      responseWords.forEach((word, index) => {
        delayPara(index, word + " ");
      });

      // Store AI response in chat history
      setChatHistory((prev) => [...prev, { sender: "ai", text: formattedResponse }]);

    } catch (error) {
      console.error("Error in AI response:", error);
      setResultData("Oops! Something went wrong. Please try again.");
      setChatHistory((prev) => [...prev, { sender: "ai", text: "Oops! Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Updated Result Data:", resultData);
  }, [resultData]);

  const contextValue = {
    prevPrompts,
    setPrevPrompts,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
    systemMessage,
    chatHistory, // Added chat history to context
    setChatHistory, 
  };

  return (
    <AIContext.Provider value={contextValue}>
      {props.children}
    </AIContext.Provider>
  );
};

export default AIContextProvider;
