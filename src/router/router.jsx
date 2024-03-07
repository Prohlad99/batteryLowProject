import { createBrowserRouter } from "react-router-dom";
import SignUp from "../components/auth/SignUp";
import SignIn from "../components/auth/SignIn";
import Congra from "../components/congra/Congra";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import FlashSaleProducts from "../pages/FlashSaleProducts";
import Home from "../pages/Home";
import HotProducts from "../pages/HotProducts";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "hot-products/",
    element: <HotProducts />,
  },
  {
    path: "flash-sale/",
    element: <FlashSaleProducts />,
  },
  {
    path: "product/:productId",
    element: <ProductDetails />,
  },
  {
    path: "products/category/:categoryName",
    element: <Category />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "auth/sign-in",
    element: <SignIn />,
  },
  {
    path: "order/confirmation",
    element: <Congra />,
  },
  {
    path: "auth/sign-up",
    element: <SignUp />,
  },
]);
