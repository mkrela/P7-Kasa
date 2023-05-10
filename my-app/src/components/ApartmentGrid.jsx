import React from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import { useApartments } from "../hooks/useApartments.jsx";

function ApartmentGrid() {
  // Get apartments from the useApartments hook
  const apartments = useApartments();

  // Render the list of apartments as ApartmentCards
  return (
    <div className="grid">
      {apartments.map((apartment) => (
        <ApartmentCard
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;
