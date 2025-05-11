// File: src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">HealthTipBot</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* <li><Link to="/dashboard">Dashboard</Link></li> */}
        <li><Link to="/login">Login</Link></li>
        {/* <li><Link to="/signup">Signup</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
