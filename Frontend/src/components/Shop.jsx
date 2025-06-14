import React, { useState } from "react";

// Dummy product list
const products = [
  { id: 1, name: "Pen", price: 10 },
  { id: 2, name: "Notebook", price: 50 },
  { id: 3, name: "Pencil", price: 5 },
];

const Shop = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const itemIndex = cart.findIndex(item => item.productId === productId);
    let newCart = [...cart];

    if (itemIndex === -1) {
      newCart.push({ productId, quantity: 1 });
    } else {
      newCart[itemIndex].quantity += 1;
    }

    setCart(newCart);
  };

  const getProductName = (id) => {
    return products.find(p => p.id === id)?.name || "Unknown";
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} style={{ marginBottom: "10px" }}>
          <span>{product.name} - ₹{product.price}</span>
          <button onClick={() => addToCart(product.id)} style={{ marginLeft: "10px" }}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>🧺 Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {cart.map(item => (
            <li key={item.productId}>
              {getProductName(item.productId)} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Shop;
