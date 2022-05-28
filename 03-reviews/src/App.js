import React from 'react';
import { Review } from './Review';

export const App = ()  => {
  return (
    <main>
      <section>
        <div className='title'>
          <h2>our reviews</h2>
          <div className='underline'></div>   
        </div>
        <div className='container'>
          <Review />
        </div>
      </section>
    </main>
  )
}


