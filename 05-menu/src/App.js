import React, { useState } from "react";
import { Menu }  from "./Menu";
import { Categories } from "./Categories";
import items from "./data";



export const App = () =>  {

  const [menus, setMenus] = useState(items);
  
  const categories = [...new Set(menus.map(menu => {
    return menu.category
  }))]
  categories.unshift("all");


  return (
    <main className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories}/>
      <section className="section-center">
        {menus.map(menu => {
          return (
            <Menu key={menu.id} {...menu} />
          )
        })}
      </section>
    </main>
  )
}




