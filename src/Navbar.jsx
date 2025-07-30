import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">PetSphere</div>
      <ul className="navbar-links">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#vet">Vet</a></li>
        <li><a href="#grooming">Grooming</a></li>
        <li><a href="#cart">Cart</a></li>
        <li><a href="#account">Account</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
