import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

export const Review = () => {

  const [person, setPerson] = useState(people[0]);

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
        <button className='prev-btn'><FaChevronLeft /></button>
        <button className='next-btn'><FaChevronRight /></button>
      </div>
      <button className='random-btn'>surprise me</button>
    </div>
  );
};


