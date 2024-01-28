import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Allproducts = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div className=" w-full h-auto px-2 md:px-10 mt-6">
      <div className="grid items-center h-[50px] border-b-[1px]  bg-white px-4 rounded-t-[15px] border-blue-400">
        <div className="grid grid-cols-12 w-full">
          <div className="col-span-8 md:flex gap-3">
            <h1 className="md:text-xl font-bold">ALL Products</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-4  bg-white p-4 rounded-b-[15px]">
        {productsData?.map((product, index) => (
          <div key={index} data-aos="fade-up">
            <ProductCard product={product} />
          </div>
        ))}

        <div className="col-span-full flex justify-center w-full mt-4">
          <button className="border-[1px] border-[#FF4747] rounded-full px-10 py-1 text-[#FF4747] font-bold">
            LOAD MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Allproducts;
