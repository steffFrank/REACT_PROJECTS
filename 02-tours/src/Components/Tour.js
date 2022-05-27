import React from "react";

export const Tour = ({name, id, info, image, price}) => {

    return (
        <div className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>{info}</p>
                <button className="delete-btn">not interested</button>
            </footer>
            
        </div>
    )
}