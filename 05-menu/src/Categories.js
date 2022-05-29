import React from 'react';


export const Categories = ({categories, filterMenuByCategory}) => {
  return (
    <nav className='btn-container'>
      {categories.map((category, index) => {
        return (
          <ul>
            <li key={index}><button className="filter-btn" onClick={() => filterMenuByCategory(category)}>{category}</button></li>
          </ul>
        )
      })}
    </nav>
  )
};

