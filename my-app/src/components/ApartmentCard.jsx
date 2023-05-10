import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";

function ApartmentCard(props) {
  return (
    // Link to the apartment page, passing the apartment id as state
    <Link
      to="/flat"
      state={{
        apartmentId: props.id,
      }}
    >
      {/* Display apartment image and title */}
      <div className="apartment">
        <img src={props.imageUrl} alt="" />
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;
