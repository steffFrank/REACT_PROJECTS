import React from "react";

export const List = ({name, img, age}) => {
  return (
    <article className="person">
      <img src={img} alt={name}/>
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
      

    </article>
  )
}