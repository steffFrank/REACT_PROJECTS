import React, {useEffect, useState} from "react";
import Tours from "./Components/Tours";

export const App = () => {

  const url = "https://course-api.com/react-tours-project";

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const FetchData = async (url) => {
    const response = await fetch(url);
    const fetchedData = await response.json();
    setData(fetchedData);
    setIsLoading(false)
  }

  useEffect(() => {
    FetchData(url);
  }, [])
  return (
    <section>
      <Tours />
    </section>
  )
}
