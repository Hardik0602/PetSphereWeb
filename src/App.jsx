// Features/Icons array for quality, support, trust, delivery
const features = [
  {
    icon: (
      // Green Tick for Quality Assurance
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="22" fill="#e8f5e9" stroke="#43a047" strokeWidth="2"/><path d="M16 24l6 6 10-12" stroke="#43a047" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
    label: 'Quality Assurance',
  },
  {
    icon: (
      // Round Clock for 24/7 Support
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="20" fill="#fffde7" stroke="#ffd600" strokeWidth="2"/><circle cx="24" cy="24" r="16" fill="#fffde7" stroke="#ffd600" strokeWidth="1.5"/><path d="M24 14v10l7 4" stroke="#ff9800" strokeWidth="3" strokeLinecap="round"/><circle cx="24" cy="24" r="2.5" fill="#ffd600"/></svg>
    ),
    label: '24/7 Support',
  },
  {
    icon: (
      // Handshake for Trusted Service
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#e3f2fd"/><path d="M14 28l6 6c1.5 1.5 4 1.5 5.5 0l8-8c1.5-1.5 1.5-4 0-5.5l-2-2c-1.5-1.5-4-1.5-5.5 0l-8 8c-1.5 1.5-1.5 4 0 5.5z" fill="#90caf9" stroke="#1976d2" strokeWidth="2"/><path d="M20 34l-6-6" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/><path d="M34 20l-6-6" stroke="#1976d2" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
    label: 'Trusted Service',
  },
  {
    icon: (
      // Truck for Fast Delivery
      <svg width="44" height="44" viewBox="0 0 48 48" fill="none"><rect width="48" height="48" rx="24" fill="#e1f5fe"/><rect x="10" y="22" width="18" height="10" rx="3" fill="#4fc3f7" stroke="#0288d1" strokeWidth="2"/><rect x="28" y="26" width="10" height="6" rx="2" fill="#b3e5fc" stroke="#0288d1" strokeWidth="2"/><circle cx="16" cy="34" r="3" fill="#0288d1"/><circle cx="34" cy="34" r="3" fill="#0288d1"/></svg>
    ),
    label: 'Fast Delivery',
  },
];
import React, { useState, useEffect, useRef } from 'react';
import Navbar from './Navbar';
import BestSellers from './BestSellers';
import CartPage from './CartPage';
import WishlistPage from './WishlistPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Simple SVG icons for quality, support, trust, delivery
import banner1 from './assets/banner_1.jpeg';
import banner2 from './assets/banner_2.jpeg';
import banner3 from './assets/banner_3.jpeg';
import './App.css';

import { CartWishlistProvider, useCartWishlist } from './CartWishlistContext';
import ourProductsStyles from './OurProducts.module.css';

function OurProducts() {
  const { cart, wishlist, addToCart, addToWishlist, removeFromWishlist } = useCartWishlist();
  // Product data for Our Products section
  const products = [
    {
      name: 'Fun Dog Toy',
      price: 9.99,
      image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Cat Scratcher',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=crop&w=400&q=80',
    },
    {
      name: 'Pet Shampoo',
      price: 7.99,
      image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const isInWishlist = (product) => wishlist.some(item => item.name === product.name);
  const isInCart = (product) => cart.some(item => item.name === product.name);

  return (
    <section className={ourProductsStyles.ourProductsSection}>
      {/* Extra animated blobs for lively background */}
      <div className="ourProductsBlobs" />
      <h2 className={ourProductsStyles.ourProductsTitle}>Our Products</h2>
      <div className={ourProductsStyles.ourProductsRow}>
        {products.map((product, idx) => (
          <div className={ourProductsStyles.ourProductCard} key={product.name}>
            <div className={ourProductsStyles.ourProductImageWrap}>
              <img src={product.image} alt={product.name} className={ourProductsStyles.ourProductImage} />
              <button
                className={ourProductsStyles.ourProductWishlist}
                title={isInWishlist(product) ? 'Remove from Wishlist' : 'Add to Wishlist'}
                style={{ color: isInWishlist(product) ? 'red' : '#aaa', fontSize: 22, transition: 'color 0.2s' }}
                onClick={() => {
                  if (isInWishlist(product)) {
                    removeFromWishlist(product);
                  } else {
                    addToWishlist(product);
                  }
                }}
              >
                {isInWishlist(product) ? '❤️' : '🤍'}
              </button>
            </div>
            <h3 className={ourProductsStyles.ourProductName}>{product.name}</h3>
            <p className={ourProductsStyles.ourProductPrice}>${product.price.toFixed(2)}</p>
            <div className={ourProductsStyles.ourProductCartWrap}>
              <button
                className={ourProductsStyles.ourProductCartBtn}
                style={{ background: isInCart(product) ? '#4fd1c5' : undefined, color: isInCart(product) ? '#fff' : undefined, cursor: isInCart(product) ? 'not-allowed' : 'pointer', transition: 'background 0.2s' }}
                disabled={isInCart(product)}
                onClick={() => {
                  if (!isInCart(product)) {
                    addToCart(product);
                  }
                }}
              >
                {isInCart(product) ? 'Added' : 'Add to Cart'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function App() {
  const banners = [banner1, banner2, banner3];
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef(null);

  // Auto-advance every 3.5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % banners.length);
        setAnimating(false);
      }, 500); // Animation duration
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current, banners.length]);
  return (
      <CartWishlistProvider>
        <Router>
          <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Navbar />
            <div style={{ flex: 1, marginTop: 80, marginBottom: 90 }}>
              <Routes>
                <Route path="/" element={
                  <main style={{ fontFamily: 'sans-serif', background: '#f8fafc', minHeight: '80vh' }}>
                    {/* Banner Carousel */}
                    <section style={{ width: '100vw', overflow: 'hidden', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, marginBottom: '2rem', position: 'relative', aspectRatio: '16/6', minHeight: 0, height: 'clamp(220px, 36vw, 600px)' }}>
                      <div style={{ width: '100vw', height: '100%', position: 'relative', aspectRatio: '16/6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {banners.map((img, idx) => (
                          <img
                            key={idx}
                            src={img}
                            alt={`Banner ${idx + 1}`}
                            style={{
                              position: 'absolute',
                              top: 0,
                              left: 0,
                              width: '100vw',
                              height: '100%',
                              objectFit: 'cover',
                              objectPosition: 'center',
                              borderRadius: 0,
                              opacity: idx === current ? 1 : 0,
                              zIndex: idx === current ? 2 : 1,
                              transition: 'opacity 0.5s cubic-bezier(.4,2,.6,1), transform 0.5s cubic-bezier(.4,2,.6,1)',
                              filter: idx === current ? 'drop-shadow(0 4px 24px #0002)' : 'none',
                              background: '#fff',
                            }}
                          />
                        ))}
                        {/* Dots */}
                        <div style={{ position: 'absolute', bottom: 18, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 10, zIndex: 10 }}>
                          {banners.map((_, idx) => (
                            <span key={idx} style={{ width: 12, height: 12, borderRadius: '50%', background: idx === current ? '#4fd1c5' : '#ddd', display: 'inline-block', boxShadow: idx === current ? '0 2px 8px #4fd1c555' : 'none', transition: 'background 0.3s' }} />
                          ))}
                        </div>
                      </div>
                    </section>

                    {/* Category Section */}
                    <section style={{ width: '100vw', background: '#f8fafc', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1.5rem 0', margin: 0 }}>
                      <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: 1200 }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                          <span role="img" aria-label="Dog" style={{ fontSize: 40, marginBottom: 8 }}>🐶</span>
                          <span style={{ fontWeight: 500, color: '#333' }}>Dog</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                          <span role="img" aria-label="Cat" style={{ fontSize: 40, marginBottom: 8 }}>🐱</span>
                          <span style={{ fontWeight: 500, color: '#333' }}>Cat</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                          <span role="img" aria-label="Fish" style={{ fontSize: 40, marginBottom: 8 }}>🐠</span>
                          <span style={{ fontWeight: 500, color: '#333' }}>Fish</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                          <span role="img" aria-label="Bird" style={{ fontSize: 40, marginBottom: 8 }}>🐦</span>
                          <span style={{ fontWeight: 500, color: '#333' }}>Bird</span>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                          <span role="img" aria-label="Other" style={{ fontSize: 40, marginBottom: 8 }}>🦎</span>
                          <span style={{ fontWeight: 500, color: '#333' }}>Other</span>
                        </div>
                      </div>
                    </section>

                    {/* Best Sellers Section */}
                    <BestSellers />

                    {/* Our Products Section */}
                    <OurProducts />

                    {/* Features/Icons Section */}
                    <section style={{ width: '100vw', background: '#f8fafc', padding: '2rem 0 1.5rem 0', display: 'flex', justifyContent: 'center' }}>
                      <div style={{ display: 'flex', flexDirection: 'row', gap: '3vw', justifyContent: 'center', alignItems: 'center', width: '100%', maxWidth: 900 }}>
                        {features.map((f, i) => (
                          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, minWidth: 90 }}>
                            {f.icon}
                            <span style={{ marginTop: 10, color: '#319795', fontWeight: 600, fontSize: 15, textAlign: 'center' }}>{f.label}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </main>
                } />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
              </Routes>
            </div>
            <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '1.2rem 0', marginTop: 'auto', width: '100vw', height: 90 }}>
              <div style={{ marginBottom: '0.5rem' }}>
                <a href="#tc" style={{ color: '#4fd1c5', margin: '0 1rem', textDecoration: 'none' }}>Terms &amp; Conditions</a>
                <a href="#privacy" style={{ color: '#4fd1c5', margin: '0 1rem', textDecoration: 'none' }}>Privacy Policy</a>
                <a href="#contact" style={{ color: '#4fd1c5', margin: '0 1rem', textDecoration: 'none' }}>Contact Us</a>
              </div>
              <div style={{ fontSize: '1rem', color: '#bbb' }}>
                &copy; {new Date().getFullYear()} PetSphere. All rights reserved.
              </div>
            </footer>
          </div>
        </Router>
      </CartWishlistProvider>
    );
}

export default App;