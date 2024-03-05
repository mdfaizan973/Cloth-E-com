import { useState } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowPopup(!showPopup);
  };

  return (
    <DIV>
      <div className="checkout-form">
        <div className="header">
          <h1 className="title">Fill the details</h1>
          <a href="" className="link">
            Cash On Delivery
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="card">
            <img
              src="https://w7.pngwing.com/pngs/247/564/png-transparent-computer-icons-user-profile-user-avatar-blue-heroes-electric-blue.png"
              alt="User Image"
            />
            <h2>{formData.name}</h2>
            <p>{formData.phone}</p>
            <p>{formData.email}</p>
            <p>{formData.address}</p>{" "}
            <div className="pop_btn">
              <RouterLink to="/checkout">
                <button
                  style={{ backgroundColor: "red" }}
                  onClick={togglePopup}
                >
                  Cancel
                </button>
              </RouterLink>
              <RouterLink to="/checkout_done">
                <button
                  style={{ backgroundColor: "green" }}
                  onClick={togglePopup}
                >
                  Proceed
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      )}
    </DIV>
  );
};

export default CheckoutForm;
const DIV = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .popup {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    position: absolute;
    width: 20%;
  }

  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 20px;
    width: 100%;
    text-align: center;
  }

  .card img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  .card h2,
  .card p {
    margin: 0;
    padding: 0;
  }

  .card p {
    font-size: 14px;
    color: #777;
    margin-bottom: 10px;
  }
  .pop_btn {
    display: flex;
    justify-content: space-around;
  }

  .header {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }

  .title {
    flex: 1;
    font-size: 1.4rem;
  }

  .link {
    text-align: right;
    font-size: 0.875rem;
    font-weight: 600;
    color: #4f46e5;
  }

  .checkout-form {
    width: 30%;
    margin: 0 auto;
    padding: 25px;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  label {
    display: block;
    margin-bottom: 5px;
  }
  input[type="text"],
  input[type="tel"],
  input[type="email"] {
    width: 94%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    width: 99%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  button {
    background-color: #007bff;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }

  button:focus {
    outline: none;
  }
`;
