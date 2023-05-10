import React from "react";
import DescriptionPanel from "../components/DescriptionPanel";
import "./ApartmentPage.scss";
import { ImageBanner } from "../components/ImageBanner";
import ApartmentHeader from "../components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";

function ApartmentPage() {
  const flat = useApartment(); // Fetches the apartment using the `useApartment` hook

  if (flat == null) return <div>Chargement ...</div>; // Renders a loading message if the apartment is not yet fetched

  return (
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} /> {/* Renders the ImageBanner component with the apartment pictures */}
      <ApartmentHeader flat={flat} /> {/* Renders the ApartmentHeader component with the apartment details */}
      <div className="apartment__description__area">
        {/* Renders two DescriptionPanel components to display the apartment description and equipment */}
        <DescriptionPanel title="Description" content={flat.description} />
        <DescriptionPanel
          title="Equipements"
          content={flat.equipments.map((eq, i) => (
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;
