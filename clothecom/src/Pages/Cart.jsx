import { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export default function Cart() {
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("myclothesCart")) || []
  );
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + +item.price, 0);
  };
  const handleDeleteCartItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    localStorage.setItem("myclothesCart", JSON.stringify(updatedCart));
    alert("Product Removed from the Cart 🎊🎊");
  };

  function truncateText(text, maxLength) {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + "...";
  }

  return (
    <DIV>
      <div className="container">
        <h1>Shopping Cart</h1>
        {cartItems.map((ele, i) => (
          <div className="cart-item" key={i}>
            <img src={ele.img1} alt="Product Image" />
            <div className="cart-item-info">
              <div className="cart-item-title">{ele.title}</div>
              <div className="cart-item-description">
                {truncateText(ele.disc, 60)}
              </div>

              <div className="cart-item-price">$ {ele.price}</div>
            </div>
            <button
              className="remove-button"
              onClick={() => handleDeleteCartItem(i)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: "20px",
          borderTop: "1px solid #ddd",
          paddingTop: "10px",
        }}
      >
        <div className="total-box">
          <div className="total-items">Total Items: {cartItems.length} </div>
          <div className="total-price">Total Price: $ {getTotalPrice()}</div>
          <RouterLink to="/checkout">
            <button className="checkout">Checkout</button>{" "}
          </RouterLink>
        </div>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  .total-box {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    margin-top: 20px;
    width: 13%;
    margin: auto;
    position: absolute;
    top: 15%;
    right: 5%;
  }

  .total-items,
  .total-price {
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .total-items::after,
  .total-price::after {
    content: "";
    display: block;
    border-bottom: 1px solid #ddd;
    margin-top: 5px;
  }
  .checkout {
    background-color: #007bff;
    color: white;
    padding: 5px 12px;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    cursor: pointer;
    margin-top: 20px;
  }

  .checkout:hover {
    background-color: #0056b3;
  }

  .container {
    max-width: 800px;
    margin: 20px auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  .cart-item {
    display: flex;
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    margin-bottom: 10px;
    align-items: center;
  }

  .cart-item img {
    width: 120px;
    height: 120px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 10px;
  }

  .cart-item-info {
    flex: 1;
  }

  .cart-item-title {
    font-size: 18px;
    margin-bottom: 5px;
  }

  .cart-item-description {
    color: #666;
    margin-bottom: 10px;
  }

  .cart-item-price {
    font-weight: bold;
  }

  .remove-button {
    background-color: #ff4500;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }

  .remove-button:hover {
    background-color: #e04111;
  }
`;
