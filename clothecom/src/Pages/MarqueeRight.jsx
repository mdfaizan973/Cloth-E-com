import styled from "styled-components";

export default function MarqueeRight() {
  return (
    <DIV>
      <marquee direction="right">
        <div className="container">
          <div className="main_container">
            <div className="image-container">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/k/q/a/s-c301-black-dennis-lingo-original-imagxgkqqahvpjej.jpeg?q=70&crop=true"
                alt="Product Image"
              />
            </div>
            <div className="image-container">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/dress/z/r/6/s-1908-sheetal-associates-original-imagmg8ybjfqr2cz.jpeg?q=70&crop=false"
                alt="Product Image"
              />
            </div>
            <div className="image-container">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/k0463rk0/dress/v/s/c/xl-ttj6004372-tokyo-talkies-original-imafjyvydznzgtba.jpeg?q=70&crop=true"
                alt="Product Image"
              />
            </div>
            <div className="image-container">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/ju1jqfk0/dress/z/p/9/s-ldr5129-yellowprint-pluss-original-imaff9fybujtjtqw.jpeg?q=70&crop=true"
                alt="Product Image"
              />
            </div>
            <div className="image-container">
              <img
                src="https://rukminim2.flixcart.com/image/416/416/kw5ag7k0/scarf/b/x/m/m-stole-for-girls-women-ladies-cotton-fabric-scarf-dupatta-shawl-original-imag8w4as4qey6gh.jpeg?q=70&crop=true"
                alt="Product Image"
              />
            </div>
            <div className="image-container">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/k7gikcw0/t-shirt/j/9/e/s-su20csj-jrthzpr-m-pln-grch-campus-sutra-original-imafpp3as2nnckpy.jpeg?q=70&crop=true"
                alt="Product man_Image"
              />
            </div>{" "}
            <div className="image-container">
              <img
                src="https://rukminim2.flixcart.com/image/416/416/xif0q/t-shirt/4/l/9/l-ztr-w-06-broon-original-imaguhjfs8dkwuqs.jpeg?q=70&crop=true"
                alt="Product man_Image"
              />
            </div>{" "}
            <div className="image-container">
              <img
                src="https://rukminim2.flixcart.com/image/832/832/xif0q/dress/q/w/t/l-metro-ma13-metronaut-original-imagwkcgtngqkvzh.jpeg?q=70&crop=true"
                alt="Product man_Image"
              />
            </div>
          </div>
        </div>
      </marquee>
    </DIV>
  );
}
const DIV = styled.div`
  background-color: rgba(240, 240, 240, 0.733);
  padding: 5px;
  border-radius: 10px;
  overflow: hidden;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .image-container {
    border: 1px solid #ddd;
    height: 150px;
    width: 150px;
    border-radius: 5px;
    padding: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
  }

  .image-container img {
    width: 100%;
    border-radius: 5px;
    object-fit: contain;
  }
  .main_container {
    display: flex;
    gap: 10px;
  }
`;
