import styled from "styled-components";
import { BsCartDashFill, BsFillFilePersonFill } from "react-icons/bs";
import { Link as RouterLink } from "react-router-dom";
export default function Navbar() {
  return (
    <DIV>
      <div className="container">
        <nav>
          <ul>
            <RouterLink to="/">
              <li className="logo">MyCloths</li>
            </RouterLink>
            <li></li>
            <RouterLink to="/">
              <li>Home</li>
            </RouterLink>
            <RouterLink to="/clothes">
              <li>Cloths</li>
            </RouterLink>
            <RouterLink to="/clothes">
              <li>Fashion</li>
            </RouterLink>
            <li>Blog</li>
            <li></li>
            <li>
              <BsCartDashFill />
            </li>
            <li>
              <BsFillFilePersonFill />
            </li>
          </ul>
        </nav>
      </div>
    </DIV>
  );
}
const DIV = styled.div`
  nav {
    background: #fff;
    border-radius: 50px;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    text-align: center;
  }
  nav ul li {
    list-style: none;
    display: inline-block;
    padding: 15px 35px;
    margin: 10px;
    font-size: 18px;
    font-weight: 500;
    color: black;
    cursor: pointer;
    position: relative;
    z-index: 2;
    transition: color 0.5s;
  }

  nav ul li::after {
    content: "";
    background: black;
    width: 0; /* Change from width: 100%; */
    height: 2px; /* Add height to create the underline effect */
    border-radius: 2px; /* Adjust border-radius as needed */
    position: absolute;
    bottom: 0; /* Position the underline at the bottom */
    left: 50%;
    transform: translateX(-50%); /* Center the underline */
    z-index: -1;
    opacity: 0;
    transition: width 0.5s, opacity 0.5s;
  }

  nav ul li:hover::after {
    width: 100%;
    opacity: 1;
  }

  .logo {
    font-size: 1.5rem;
    font-weight: bold;
  }
`;
