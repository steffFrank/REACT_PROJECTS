import React, { useState } from "react";
import data from "./data";
import {Form} from "./Form";

export const App = () => {
  
  const maxLength = data.length;
  return (
    <section className="section-center">
      <h3>tired of boring lorem ipsum?</h3>
      <Form maxLength={maxLength}/>
    </section>
    )
}
