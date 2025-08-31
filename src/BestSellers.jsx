import React from 'react';
import GalaxyStars from './GalaxyStars';
import { useCartWishlist } from './CartWishlistContext';

const products = [
  {
    name: 'Premium Dog Food',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Interactive Cat Toy',
    price: 14.99,
    image: 'https://images.unsplash.com/photo-1518715308788-3005759c41c8?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Comfy Pet Bed',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=400&q=80',
  },
];

const BestSellers = () => {
  const { addToCart, addToWishlist, removeFromWishlist, wishlist } = useCartWishlist();
  const isInWishlist = (product) => wishlist.some(item => item.name === product.name);
  return (
    <section
      style={{
        width: '100vw',
        minHeight: 420,
        background: 'linear-gradient(135deg, #0a1026 0%, #1a2a3a 100%)',
        position: 'relative',
        padding: '2.5rem 0 2rem 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
        overflow: 'hidden',
      }}
    >
      {/* Animated galaxy stars background */}
      <GalaxyStars />
      {/* ...existing code... */}
      <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '2rem', fontWeight: 700, position: 'relative', zIndex: 2, textShadow: '0 2px 12px #0008' }}>Best Sellers</h2>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'stretch',
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 0.5rem',
          flexWrap: 'nowrap',
          overflowX: 'auto',
          scrollbarWidth: 'thin',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {products.map((product, idx) => {
          const inWishlist = isInWishlist(product);
          return (
            <div key={idx} style={{ background: '#1a2233cc', borderRadius: 14, boxShadow: '0 2px 8px #0003', padding: '1rem', width: '22vw', maxWidth: 200, minWidth: 140, textAlign: 'center', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '0 0 22vw', zIndex: 3 }}>
              <div style={{ position: 'relative', width: '100%' }}>
                <img src={product.image} alt={product.name} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', borderRadius: 10, marginBottom: 12, maxWidth: '100%' }} />
                <button
                  style={{ position: 'absolute', top: 8, right: 8, background: 'rgba(255,255,255,0.9)', border: inWishlist ? '1.5px solid #ff4d4f' : '1.5px solid #4fd1c5', color: inWishlist ? '#ff4d4f' : '#4fd1c5', borderRadius: '50%', padding: '0.4rem 0.5rem', fontSize: 18, cursor: 'pointer', zIndex: 2, transition: 'color 0.2s, border 0.2s' }}
                  title={inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                  onClick={() => {
                    if (inWishlist) {
                      removeFromWishlist(product);
                    } else {
                      addToWishlist(product);
                    }
                  }}
                >{inWishlist ? '❤️' : '🤍'}</button>
              </div>
              <h3 style={{ fontSize: '1.1rem', margin: '0.5rem 0', color: '#fff', textShadow: '0 1px 6px #0007' }}>{product.name}</h3>
              <p style={{ color: '#b3e5fc', fontSize: '0.95rem', marginBottom: 12, textShadow: '0 1px 6px #0005' }}>${product.price.toFixed(2)}</p>
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                <button
                  style={{ background: '#4fd1c5', color: '#fff', border: 'none', borderRadius: 6, padding: '0.5rem 1.2rem', fontSize: 15, cursor: 'pointer', boxShadow: '0 2px 8px #0002' }}
                  onClick={() => addToCart(product)}
                >Add to Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BestSellers;
