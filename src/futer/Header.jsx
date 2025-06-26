import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">
        <NavLink to="/">WorldAtlas</NavLink>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      <nav className={isOpen ? 'nav-links nav-open' : 'nav-links'}>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/country">Country</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
