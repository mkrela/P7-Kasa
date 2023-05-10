import React from "react";
import Banner from "../layouts/Banner";
import ApartmentDescription from "../components/DescriptionPanel";
import './About.scss'

function About() {
  return (
    <>
      <Banner />
      <div className="about__container">
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
        <ApartmentDescription />
      </div>
    </>
  );
}

export default About;
