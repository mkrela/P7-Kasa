import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export function useApartment() {
  const { id } = useParams();
  const [flat, setFlat] = useState(null);

  useEffect(() => {
    fetch("db.json")
      .then((res) => res.json())
      .then((data) => {
        const flat = data.find((flat) => flat.id === id);
        setFlat(flat);
      })
      .catch(console.error);
  }, [id]);

  return flat;
}
