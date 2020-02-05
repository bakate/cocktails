import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-center">
      <Link to="/">
        <img src={logo} alt="the cocktails logo" className="logo" />
      </Link>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  </nav>
);
export default Navbar;
