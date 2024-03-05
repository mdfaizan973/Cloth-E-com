import styled from "styled-components";
import MarqueeRight from "./MarqueeRight";
import MarqueeLeft from "./MarqueeLeft";
// import Marquee from "./Marquee";
export default function Home() {
  let array = [
    {
      img: "https://i.pinimg.com/564x/b2/32/c6/b232c610dcc1d5976fa6f1552f51b690.jpg",
      name: "Midi Dress",
    },
    {
      img: "https://i.pinimg.com/564x/b5/a1/da/b5a1dae0fa0a9aafbb3b4ba0aba38c2f.jpg",
      name: "Bomber Jackets",
    },
    {
      img: "https://i.pinimg.com/564x/1d/05/e8/1d05e89d70ad86d871d154093a4412c2.jpg",
      name: "Wrap Dress",
    },
    {
      img: "https://i.pinimg.com/564x/15/01/91/150191024da77b066a1cd06878aa3040.jpg",
      name: "Polo Shirt",
    },
    {
      img: "https://i.pinimg.com/564x/9d/18/94/9d1894f97be80387ecd2c7bc352000f2.jpg",
      name: "Peplum Dress",
    },
    {
      img: "https://i.pinimg.com/564x/33/18/ad/3318ad0bc1f2a2f39c5124f2beb49200.jpg",
      name: "Check Shirt",
    },
  ];
  return (
    <DIV>
      <div className="banner"></div>
      <div className="sec_container">
        <MarqueeRight />
        <h1 className="trending">Trending..</h1>
        <div className="grid_container">
          {array.map((ele, i) => (
            <div className="card" key={i}>
              <div className="img_container">
                <img src={ele.img} alt="Product Image" />
              </div>
              <div className="card-content">
                <h3 className="card-title">{ele.name}</h3>
                {/* <p className="card-price">$19.99</p>
                <button className="btn-cart">Add to Cart</button> */}
              </div>
            </div>
          ))}
        </div>
        <MarqueeLeft />

        {/* <Marquee /> */}
        <p className="paragraph">
          Discover the perfect blend of style and comfort with our extensive
          collection of clothing on our website. From casual everyday essentials
          to elegant evening wear, we offer a diverse range of options for every
          occasion. Explore our curated selection of high-quality fabrics and
          trendy designs, ensuring you stay fashionable and comfortable. Whether
          you are looking for the latest trends or timeless classics, our
          collection has something for everyone. With a focus on quality and
          affordability, we strive to provide you with stylish clothing that
          fits your budget. Shop now and elevate your wardrobe with our
          versatile and chic clothing options.
        </p>
      </div>
      <div className="banner_2"></div>
    </DIV>
  );
}
const DIV = styled.div`
  .trending {
    font-size: 3rem;
    text-align: center;
    margin: 20px 0;
  }
  .sec_container {
    width: 90%;
    margin: auto;
  }

  .paragraph {
    font-size: 1.5rem;
    line-height: 1.5;
    color: grey;
    margin: 10px 0;
  }
  .banner {
    background-image: url("https://marketplace.canva.com/EAFrVwT8vwk/1/0/1600w/canva-gray-green-fashion-new-autumn-collection-photo-collage-promotion-banner-xH87E2cPSlE.jpg");
    background-size: cover;
    background-position: center;
    height: 300px;
    display: flex;
    margin: 10px;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    font-size: 2rem;
    font-weight: bold;
  }
  .banner_2 {
    background-image: url("https://marketplace.canva.com/EAFrg5T4XkA/1/0/1600w/canva-gray-black-minimalist-feminine-fashion-social-media-mockup-photo-collage-banner-GnHF1bUv1Kc.jpg");
    background-size: cover;
    background-position: center;
    height: 300px;
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
  }
  .grid_container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    width: 80%;
    margin: auto;
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
  .img_container {
    width: 100%;
    height: 80%;
    overflow: hidden;
  }
  .card img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
  }

  .card-content {
    padding: 10px;
  }

  .card-title {
    font-size: 20px;
    margin: 0 0 5px;
  }

  .card-price {
    font-size: 16px;
    color: #666;
    margin: 0;
  }

  .btn-cart {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 12px;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 10px;
  }

  .btn-cart:hover {
    background-color: #0056b3;
  }
`;
