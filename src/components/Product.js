import React from 'react';
import './assests/product.css';

const Product = ({ incrementCart }) => {
  const products = {
    electronics: [
      { id: 1, name: "Smartphone", price: 170, img: require('./assests/images/smartphone.png') },
      { id: 2, name: "Smartwatch", price: 99, img: require('./assests/images/smartwatch.png') },
      { id: 3, name: "Airdope", price: 125, img: require('./assests/images/airdope.png') }, 
      { id: 4, name: "NeckBand", price: 120, img: require('./assests/images/neckband.png') },
      { id: 5, name: "MiniSpeaker", price: 150, img: require('./assests/images/speaker.png') }
    ],    
    clothing: [
      { id: 6, name: "Ferrari-T-shirt", price: 640, img: require('./assests/images/Clothing/T-shirt.png') },
      { id: 7, name: "Set Of Two Light Brown & Black Premium Trousers", price: 17.83, img: require('./assests/images/Clothing/Pants.png') },
      { id: 8, name: "Blazer co-ord set", price: 30, img: require('./assests/images/Clothing/cordset.png') },
      { id: 9, name: "Vertical-striped-Shirt", price: 19, img: require('./assests/images/Clothing/Shirt.png') },
      { id: 10, name: "Saree", price: 100, img: require('./assests/images/Clothing/saree.png') },
    ],
    accessories: [
      { id: 11, name: "Ferrari-Sunglasses", price: 100, img: require('./assests/images/Accecories/sunglasses.png') },
      { id: 12, name: "Men-Watch", price: 70, img: require('./assests/images/Accecories/watch.png') },
      { id: 13, name: "Shoes", price: 150, img: require('./assests/images/Accecories/shoes.png') },
      { id: 14, name: "Handbag", price: 250, img: require('./assests/images/Accecories/handbag.png') },
      { id: 15, name: "Heels", price: 380, img: require('./assests/images/Accecories/heels.png') },
    ],
    toys: [
      { id: 16, name: "Transformer", price: 90, img: require('./assests/images/Toys/transformer.png') },
      { id: 17, name: "Cars-Puzzle", price: 17, img: require('./assests/images/Toys/puzzle.png') },
      { id: 18, name: "Lego-Mclaren-Formula1", price: 50, img: require('./assests/images/Toys/lego.png') },
      { id: 19, name: "Hotweels-set", price: 50, img: require('./assests/images/Toys/set.png') },
      { id: 20, name: "Chess", price: 20, img: require('./assests/images/Toys/gaming.png') },
    ],
    books: [
      { id: 21, name: "Atomic Habits", price: 15, img: require('./assests/images/Books/atomic-habits.png') },
      { id: 22, name: "Twisted-series-4(set)", price: 30, img: require('./assests/images/Books/twisted.png') },
      { id: 23, name: "Ikigai", price: 11.56, img: require('./assests/images/Books/ikigai.png') },
      { id: 24, name: "Power", price: 20, img: require('./assests/images/Books/power.png') },
      { id: 25, name: "Sherlockhomes", price: 20, img: require('./assests/images/Books/sherlockhomes.png') },
    ],
  };

  const addToCart = (product) => {
    incrementCart(product);
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-container">
      <h1>Products</h1>
      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="product-category">
          <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="product-grid">
            {items.map((product) => (
              <div className="product-card" key={product.id}>
                <img src={product.img} alt={product.name} />
                <h3>{product.name}</h3>
                <p>${product.price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
