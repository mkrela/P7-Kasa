import React from "react";
import "./ApartmentDescription.scss";

function ApartmentDescription() {
  return (
    <div className="apartment__description">
      <p className="description__header">
        <span>Description</span>
        <i className="fas fa-chevron-up fa-lg"></i>
      </p>
      <p className="description__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        placeat sapiente incidunt, veritatis in voluptas eum dolorem itaque amet
        iure ex assumenda ea qui exercitationem autem magnam ducimus
        perspiciatis cumque maxime praesentium reiciendis ipsum, sunt, sequi et.
        Maxime nesciunt iusto nemo est accusamus totam eligendi esse, a soluta
        atque consequuntur!
      </p>
    </div>
  );
}

export default ApartmentDescription;
