import React from "react";


export const Form = ({maxLength, generateLorem, showResult}) => {


    return (
        <form className="lorem-form" onSubmit={(e) => showResult(e)}>
            <label htmlFor="numLorem">paragraphs:</label>
            <input name="numLorem" 
                   min ="1" type="number" 
                   max={maxLength}
                   onChange={(e) => generateLorem(e)}
                   autoFocus
                   required/>
            <button type="submit" className="btn">generate</button>
        </form>
    )
}