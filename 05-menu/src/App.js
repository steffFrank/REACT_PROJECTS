import React, { useState } from 'react';
import { Menu }  from './Menu';
import { Categories } from './Categories';
import items from './data';

export const App = () =>  {
  return (
    <main className='menu'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories />
      <Menu />
    </main>
  )
}




