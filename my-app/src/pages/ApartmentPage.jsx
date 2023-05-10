import React from "react";
import ApartmentDescription from "../components/ApartmentDescription";
import ApartmentBanner from "../components/ApartmentBanner";
import ApartmentHeader from "../components/ApartmentHeader";
import "./ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <ApartmentBanner />
      <ApartmentHeader />
      <div className="apartment__description__wrapper">
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </div>
  );
}

export default ApartmentPage;
