import React, { useState } from "react";
import { Menu }  from "./Menu";
import { Categories } from "./Categories";
import items from "./data";



export const App = () =>  {

  const [menus, setMenus] = useState(items);


  return (
    <main className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories />
      <section className="section-center">
        {menus.map(menu => {
          return (
            <Menu {...menu} />
          )
        })}
      </section>
    </main>
  )
}




