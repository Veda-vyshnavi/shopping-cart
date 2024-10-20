import React from 'react';
import { useNavigate } from 'react-router-dom';
import './assests/cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  const handleProceedToCheckout = () => {
    const totalPrice = calculateTotal();
    navigate('/checkout', { state: { cartItems, totalPrice: parseFloat(totalPrice) } });
  };

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart yet!</p>
      ) : (
        cartItems.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.img} alt={item.name} className="cart-item-image" /> {/* Show product image */}
            <div className="cart-item-details">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </div>
        ))
      )}
      <div className="cart-total">
        <h3>Total: ${calculateTotal()}</h3>
        <button onClick={handleProceedToCheckout}>Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
