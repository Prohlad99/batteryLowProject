import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import { NavItems as Items } from "../../utilities/NavItems";

import { useState } from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
  const [images, setImages] = useState([img1, img2, img3, img4, img5]);
  return (
    <div>
      <div className="grid grid-cols-12  gap-6 mt-4 h-[301px] md:mx-10 mx-2">
        <div className="col-span-3 h-[301px] hidden md:block overflow-y-scroll no-scrollbar">
          <div className=" grid justify-end">
            <ul className="bg-white inline-block py-3 pl-3 pr-10 rounded-[15px] ">
              {Items.map((item, key) => (
                <li key={key} className="my-2">
                  <Link to="#">
                    <span className="flex items-center gap-2">
                      <span>{item.icon}</span>
                      <span>{item.name}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 h-[301px] ">
          <Carousel
            autoPlay
            interval="3000"
            showArrows={true}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            className="text-center h-[301px]"
          >
            {images.map((image, index) => (
              <div key={index}>
                <img className="h-[301px]" src={image} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <HeroBottom />
    </div>
  );
};

export const HeroBottom = () => {
  return (
    <div className="md:h-[60px] h-auto bg-[#E9D8DC] md:mx-10 mx-2 my-4 gap-2 px-2 py-1 grid grid-cols-2 md:grid-cols-4 items-center justify-items-center rounded-[15px] ">
      <div>
        <span className="flex items-center gap-2">
          <span>
            <img src="../../../src/assets/icons/truck.png" alt="icon" />
          </span>
          <span className="font-bold text-sm md:text-base">
            Cash on Delivery
          </span>
        </span>
      </div>
      <div>
        <span className="flex items-center gap-2">
          <span>
            <img src="../../../src/assets/icons/arrow.png" alt="icon" />
          </span>
          <span className="font-bold text-sm md:text-base">
            Free & Easy Returns
          </span>
        </span>
      </div>
      <div>
        <span className="flex items-center gap-2">
          <span>
            <img src="../../../src/assets/icons/price.png" alt="icon" />
          </span>
          <span className="font-bold text-sm md:text-base">
            Best Price Guaranteed
          </span>
        </span>
      </div>
      <div>
        <span className="flex items-center gap-2">
          <span>
            <img src="../../../src/assets/icons/star.png" alt="icon" />
          </span>
          <span className="font-bold text-sm md:text-base">
            100% Authentic Products
          </span>
        </span>
      </div>
    </div>
  );
};
