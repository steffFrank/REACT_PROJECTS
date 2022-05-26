import React, {useState} from "react";
import { List } from "./List";
import data from "./data";


export const App = () => {
  const [people, setPeople] = useState(data);

  const handleClick = () => {
    setPeople([]);
  }

  return (
    <main>
      <div className="container">
        <h3>{people.length} birthdays today</h3>
        <List />
        <button onClick={handleClick} className="btn">clear all</button>
      </div>
      
    </main>
  )
}