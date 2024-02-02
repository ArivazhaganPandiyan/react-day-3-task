// App.js

import { useState } from 'react';
import Product from './Product';

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false); // to manage cart visibility

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    if (!cart.find(item => item.id === product.id)) {
      setCart([...cart, product]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const products = [
    { id: 1, name: 'Iphone 6', ratings:'ratings : 5 stars', price: '$ 166' },
    { id: 2, name: 'Iphone 14', ratings:'ratings : 4 stars', price: '$ 899' },
    { id: 3, name: 'Iphone 15', ratings:'ratings : 4.5 stars', price: '$ 1299' },
    // Add more products as needed
  ];

  return (
    <div>
      <header>
        <h1>Shopping Cart</h1>
        <div className="cart-button" onClick={toggleCart}>
          <p>cart -</p>
          <span className='count'>{cart.length}</span>
        </div>
      </header>

      <div className="product-list">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            isInCart={cart.some(item => item.id === product.id)}
          />
        ))}
      </div> 

      {isCartOpen && (
        <div className="cart">
          <h2>Shopping Cart ({cart.length} items)</h2>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                {item.name} - {item.price}
                <button  onClick={() => removeFromCart(item.id)} >Remove from Cart</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
