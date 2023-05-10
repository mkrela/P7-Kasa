import { useState, useEffect } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]);

  // fetch apartments data from the JSON file when component is mounted
  useEffect(() => {
    const abortController = new AbortController();

    // define an async function to fetch the data
    const fetchData = async () => {
      try {
        // make a request to the JSON file
        const response = await fetch("db.json", { signal: abortController.signal });

        // convert the response to JSON
        const data = await response.json();

        // set the apartments state with the fetched data
        setApartments(data);
      } catch (error) {
        console.error(error);
      }
    };

    // call the fetchData function
    fetchData();

    // cleanup function to cancel any pending requests when component is unmounted
    return () => {
      abortController.abort();
    };
  }, []);

  // return the apartments state
  return apartments;
};
