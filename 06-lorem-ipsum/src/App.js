import React, { useState } from "react";
import data from "./data";
import { Form } from "./Form";

export const App = () => {
  
  const maxLength = data.length;
  const [index, setIndex] = useState(0);
  const [isGenerate, setIsGenerate] = useState(false);

  const lorems = data.slice(0, index);

  const generateLorem = (e) => {
    e.preventDefault();
    setIndex(e.target.value);
    setIsGenerate(false);

  }

  const showResult = (e) => {
    e.preventDefault();
    setIsGenerate(true);
  }

  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <Form maxLength={maxLength}
            showResult={showResult}
            generateLorem={generateLorem} />
      {isGenerate && <div className="result">
        {lorems.map((lorem, index) => {
          return (
            <p key={index}>{lorem}</p>
          )
        })}
      </div>}
    </section>
    )
}
