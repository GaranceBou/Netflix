import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Header from "./components/Header";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <div className="page">
        <Header />
        <div className="section">
          {data.map((elem) => {
            return <Section elem={elem} key={elem.category} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
