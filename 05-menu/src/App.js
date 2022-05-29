import React, { useState } from "react";
import { Menu }  from "./Menu";
import { Categories } from "./Categories";
import items from "./data";



export const App = () =>  {

  const [menus, setMenus] = useState(items);
  
  const categories = ["all", ...new Set(items.map(menu => {
    return menu.category
  }))]
  

  const filterMenuByCategory = (category) => {
    const result = items.filter(menu => {
      if (category === "all") {
        return items;
      }
      return menu.category === category});
    setMenus(result);
  }

  return (
    <main className="menu">
      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>
      <Categories categories={categories}
                  filterMenuByCategory={filterMenuByCategory}/>
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




