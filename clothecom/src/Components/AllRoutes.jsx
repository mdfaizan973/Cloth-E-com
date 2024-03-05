import Cart from "../Pages/Cart";
import CheckoutForm from "../Pages/CheckoutForm ";
import Clothes from "../Pages/Clothes";
import DonePage from "../Pages/DonePage";
import Home from "../Pages/Home";
import { Routes, Route } from "react-router-dom";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/clothes" element={<Clothes />}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckoutForm />}></Route>
        <Route path="/checkout_done" element={<DonePage />}></Route>
      </Routes>
    </div>
  );
}
