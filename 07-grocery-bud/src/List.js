import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";


export const List = ({items}) => {
  return (
    <article className="grocery-container">
      {items.map(item => {
        return (
          <div key={item.id} className="grocery-item">
            <p className="title">{item.item}</p>
            <button className="edit-btn"><FaEdit /></button>
            <button className="delete-btn"><FaTrash /></button>
          </div>
        )
      })}
      <button className="clear-btn">clear items</button>
    </article>
  )
}
