import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/images/logo.jpg" alt="Logo" className="logo-img" />
        <label className="logo-text">CODECORDS</label>
      </div>

      <div className="single-line-text">
        <h2>Farmer Web Application</h2>
      </div>

      {/* Toggle Button */}
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li><a className="actions" href="/home.html">Home</a></li>
        <li><a className="actions" href="/about.html">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Weather</a></li>
        <li><a href="#request">Request</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
