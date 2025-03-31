// import { useState } from 'react'
// import axios from 'axios'
// import React from 'react';

// const ChatAi = () => {
//     const [question, setQuestion] = useState("");
//     const [answer, setAnswer] = useState("");
  
//    async function genAns(){
//     setAnswer("Loading...");
//       const response = await axios({
//         url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAugV8wP4aMXxojHYckOlvBSJhh5hFe9MI",
//         method: "POST",
//         data:{
//           contents :  [{
//             parts:[{text: question}]
//             },
//           ],
//         }
//       });
//      setAnswer(response["data"]["candidates"][0]["content"]["parts"][0]["text"]
//       );
//     }
//     return (
//      <div>
//   {/* component */}
//   <div className="fixed bottom-0 right-0 mb-4 mr-4">
//   <h1 className='bg-red-300'>CHAT AI</h1>
//   <pre>{answer}</pre>
//      <textarea className='border rounded w-full h-10' value={question} onChange={(e) => setQuestion(e.target.value)} cols="30" rows="10" placeholder='Please Ask me question'  ></textarea>
//      <button onClick={genAns}>Generate Answer</button>
//      <p>{question}</p>
//      {/* <pre>{answer}</pre> */}
// </div>
// </div>


//     );
// }

// export default ChatAi;

import { useState } from "react";
import axios from "axios";
import { HiChatAlt2 } from "react-icons/hi";
import { IoSend } from "react-icons/io5";

const ChatAi = function() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [messages, setMessages] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function genAns() {
    if (!question.trim()) return;
    setMessages(function(prev) { return [...prev, { type: "user", text: question }]; });
    setAnswer("Loading...");

    try {
      const response = await axios({
        url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAugV8wP4aMXxojHYckOlvBSJhh5hFe9MI",
        method: "POST",
        data: {
          contents: [
            {
              parts: [{ text: question }],
            },
          ],
        },
      });

      const aiResponse =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Sorry, I couldn't process that.";
      setMessages(function(prev) { return [...prev, { type: "bot", text: aiResponse }]; });
      setAnswer(aiResponse);
    } catch (error) {
      setMessages(function(prev) { return [...prev, { type: "bot", text: "Error occurred!" }]; });
    }
    setQuestion("");
  }

  return (
    <div className="fixed bottom-4 right-4">
      {!isOpen ? (
        <button
          onClick={function() { setIsOpen(true); }}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700"
        >
          <HiChatAlt2 size={24} />
        </button>
      ) : (
        <div className="w-80 h-auto bg-white shadow-lg rounded-lg flex flex-col overflow-hidden border border-gray-300">
          <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Chat AI</h2>
            <button onClick={function() { setIsOpen(false); }} className="text-xl">×</button>
          </div>
          <div className="p-3 flex-1 overflow-y-auto max-h-60">
            {messages.map(function(msg, index) {
              return (
                <div
                  key={index}
                  className={`p-2 my-1 rounded-md max-w-[75%] text-sm ${
                    msg.type === "user"
                      ? "bg-blue-500 text-white self-end ml-auto"
                      : "bg-gray-200 text-gray-900"
                  }`}
                >
                  {msg.text}
                </div>
              );
            })}
          </div>
          <div className="p-3 border-t flex items-center">
            <input
              type="text"
              value={question}
              onChange={function(e) { setQuestion(e.target.value); }}
              placeholder="Type your message..."
              className="flex-1 p-2 border rounded-l-md outline-none"
            />
            <button
              onClick={genAns}
              className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
            >
              <IoSend size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatAi;
