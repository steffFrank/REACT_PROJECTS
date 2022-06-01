import React from "react";
import { List } from "./List";
import { Alert } from "./Alert";
import { Form } from "./Form";


export const App = () => {
  return (
    <div className="section-center">
      <div className="grocery-form">
        <Alert />
        <h3>grocery bud</h3>
        <Form />
        <List />
      </div>
     
    </div>
  )
}
