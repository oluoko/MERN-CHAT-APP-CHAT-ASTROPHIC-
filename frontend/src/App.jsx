import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Signup from "./components/Authentication/Signup/Signup";
import HomePage from "./components/Routes/HomePage";
import ChatPage from "./components/Routes/ChatPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<Signup />} exact />
            <Route path="/chats" element={<ChatPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
