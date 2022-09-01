import React from "react";
import MainContent from "./components/MainContent";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <div className="container">
      <Navbar />
      <MainContent />
    </div>
  );
}

export default App;
