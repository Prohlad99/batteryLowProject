import Footer from "../components/Footer/Footer";
import { Hero } from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Allproducts from "../components/Products/Allproducts";
import DiscountBanner from "../components/Products/DiscountBanner";
import FlashSale from "../components/Products/FlashSale";
import HotProduct from "../components/Products/Hotproduct";
import NewProducts from "../components/Products/NewProducts";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <FlashSale />
      <HotProduct />
      <NewProducts />
      <DiscountBanner />
      <Allproducts />
      <Footer />
    </div>
  );
};

export default Home;
