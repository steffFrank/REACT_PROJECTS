import React, { useState } from "react";
import { List } from "./List";
import { Alert } from "./Alert";
import { Form } from "./Form";


export const App = () => {

  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  }

  const addItems = (e) => {
    e.preventDefault();
    setItems(prevItems => {
      return [...prevItems,
        {id:new Date().getTime(), item:value}
      ]
    })
    setValue("");
  }

  const clearItems = () => {
    setItems([]);
  }
  
  return (
    <div className="section-center">
      <div className="grocery-form">
        <Alert />
        <h3>grocery bud</h3>
        <Form addItems={addItems}
              handleChange={handleChange}
              value={value}/>
        <List items={items}
              clearItems={clearItems}/>
      </div>
     
    </div>
  )
}
