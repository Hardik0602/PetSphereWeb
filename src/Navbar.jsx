
import React from 'react';
import './Navbar.css';
import navLogo from './assets/logo-removebg-preview.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <img src={navLogo} alt="Logo" style={{ height: 60, width: 60, objectFit: 'contain', marginRight: 10 }} />
        <span style={{ fontSize: '2rem' }}>PetSphere</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#shop">Shop</a></li>
        <li><a href="#vet" title="Vet"><span role="img" aria-label="Vet">🩺</span> Vet</a></li>
        <li><a href="#grooming" title="Grooming"><span role="img" aria-label="Grooming">✂️</span> Grooming</a></li>
        <li><a href="#training" title="Training"><span role="img" aria-label="Training">🏅</span> Training</a></li>
        <li><a href="#boarding" title="Boarding"><span role="img" aria-label="Boarding">🏠</span> Boarding</a></li>
        <li><a href="#cart">Cart</a></li>
        <li><a href="#account">Account</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
