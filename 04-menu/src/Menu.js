import React from "react";

export const Menu = ({title, img, price, desc}) => {
  return (
      <article className="menu-item">
        <img className="photo" src={img} alt={title} />
        <div className="item-info">
          <header>
            <h4>{title}</h4>
            <p className="price">${price}</p>
          </header>
          <p className="item-text">{desc}</p>
        </div>
      </article>
  )
};

