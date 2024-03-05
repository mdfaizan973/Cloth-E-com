import Cart from "../Pages/Cart";
import Clothes from "../Pages/Clothes";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/clothes" element={<Clothes />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
      </Routes>
    </div>
  );
}
