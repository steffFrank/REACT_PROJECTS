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
        {people.map((person) => <List key={person.id}
                                      img={person.image}
                                      name={person.name}
                                      age={person.age} />)}
        <button onClick={handleClick} className="btn">clear all</button>
      </div>
      
    </main>
  )
}