import React from "react";
import { FaQuoteRight } from "react-icons/fa";


export const Review = ({image, name, title, quote}) => {
    return (
        <article>
            <img className="person-img" src={image} alt={name} />
            <h4>{name}</h4>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <div className="icon"><FaQuoteRight /></div>
        </article>
    )
}