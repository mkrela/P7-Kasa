import React from "react";
import DescriptionPanel from "../components/DescriptionPanel";
import ImageBanner from "../components/ImageBanner";
import ApartmentHeader from "../components/ApartmentHeader";
import "./ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <ImageBanner />
      <ApartmentHeader />
      <div className="apartment__description__wrapper">
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </div>
  );
}

export default ApartmentPage;
