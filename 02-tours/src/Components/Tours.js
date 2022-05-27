import React from "react";
import { Tour } from "./Tour";

export const Tours = ({isLoading, data}) => {
    return (
        <main>
            {isLoading ? <h1 className="loading">Loading...</h1> : 
            <div className="title">
                <h1>Our Tours</h1>
                <div className="underline"></div>
            </div>}
            {data.map(tour => {
                return <Tour key={tour.id}
                             {...tour} />
            })}
            
        </main>
    )
}