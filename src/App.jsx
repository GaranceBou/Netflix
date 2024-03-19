import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Header from "./components/Header";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <Section />
      </div>
    </>
  );
}

export default App;
