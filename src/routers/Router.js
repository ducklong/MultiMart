import { Route, Routes, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRouter from "./ProtectedRouter";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<Home />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="shop/:id" element={<ProductDetails />} />
      <Route path="cart" element={<Cart />}></Route>
      <Route
        path="checkout"
        element={
          <ProtectedRouter>
            <Checkout />
          </ProtectedRouter>
        }
      />
      <Route path="login" element={<Login />}></Route>
      <Route path="signup" element={<Signup />}></Route>
    </Routes>
  );
};

export default Router;
