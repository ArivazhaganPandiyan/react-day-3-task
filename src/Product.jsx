// Product.js

import React from 'react';
import './Product.css';

function Product({ product, addToCart, removeFromCart, isInCart }) {
  return (
    <div className="product-card">
      <img src={`./public/images/${product.id}.jpg`} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>{product.ratings}</p>
      <p>{product.price}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      )}
    </div>
  );
}

export default Product;
