import React from 'react';


export const Categories = ({categories}) => {
  return (
    <nav className='btn-container'>
      {categories.map((category, index) => {
        return (
          <ul>
            <li className="filter-btn" key={index}>{category}</li>
          </ul>
        )
      })}
    </nav>
  )
};

