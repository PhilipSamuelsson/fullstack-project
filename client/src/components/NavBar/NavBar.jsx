import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-custom">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNav}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
        <ul className="navbar-nav ml-auto align-items-center">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              HEM
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/bookings">
              BOKA
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/departures">
              AVGÅNGAR
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              KONTAKT
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
