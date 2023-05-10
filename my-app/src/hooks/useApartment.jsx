import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [flat, setFlat] = useState(null);
  const location = useLocation();

  useEffect(() => {
    // create a new AbortController instance
    const abortController = new AbortController();
    
    // make a fetch request to retrieve the flats data from the JSON file
    fetch("db.json", { signal: abortController.signal })
      .then((res) => res.json())
      .then((flats) => {
        // find the flat object in the flats array with the id provided in the location state
        const flat = flats.find((flat) => flat.id === location.state.apartmentId);
        setFlat(flat);
      })
      .catch(console.error);
      
    // return a cleanup function that will abort the fetch request if the component is unmounted or updated
    return () => {
      abortController.abort();
    };
  }, [location]);

  // return the flat object for the requested apartment
  return flat;
}
