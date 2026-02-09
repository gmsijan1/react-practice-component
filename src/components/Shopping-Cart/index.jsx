import { useState, useEffect } from "react";
import "./style.css";

export default function ShoppingCart() {
  const products = [
    { id: 1, name: "Apple", price: 2 },
    { id: 2, name: "Banana", price: 1 },
    { id: 3, name: "Mango", price: 3 },
  ];

  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCart(JSON.parse(savedCart));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const handleDecreaseQty = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  const clearCart = () => {
    setCart([]);
    setPromoCode("");
    setDiscount(0);
  };

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const getFinalTotal = () => {
    const subtotal = getTotal();
    return subtotal - subtotal * discount;
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.qty, 0);

  const applyPromo = () => {
    if (promoCode.trim().toUpperCase() === "SAVE10") setDiscount(0.1);
    else setDiscount(0);
  };

  return (
    <div className="cart-container">
      <h1>
        Shopping Cart{" "}
        {cart.length > 0 && <span>({getTotalItems()} items)</span>}
      </h1>

      <h2>Products</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <h2 className="cart-title">Cart</h2>
      {cart.length === 0 && <p>Your cart is empty.</p>}

      {cart.length > 0 && (
        <div>
          <button className="clear-btn" onClick={clearCart}>
            Clear Cart
          </button>

          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <span className="item-name">{item.name}</span>
              <span>Price: ${item.price}</span>
              <span>Qty: {item.qty}</span>
              <button onClick={() => handleAddToCart(item)}>+</button>
              <button onClick={() => handleDecreaseQty(item.id)}>-</button>
              <button onClick={() => handleRemoveFromCart(item.id)}>
                Remove
              </button>
              <span className="subtotal">
                Subtotal: ${item.price * item.qty}
              </span>
            </div>
          ))}

          <div className="promo-section">
            <input
              type="text"
              placeholder="Promo code (SAVE10)"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={applyPromo}>Apply</button>
          </div>

          <h3>Subtotal: ${getTotal().toFixed(2)}</h3>
          {discount > 0 && (
            <p>Discount applied: {(discount * 100).toFixed(0)}%</p>
          )}
          <h2>Total to Pay: ${getFinalTotal().toFixed(2)}</h2>
        </div>
      )}
    </div>
  );
}
