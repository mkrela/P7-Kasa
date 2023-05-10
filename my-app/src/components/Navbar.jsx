import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

// Define navigation links
const links = [
  { path: "/", title: "Accueil" },
  { path: "/about", title: "A propos" },
];

function Navbar() {
  return (
    <nav className="navbar">
      {/* Render logo */}
      <NavLink to="/">
        <div className="navbar__logo">
          <img src="logoJPG.png" alt="Logo" />
        </div>
      </NavLink>

      {/* Render navigation links */}
      {links.map((link) => (
        <NavLink key={link.path} to={link.path}>
          {link.title}
        </NavLink>
      ))}
    </nav>
  );
}

export default Navbar;
