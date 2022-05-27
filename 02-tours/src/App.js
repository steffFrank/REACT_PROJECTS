import React, {useEffect, useState} from "react";
import { Tours } from "./Components/Tours";

export const App = () => {

  const url = "https://course-api.com/react-tours-project";

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const deleteTour = (id) => {
    setData(prevData => {
      return prevData.filter(tour => tour.id !== id);
    })
  }

  const fetchData = async (url) => {
    const response = await fetch(url);
    const fetchedData = await response.json();
    setData(fetchedData);
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData(url);
  }, [])
  return (
    <div className="section">
      <Tours isLoading={isLoading}
             data={data}
             deleteTour={deleteTour} />
      {data.length === 0 && <button onClick={() => fetchData(url)} className="btn">load data</button>}
    </div>
  )
}
