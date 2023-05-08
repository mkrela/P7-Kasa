import React from "react";
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <div className="footer__logo">
        <img src="footer__logo.png" alt="footer__logo" />
      </div>
      <div className="footer__text">© 2020 Kasa. All rights reserved</div>
    </div>
  );
}

export default Footer;
