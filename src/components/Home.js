import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assests/home.css';

function Home() {
  const navigate = useNavigate(); 

  const handleShopNow = () => {
    navigate('/products'); 
  };

  return (
    <div className="home-container">
      <h1>Welcome to Shopsy</h1>
      <p>Welcome to Shoppy, where elegance meets convenience. Explore our curated collection of premium products, from the latest electronics to stylish fashion and home essentials. With an intuitive interface and exclusive offers, your shopping experience is seamless and delightful. Begin your journey with us today and discover the joy of finding the perfect items for yourself and your loved ones!</p>
      <button className="shop-now-btn" onClick={handleShopNow}>Shop Now</button>
    </div>
  );
}

export default Home;
