import React, { createContext, useContext, useState } from 'react';

const CartWishlistContext = createContext();

export function useCartWishlist() {
  return useContext(CartWishlistContext);
}

export function CartWishlistProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);


  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };

  const removeFromWishlist = (product) => {
    setWishlist((prev) => prev.filter(item => item.name !== product.name));
  };

  return (
    <CartWishlistContext.Provider value={{ cart, wishlist, addToCart, addToWishlist, removeFromWishlist }}>
      {children}
    </CartWishlistContext.Provider>
  );
}
