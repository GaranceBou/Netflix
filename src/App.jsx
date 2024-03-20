import { useState } from "react";
import "./App.css";
import Section from "./components/Section";
import Header from "./components/Header";
import data from "./assets/data.json";

function App() {
  return (
    <>
      <Header />
      <div className="section">
        {data.map((elem) => {
          return <Section elem={elem} key={elem.category} />;
        })}
      </div>
    </>
  );
}

export default App;
