import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Review } from "./Review";
import data from "./data";


export const App = () =>  {
  const [index, setIndex] = useState(0);
  const person = data[index];

  const prevReview = () => {
    setIndex(prevIndex => prevIndex - 1);
  }

  const nextReview = () => {
    setIndex(prevIndex => prevIndex + 1);
  }

  useEffect(() => {
    const lastIndex = data.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    } 
  }, [index]);

  // const validateIndex = (ind) => {
  //   if (ind > data.length-1) {
  //     return 0
  //   } else if (ind < 0) {
  //     return data.length - 1;
  //   } else {
  //     return ind;
  //   }
  // }

  useEffect(() => {
    const timeout = setTimeout(() => {
      nextReview();
    }, 3000);
    return () => clearTimeout(timeout);
  })
  
  return (
    <main className="section">
      <div className="title">
        <h2><span>/</span>reviews</h2>
      </div>
      <div className="section-center">
        <Review {...person}/>
        <button onClick={prevReview} className="prev"><FiChevronLeft /></button>
        <button onClick={nextReview} className="next"><FiChevronRight /></button>
      </div>
    </main>
  )
}

