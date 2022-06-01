import React, { useState } from "react";
import { List } from "./List";
import { Alert } from "./Alert";
import { Form } from "./Form";


export const App = () => {

  const [items, setItems] = useState([]);
  const [value, setValue] = useState("");
  const [alert, setAlert] = useState({msg: "", type: "", show: false})

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
    showAlert("item added to the list", "success", true);
    setValue("");
  }

  const deleteItem = (id) => {
    setItems(prevItems => {
      const deletedItem = items.find(item => item.id === id).item;
      showAlert(`${deletedItem} deleted from the list`);
      return prevItems.filter(item => item.id !== id);
    })
    
  }

  const clearItems = () => {
    setItems([]);
  }
  
  const showAlert = (msg="", type="danger", show=true) => {
    setAlert({msg, type, show});
  }

  return (
    <div className="section-center">
      <div className="grocery-form">
        <Alert {...alert}/>
        <h3>grocery bud</h3>
        <Form addItems={addItems}
              handleChange={handleChange}
              value={value}/>
        <List items={items}
              clearItems={clearItems}
              deleteItem={deleteItem}/>
      </div>
     
    </div>
  )
}
