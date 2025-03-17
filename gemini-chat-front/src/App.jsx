import { useState } from "react";
import "./App.css";
import ChatInput from "./ChatInput";
import ChatResponse from "./ChatResponse";
import { featchChatResponse } from "./api";
import { Placeholder } from "react-bootstrap";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleQuestionOnSubmit = async (question) => {
    setLoading(true);
    setResponse(null);
    try {
      const apiResponse = await featchChatResponse(question);
      setResponse(apiResponse);
    } catch (error) {
      alert("Fail to Get Response");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content">
      <div className="container-fluid App m-0 p-0">
        <header className="text-white text-center  ">
          <h1 className="mainFont fw-bold">Gemini <br /> Chat Bot</h1>
        </header>
        <ChatInput onSubmit={handleQuestionOnSubmit}></ChatInput>
        {loading && (
          <h4 className="container ">
            <>
              <Placeholder xs={6} />
              <Placeholder className="w-75" />{" "}
              <Placeholder style={{ width: "25%" }} />
            </>
          </h4>
        )}
        <ChatResponse  response={response} />
      </div>
      </div>
      
    </div>
  );
}

export default App;
