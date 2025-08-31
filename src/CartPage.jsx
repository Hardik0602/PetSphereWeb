import React from 'react';
import { useCartWishlist } from './CartWishlistContext';

export default function CartPage() {
  const { cart } = useCartWishlist();
  return (
    <div style={{ padding: '2rem', maxWidth: 700, margin: '0 auto' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: 24 }}>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {cart.map((item, idx) => (
            <li key={idx} style={{ marginBottom: 18, background: '#f8fafc', borderRadius: 10, padding: 16, boxShadow: '0 2px 8px #0001' }}>
              <strong>{item.name || 'Product'}</strong> <span style={{ color: '#666' }}>{item.price ? `- $${item.price}` : ''}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
