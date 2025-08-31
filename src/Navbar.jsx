

import React, { useState } from 'react';
import { useCartWishlist } from './CartWishlistContext';
import { Link } from 'react-router-dom';
import './Navbar.css';
import navLogo from './assets/logo-removebg-preview.png';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cart, wishlist } = useCartWishlist();
  return (
  <nav className="navbar" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', zIndex: 100, background: '#222' }}>
      {/* Hamburger and Sidebar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <button
          onClick={() => setSidebarOpen(true)}
          style={{ background: 'none', border: 'none', color: '#fff', fontSize: 32, marginRight: 16, cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          aria-label="Open sidebar"
        >
          <span style={{ fontSize: 32, lineHeight: 1 }}>&#9776;</span>
        </button>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit' }}>
          <img src={navLogo} alt="Logo" style={{ height: 60, width: 60, objectFit: 'contain', marginRight: 10 }} />
          <span style={{ fontSize: '2rem' }}>PetSphere</span>
        </Link>
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      {/* Right side icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <Link to="/wishlist" className="navbar-icon-btn" title="Wishlist" style={{ color: '#fff', fontSize: 26, textDecoration: 'none', position: 'relative' }}>
          <span role="img" aria-label="Wishlist">🤍</span>
          {wishlist.length > 0 && (
            <span style={{ position: 'absolute', top: -6, right: -10, background: '#ff4d4f', color: '#fff', borderRadius: '50%', fontSize: 13, minWidth: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px', fontWeight: 700, border: '2px solid #222' }}>{wishlist.length}</span>
          )}
        </Link>
        <Link to="/cart" className="navbar-icon-btn" title="Cart" style={{ color: '#fff', fontSize: 26, textDecoration: 'none', position: 'relative' }}>
          <span role="img" aria-label="Cart">🛒</span>
          {cart.length > 0 && (
            <span style={{ position: 'absolute', top: -6, right: -10, background: '#ff4d4f', color: '#fff', borderRadius: '50%', fontSize: 13, minWidth: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5px', fontWeight: 700, border: '2px solid #222' }}>{cart.length}</span>
          )}
        </Link>
        <a href="#account" title="Account" style={{ color: '#fff', fontSize: 26, textDecoration: 'none' }}>
          <span role="img" aria-label="Account">👤</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
