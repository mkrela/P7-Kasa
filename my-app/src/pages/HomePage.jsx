import React from "react";
import Banner from "../layouts/Banner.jsx";
import ApartmentGrid from "../components/ApartmentGrid.jsx";
import "./HomePage.scss";

function HomePage() {
  return (
    <>
      <Banner />
      <ApartmentGrid />
    </>
  );
}

export default HomePage;
