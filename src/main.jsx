import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import CartStore from "./context/CartStore.jsx";
import ProductStore from "./context/ProductStore.jsx";
import UserStore from "./context/UserStore.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserStore>
    <CartStore>
      <ProductStore>
        <App />
      </ProductStore>
    </CartStore>
  </UserStore>
);
