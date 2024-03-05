import styled from "styled-components";
import { CiFacebook, CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
export default function Footer() {
  return (
    <FooterContainer>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Compagny</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy plicy</a>
                </li>
                <li>
                  <a href="#">affiliate</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Get Help</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">shipping</a>
                </li>
                <li>
                  <a href="#">returns</a>
                </li>
                <li>
                  <a href="#">order status</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>online shop</h4>
              <ul>
                <li>
                  <a href="#">watch</a>
                </li>
                <li>
                  <a href="#">bag</a>
                </li>
                <li>
                  <a href="#">shoes</a>
                </li>
                <li>
                  <a href="#">dress</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="#">
                  <CiFacebook />
                </a>
                <a href="#">
                  <CiTwitter />
                </a>
                <a href="#">
                  <CiInstagram />
                </a>
                <a href="#">
                  <CiYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  margin-top: 5px;
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
  }

  .container {
    max-width: 1170px;
    margin: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
  }
  .footer {
    padding: 70px 0;
  }
  .footer-col {
    width: 25%;
    padding: 0 15px;
  }
  .footer-col h4 {
    font-size: 18px;
    color: black;
    text-transform: capitalize;
    margin-bottom: 35px;
    font-weight: 500;
    position: relative;
  }
  .footer-col h4::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: -10px;
    background-color: #e91e63;
    height: 2px;
    width: 50px;
  }
  .fotter-col ul li:not(:last-child) {
    margin-bottom: 10px;
  }
  .footer-col ul li a {
    font-size: 16px;
    text-transform: capitalize;
    color: black;

    text-decoration: none;
    font-weight: 300;
    color: #bbb;
    display: block;
    transition: all 0.3s ease;
  }
  .footer-col ul li a:hover {
    color: black;

    padding-left: 10px;
  }
  .footer-col .social-links a {
    display: inline-block;
    height: 40px;
    width: 40px;
    background-color: rgba(255, 255, 255, 0.2);
    margin: 0 10px 10px 0;
    text-align: center;
    line-height: 40px;
    border-radius: 50%;
    color: black;
  }
  .footer-col .social-links a:hover {
    color: #24262b;
    background-color: gray;
  }

  /* responsive */
  @media (max-width: 767px) {
    .footer-col {
      width: 50%;
      margin-bottom: 30px;
    }
  }
  @media (max-width: 574px) {
    .footer-col {
      width: 100%;
    }
  }
`;
