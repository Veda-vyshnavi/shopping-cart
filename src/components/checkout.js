import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './assests/checkout.css'; // Add styles for your Checkout component

const Checkout = () => {
  const location = useLocation();
  const { cartItems, totalPrice } = location.state || { cartItems: [], totalPrice: 0 };

  const [paymentMethod, setPaymentMethod] = useState('cash'); // Default to cash
  const [address, setAddress] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', expiry: '', cvv: '' });

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleCardDetailsChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server or display confirmation)
    alert(`Order placed! Total: $${totalPrice}, Payment Method: ${paymentMethod}`);
  };

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>No items in the cart to checkout!</p>
      ) : (
        <div>
          <h2>Your Order</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="checkout-item">
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>

          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Payment Method:
                <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                  <option value="cash">Cash on Delivery</option>
                  <option value="card">Card Payment</option>
                </select>
              </label>
            </div>

            <div>
              <label>
                Address:
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  required
                />
              </label>
            </div>

            {paymentMethod === 'card' && (
              <div>
                <h4>Card Details:</h4>
                <label>
                  Card Number:
                  <input
                    type="text"
                    name="number"
                    value={cardDetails.number}
                    onChange={handleCardDetailsChange}
                    placeholder="Card Number"
                    required
                  />
                </label>
                <label>
                  Expiry Date:
                  <input
                    type="text"
                    name="expiry"
                    value={cardDetails.expiry}
                    onChange={handleCardDetailsChange}
                    placeholder="MM/YY"
                    required
                  />
                </label>
                <label>
                  CVV:
                  <input
                    type="text"
                    name="cvv"
                    value={cardDetails.cvv}
                    onChange={handleCardDetailsChange}
                    placeholder="CVV"
                    required
                  />
                </label>
              </div>
            )}

            <button type="submit">Place Order</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
