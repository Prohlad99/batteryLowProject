import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartStore from "./context/CartStore.jsx";
import ProductStore from "./context/ProductStore.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartStore>
      <ProductStore>
        <App />
      </ProductStore>
    </CartStore>
  </React.StrictMode>
);
