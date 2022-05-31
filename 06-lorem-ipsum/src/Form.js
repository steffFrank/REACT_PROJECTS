import React from "react";


export const Form = ({maxLength}) => {
    return (
        <div className="lorem-form">
            <label htmlFor="numLorem">paragraphs:</label>
            <input name="numLorem" 
                   min ="1" type="number" 
                   max={maxLength} />
            <button className="btn">generate</button>
        </div>
    )
}