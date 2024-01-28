import { createBrowserRouter } from "react-router-dom";
import Cart from "../pages/Cart";
import Category from "../pages/Category";
import Home from "../pages/Home";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products/",
    element: <h1>Hi</h1>,
  },
  {
    path: "product/:productId",
    element: <ProductDetails />,
  },
  {
    path: "products/category/:categroyName",
    element: <Category />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
]);
