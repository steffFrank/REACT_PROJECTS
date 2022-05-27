import React, {useState} from "react";

export const Tour = ({name, id, info, image, price}) => {

    const [toggleInfo, setToggleInfo] = useState(false);

    return (
        <div className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <div>{!toggleInfo ? info.slice(0, info.length/2) : info}
                    <button onClick={() => setToggleInfo(!toggleInfo)}>{toggleInfo ? "show less": "...show more"}</button>
                </div>
                <button className="delete-btn">not interested</button>
            </footer>
            
        </div>
    )
}