import React, { useEffect, useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export const Review = () => {
  const [index, setIndex] = useState(0);
  const person = people[index];
  
  const checkIndex = (ind) => {
    if (ind > people.length - 1) {
      return 0;
    } else if (ind < 0) {
      return people.length -1;
    } else {
      return ind;
    }
  }

  const prevReview = () => {
    setIndex(prevIndex => checkIndex(prevIndex - 1))
  }

  const nextReview = () => {
    setIndex(prevIndex => checkIndex(prevIndex + 1))
  }

  const randomReview = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = checkIndex(randomIndex + 1);
    }
    setIndex(randomIndex);
  }
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      randomReview();
    },3000)
    return ()=> clearTimeout(timeout);
  })

  return (
    <div className='review'>
      <div className='img-container'>
        <img className='person-img' src={person.image} alt={person.name} />
        <div className='quote-icon'>
          <FaQuoteRight />
        </div>
      </div>
      <h4 className='author'>{person.name}</h4>
      <p className='job'>{person.job}</p>
      <p className='info'>{person.text}</p>
      <div>
        <button onClick={prevReview} className='prev-btn'><FaChevronLeft /></button>
        <button onClick={nextReview} className='next-btn'><FaChevronRight /></button>
      </div>
      <button onClick={randomReview} className='random-btn'>surprise me</button>
    </div>
  );
};


