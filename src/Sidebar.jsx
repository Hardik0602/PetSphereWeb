import React, { useState } from 'react';
import './Navbar.css';

const Sidebar = ({ open, onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: open ? 0 : '-260px',
        width: 260,
        height: '100vh',
        background: '#222',
        color: '#fff',
        zIndex: 2000,
        transition: 'left 0.3s',
        boxShadow: open ? '2px 0 12px #0003' : 'none',
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 32,
      }}
    >
      <button
        onClick={onClose}
        style={{
          background: 'none',
          border: 'none',
          color: '#fff',
          fontSize: 28,
          alignSelf: 'flex-end',
          marginRight: 16,
          marginBottom: 24,
          cursor: 'pointer',
        }}
        aria-label="Close sidebar"
      >
        ×
      </button>
      <a href="#shop" className="sidebar-link">🛒 Shop</a>
      <a href="#vet" className="sidebar-link">🩺 Vet</a>
      <a href="#grooming" className="sidebar-link">✂️ Grooming</a>
      <a href="#training" className="sidebar-link">🏅 Training</a>
      <a href="#boarding" className="sidebar-link">🏠 Boarding</a>
      <a href="#contact" className="sidebar-link">📞 Contact</a>
      <a href="#order" className="sidebar-link">📦 Order</a>
    </div>
  );
};

export default Sidebar;
