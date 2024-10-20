import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import Cart from './components/cart';
import Checkout from './components/checkout';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  const incrementCart = (item) => {
    setCartItems([...cartItems, item]);
    setCartCount(cartCount + 1); 
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id)); 
    setCartCount(cartCount - 1); 
  };

  return (
    <Router>
      <Navbar cartCount={cartCount} /> {/* Pass cartCount to Navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Product incrementCart={incrementCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} /> {/* Pass cartItems and removeFromCart to Cart */}
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
