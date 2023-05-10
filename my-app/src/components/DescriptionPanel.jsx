import React from "react";
import "./DescriptionPanel.scss";

function DescriptionPanel() {
  return (
    <div className="description__panel">
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

export default DescriptionPanel;
