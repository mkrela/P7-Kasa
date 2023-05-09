import React from "react";
import "./ApartmentPage.scss";

function ApartmentPage() {
  return (
    <div className="apartment-page">
      <div>
        <img src="https://picsum.photos/800/400" alt="" />
      </div>
      <div className="apartment__header">
        <div className="apartment__title">
          <h1>Crazy loft on canal saint martin</h1>
          <h2>Paris, Ile de France</h2>
          <div className="apartment__tags">
            <span> Cosy </span>
            <span> Canak </span>
            <span> Paris 10 </span>
          </div>
        </div>
        <div className="apartment__owner">
          <div className="apartment__owner__details">
            <h3>
              <span>Alexandre</span>
              <span>Dumas</span>
            </h3>
            <div className="apartment__owner__badge"></div>
          </div>
          <div className="apartment__owner__ratings">
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="on">★</span>
            <span className="off">★</span>
            <span className="off">★</span>
          </div>
        </div>
      </div>
      <div className="apartment__description">
        <p className="description__header">
          <span>Description</span>
          <i class="fas fa-chevron-down fa-lg"></i>
        </p>
        <p className="description__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          placeat sapiente incidunt, veritatis in voluptas eum dolorem itaque
          amet iure ex assumenda ea qui exercitationem autem magnam ducimus
          perspiciatis cumque maxime praesentium reiciendis ipsum, sunt, sequi
          et. Maxime nesciunt iusto nemo est accusamus totam eligendi esse, a
          soluta atque consequuntur!
        </p>
      </div>
      <div className="apartment__description">
        <p className="description__header">
          <span>Description</span>
          <i class="fas fa-chevron-down fa-lg"></i>
        </p>
        <p className="description__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          placeat sapiente incidunt, veritatis in voluptas eum dolorem itaque
          amet iure ex assumenda ea qui exercitationem autem magnam ducimus
          perspiciatis cumque maxime praesentium reiciendis ipsum, sunt, sequi
          et. Maxime nesciunt iusto nemo est accusamus totam eligendi esse, a
          soluta atque consequuntur!
        </p>
      </div>
    </div>
  );
}

export default ApartmentPage;
