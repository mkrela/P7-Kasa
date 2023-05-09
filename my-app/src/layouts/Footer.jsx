import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <NavLink to="/">
        <div className="footer__logo">
          <img src="footer__logo.png" alt="footer__logo" />
        </div>
      </NavLink>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
