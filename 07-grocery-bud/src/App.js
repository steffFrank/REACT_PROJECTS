import React, { useState } from "react";
import { List } from "./List";
import { Alert } from "./Alert";
import { Form } from "./Form";


export const App = () => {

  const [items, setItems] = useState([]);
  
  return (
    <div className="section-center">
      <div className="grocery-form">
        <Alert />
        <h3>grocery bud</h3>
        <Form />
        <List items={items}/>
      </div>
     
    </div>
  )
}
