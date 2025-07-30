

import React, { useState, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './Navbar';
import banner1 from './assets/banner_1.jpeg';
import banner2 from './assets/banner_2.jpeg';
import banner3 from './assets/banner_3.jpeg';


function App() {
  const [count, setCount] = useState(0);
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

  // Full-width, animated banner carousel
  return (
    <>
      <Navbar />
      <main style={{ fontFamily: 'sans-serif', background: '#f8fafc', minHeight: '80vh' }}>
        {/* Animated Banner Carousel */}
        <section style={{ width: '100vw', overflow: 'hidden', background: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 0, marginBottom: '2rem', position: 'relative', aspectRatio: '16/6', minHeight: 0, height: 'clamp(220px, 36vw, 600px)' }}>
          <div style={{ width: '100vw', height: '100%', position: 'relative', aspectRatio: '16/6', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {banners.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Banner ${idx + 1}`}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%)${animating && idx === current ? ' scale(1) rotate(-1deg)' : ''}`,
                  width: '100%',
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
        {/* Hero Section */}
        <section style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '3rem 1rem 2rem 1rem', background: '#fff' }}>
          <h1 style={{ fontSize: '2.5rem', color: '#4fd1c5', marginBottom: '1rem', fontWeight: 700 }}>Everything Your Pet Needs</h1>
          <p style={{ fontSize: '1.2rem', color: '#333', maxWidth: 600, textAlign: 'center' }}>
            Shop food, toys, accessories, and book services for your furry, feathery, or scaly friends!
          </p>
          <button style={{ background: '#4fd1c5', color: '#fff', border: 'none', borderRadius: 6, padding: '0.7rem 2rem', marginTop: 24, fontSize: '1.1rem', cursor: 'pointer' }}>Shop Now</button>
        </section>

        {/* Promotions */}
        <section style={{ display: 'flex', justifyContent: 'center', gap: '2rem', padding: '1.5rem 1rem 0 1rem', background: '#f0fdfa' }}>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0001', padding: '1rem 2rem', fontWeight: 500, color: '#4fd1c5' }}>10% Off on First Order!</div>
          <div style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px #0001', padding: '1rem 2rem', fontWeight: 500, color: '#4fd1c5' }}>Free Shipping Over $49</div>
        </section>

        {/* Shop by Pet */}
        <section style={{ padding: '2rem 1rem 1rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#333', marginBottom: '1.2rem', textAlign: 'center' }}>Shop by Pet</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 120 }}><span role="img" aria-label="Dog" style={{ fontSize: 32 }}>🐶</span><div>Dog</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 120 }}><span role="img" aria-label="Cat" style={{ fontSize: 32 }}>🐱</span><div>Cat</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 120 }}><span role="img" aria-label="Bird" style={{ fontSize: 32 }}>🐦</span><div>Bird</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 120 }}><span role="img" aria-label="Fish" style={{ fontSize: 32 }}>🐠</span><div>Fish</div></div>
          </div>
        </section>

        {/* Featured Products */}
        <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', color: '#333', marginBottom: '1.5rem', textAlign: 'center' }}>Featured Products</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
            {/* Example Product Cards */}
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: '1.5rem', width: 250, textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80" alt="Dog Food" style={{ width: '100%', borderRadius: 8, marginBottom: 12 }} />
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Premium Dog Food</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>$24.99</p>
              <button style={{ background: '#4fd1c5', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', marginTop: 8, cursor: 'pointer' }}>Add to Cart</button>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: '1.5rem', width: 250, textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=crop&w=400&q=80" alt="Cat Toy" style={{ width: '100%', borderRadius: 8, marginBottom: 12 }} />
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Interactive Cat Toy</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>$14.99</p>
              <button style={{ background: '#4fd1c5', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', marginTop: 8, cursor: 'pointer' }}>Add to Cart</button>
            </div>
            <div style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px #0001', padding: '1.5rem', width: 250, textAlign: 'center' }}>
              <img src="https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80" alt="Pet Bed" style={{ width: '100%', borderRadius: 8, marginBottom: 12 }} />
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>Cozy Pet Bed</h3>
              <p style={{ color: '#666', fontSize: '0.95rem' }}>$39.99</p>
              <button style={{ background: '#4fd1c5', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', marginTop: 8, cursor: 'pointer' }}>Add to Cart</button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#333', marginBottom: '1.2rem', textAlign: 'center' }}>Our Services</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 180 }}><span role="img" aria-label="Vet" style={{ fontSize: 32 }}>🩺</span><div>Vet Consultation</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 180 }}><span role="img" aria-label="Grooming" style={{ fontSize: 32 }}>✂️</span><div>Grooming</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 180 }}><span role="img" aria-label="Training" style={{ fontSize: 32 }}>🏅</span><div>Training</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 180 }}><span role="img" aria-label="Boarding" style={{ fontSize: 32 }}>🏠</span><div>Boarding</div></div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#333', marginBottom: '1.2rem', textAlign: 'center' }}>Why Choose Us?</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 180 }}><span role="img" aria-label="Trust" style={{ fontSize: 32 }}>👍</span><div>Trusted by Pet Owners</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 180 }}><span role="img" aria-label="Delivery" style={{ fontSize: 32 }}>🚚</span><div>Fast Delivery</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 180 }}><span role="img" aria-label="Quality" style={{ fontSize: 32 }}>🏆</span><div>Quality Products</div></div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', textAlign: 'center', minWidth: 180 }}><span role="img" aria-label="Support" style={{ fontSize: 32 }}>💬</span><div>24/7 Support</div></div>
          </div>
        </section>

        {/* Customer Reviews */}
        <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#333', marginBottom: '1.2rem', textAlign: 'center' }}>What Our Customers Say</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', minWidth: 250, maxWidth: 350 }}>
              <div style={{ fontWeight: 500, marginBottom: 8 }}>&quot;Great service and fast delivery! My dog loves the new bed.&quot;</div>
              <div style={{ color: '#4fd1c5', fontWeight: 600 }}>- Priya S.</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', minWidth: 250, maxWidth: 350 }}>
              <div style={{ fontWeight: 500, marginBottom: 8 }}>&quot;The vet consultation was so helpful. Highly recommend!&quot;</div>
              <div style={{ color: '#4fd1c5', fontWeight: 600 }}>- Rahul M.</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', minWidth: 250, maxWidth: 350 }}>
              <div style={{ fontWeight: 500, marginBottom: 8 }}>&quot;Best place for pet products. Quality is top-notch.&quot;</div>
              <div style={{ color: '#4fd1c5', fontWeight: 600 }}>- Anjali T.</div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section style={{ padding: '2rem 1rem', maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem', textAlign: 'center' }}>Get Pet Care Tips & Offers</h2>
          <form style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <input type="email" placeholder="Your email" style={{ padding: '0.7rem 1rem', borderRadius: 6, border: '1px solid #ccc', fontSize: '1rem', width: 220 }} />
            <button type="submit" style={{ background: '#4fd1c5', color: '#fff', border: 'none', borderRadius: 6, padding: '0.7rem 1.5rem', fontSize: '1rem', cursor: 'pointer' }}>Subscribe</button>
          </form>
        </section>

        {/* Blog/Advice */}
        <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: '1.7rem', color: '#333', marginBottom: '1.2rem', textAlign: 'center' }}>Latest Pet Care Tips</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', minWidth: 250, maxWidth: 350 }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>How to Choose the Right Food for Your Pet</div>
              <div style={{ color: '#666', fontSize: '0.95rem' }}>Tips for selecting healthy and nutritious food for your furry friend.</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', minWidth: 250, maxWidth: 350 }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>5 Fun Activities to Keep Your Cat Active</div>
              <div style={{ color: '#666', fontSize: '0.95rem' }}>Simple games and toys to keep your cat happy and healthy.</div>
            </div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '1.2rem 2rem', minWidth: 250, maxWidth: 350 }}>
              <div style={{ fontWeight: 600, marginBottom: 8 }}>Grooming Tips for Dogs</div>
              <div style={{ color: '#666', fontSize: '0.95rem' }}>How to keep your dog clean, shiny, and comfortable.</div>
            </div>
          </div>
        </section>

        {/* Brand Partners & Trust Badges */}
        <section style={{ padding: '2rem 1rem', maxWidth: 1100, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.3rem', color: '#333', marginBottom: '1rem' }}>Our Trusted Partners</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Purina_logo.png" alt="Purina" style={{ height: 40, background: '#fff', borderRadius: 6, padding: 4 }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Pedigree_logo.png" alt="Pedigree" style={{ height: 40, background: '#fff', borderRadius: 6, padding: 4 }} />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Whiskas_logo.png" alt="Whiskas" style={{ height: 40, background: '#fff', borderRadius: 6, padding: 4 }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ background: '#fff', borderRadius: 10, padding: '0.7rem 1.5rem', fontWeight: 500, color: '#4fd1c5', display: 'inline-block' }}>Secure Payment</div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '0.7rem 1.5rem', fontWeight: 500, color: '#4fd1c5', display: 'inline-block' }}>Satisfaction Guarantee</div>
            <div style={{ background: '#fff', borderRadius: 10, padding: '0.7rem 1.5rem', fontWeight: 500, color: '#4fd1c5', display: 'inline-block' }}>Fast Shipping</div>
          </div>
        </section>
      </main>
      <footer style={{ background: '#222', color: '#fff', textAlign: 'center', padding: '1.2rem 0', marginTop: 0 }}>
        <div style={{ marginBottom: '0.5rem' }}>
          <a href="#tc" style={{ color: '#4fd1c5', margin: '0 1rem', textDecoration: 'none' }}>Terms &amp; Conditions</a>
          <a href="#privacy" style={{ color: '#4fd1c5', margin: '0 1rem', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#contact" style={{ color: '#4fd1c5', margin: '0 1rem', textDecoration: 'none' }}>Contact Us</a>
        </div>
        <div style={{ fontSize: '1rem', color: '#bbb' }}>
          &copy; {new Date().getFullYear()} PetSphere. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default App
