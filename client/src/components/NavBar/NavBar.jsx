import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

function NavBarTest() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="containerNav">
        <div className="logo">
          {/* <h2>AirVenture</h2> */}
        </div>
        <div
          id="mainListDiv"
          className={`main_list ${isMenuOpen ? 'show_list' : ''}`}
        >
          <ul className="navlinks">
            <li>
              <Link to="/">HEM</Link>
            </li>
            <li>
              <Link to="/bookings">BOKA</Link>
            </li>
            <li>
              <Link to="/departures">AVGÅNGAR</Link>
            </li>
            <li>
              <Link to="/contact">KONTAKT</Link>
            </li>
          </ul>
        </div>
        <span className="navTrigger" onClick={handleMenuClick}>
          <i></i>
          <i></i>
          <i></i>
        </span>
      </div>
    </nav>
  );
}

export default NavBarTest;
