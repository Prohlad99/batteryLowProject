import { createContext, useState } from "react";

export const ProductContext = createContext();

const ProductStore = ({ children }) => {
  const [detailsProduct, setDetailsProduct] = useState([]);

  //   add product
  const addDetailsProduct = (product) => {
    setDetailsProduct(product);
  };

  const value = {
    detailsProduct,
    setDetailsProduct,
    addDetailsProduct,
  };
  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

export default ProductStore;
