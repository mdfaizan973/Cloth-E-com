// import React from 'react'
import { useEffect, useState } from "react";
import styled from "styled-components";
import MarqueeLeft from "./MarqueeLeft";
import MarqueeRight from "./MarqueeRight";

export default function Clothes() {
  const [clothingData, setClothingData] = useState([]);
  const [page, setPage] = useState(1);
  const [load, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://fashionzonelink.onrender.com/web_data?_limit=9&_page=${page}`
    )
      .then((response) => response.json())
      .then((data) => {
        const randomizedData = shuffle(data);
        setClothingData(randomizedData);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [page]);

  //   console.log(clothingData);
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }
  const handleCart = (ele) => {
    const existingCart =
      JSON.parse(localStorage.getItem("myclothesCart")) || [];

    // Push the new element into the existing array
    existingCart.push(ele);

    // Save the updated array back to localStorage
    localStorage.setItem("myclothesCart", JSON.stringify(existingCart));
  };
  return (
    <DIV>
      {load ? (
        <div className="loder">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="grid_container">
          {clothingData.map((ele, i) => (
            <div className="card" key={i}>
              <div className="img_container">
                <img src={ele.img1} alt="Product Image" />
              </div>
              <div className="card-content">
                <h4 className="card-title">{ele.title}</h4>
                <p className="card-price">$ {ele.price}</p>
                <button className="btn-cart" onClick={() => handleCart(ele)}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="pagination_container">
        <button
          disabled={page == 1}
          className="pagination_button"
          onClick={() => setPage(page - 1)}
        >
          Prev
        </button>

        <button className="pagination_button">{page}</button>
        <button
          disabled={page == 6}
          className="pagination_button"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
      <MarqueeLeft />
      <div className="space"></div>
      <MarqueeRight />
    </DIV>
  );
}
const DIV = styled.div`
  .space {
    margin: 5px 0;
  }
  .sec_container {
    width: 90%;
    margin: auto;
  }

  .grid_container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    width: 80%;
    margin: auto;
    padding-left: 4%;
  }

  .img_container {
    width: 100%;
    height: 85%;
    overflow: hidden;
  }

  .card {
    display: flex;
    flex-direction: column;
    border: 1px solid #ddd;
    border-radius: 5px;
    overflow: hidden;
    width: 300px;
    height: 400px;
    margin: 20px;
  }

  .card img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
    object-fit: contain;
  }

  .card-content {
    padding: 10px;
  }

  .card-title {
    font-size: 16px;
    margin: 0 0 5px;
  }

  .card-price {
    font-size: 16px;
    color: #666;
    margin: 0;
  }

  .btn-cart {
    background-color: #f29537;

    color: #fff;
    border: none;
    padding: 7px 12px;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
  }

  .btn-cart:hover {
    background-color: #ea8826;
  }
  /* pagination  */
  .pagination_container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  .pagination_button {
    border: none;
    background-color: #f2f2f2;
    color: #333;
    padding: 8px 16px;
    margin: 0 4px;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s;
  }

  .pagination_button:hover {
    background-color: #ddd;
  }

  .pagination_button:focus {
    background-color: #f29537;

    color: white;
  }

  .loder {
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .loader {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #007bff;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
