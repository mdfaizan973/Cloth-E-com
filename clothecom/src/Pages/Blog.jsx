import styled from "styled-components";

export default function Blog() {
  const blogs = [
    {
      img: "",
      disc: "Explore the world of fashion with our exquisite collection of clothing that blends style and comfort seamlessly. Our range includes trendy tops, elegant dresses, fashionable skirts, and chic pants, all crafted from high-quality fabrics to ensure durability and a perfect fit. Whether you're dressing up for a special occasion or keeping it casual for everyday wear, our clothing line has something for every wardrobe. With attention to detail and a passion for design, each piece is carefully curated to reflect the latest trends while maintaining a timeless appeal. Elevate your style and express your individuality with our stunning collection of clothes.",
      title: "Trendy Tops: Elevate Your Style with Our Latest Collection.",
    },
    {
      img: "",
      disc: "Elevate your style with our latest collection of trendy and fashionable clothes. From chic dresses to comfy loungewear, we have everything you need to stay on top of the fashion game. Explore our versatile range of tops, bottoms, outerwear, and accessories designed to effortlessly enhance your wardrobe. Whether you're dressing up for a special occasion or keeping it casual for everyday wear, our high-quality fabrics and attention to detail ensure both comfort and style. Embrace your unique personality and express yourself through our diverse selection of colors, patterns, and designs. Shop now and elevate your wardrobe today!",
      title: "Chic and Comfortable: Explore Our Stylish Bottoms Collection.",
    },
    {
      img: "",
      disc: "Indulge in the allure of fashion with our captivating collection of clothing. Embrace your unique style with our diverse range, from elegant dresses to trendy tops and chic bottoms. Crafted from premium fabrics, each piece is designed to provide both comfort and style, ensuring you look and feel confident all day long. Whether you're aiming for a casual, laid-back vibe or a sophisticated, polished look, our collection has something for every taste. Elevate your wardrobe with our exquisite clothing and make a statement with your fashion choices.",
      title:
        "Effortless Elegance: Discover the Perfect Dress for Every Occasion",
    },
    {
      img: "",
      disc: "Discover a world of fashion possibilities with our curated collection of clothing. From timeless classics to the latest trends, our range offers something for every style and occasion. Crafted from high-quality fabrics, our clothes are designed to be both stylish and comfortable, ensuring you look and feel your best. Whether you're dressing up for a special event or keeping it casual for everyday wear, our clothing is versatile enough to suit any wardrobe. Explore our collection today and find your perfect look.",
      title: "Fashion Forward: Stay on Trend with Our Latest Arrivals.",
    },
  ];
  return (
    <DIV>
      <header>
        <h1>MyCloths Blog</h1>
      </header>
      <div className="container">
        {blogs.map((ele, i) => (
          <div className="post" key={i}>
            <img src="https://via.placeholder.com/800x400" alt="Post Image" />
            <h2>{ele.title}</h2>
            <p>{ele.disc}</p>
            <a href="#" className="read-more">
              Read More
            </a>
          </div>
        ))}
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  header {
    text-align: center;
    padding: 10px 0;
  }

  .container {
    max-width: 800px;
    margin: 20px auto;
    padding: 0 20px;
  }

  .post {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
    margin-bottom: 20px;
  }

  .post img {
    max-width: 100%;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .post h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  .post p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 10px;
  }

  .post .read-more {
    display: inline-block;
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 3px;
    text-decoration: none;
    margin-top: 10px;
  }

  .post .read-more:hover {
    background-color: #555;
  }
`;
