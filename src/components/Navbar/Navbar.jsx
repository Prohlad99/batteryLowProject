import { useContext, useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import avater from "../../assets/images/me.png";
import { CartContext } from "../../context/CartStore";
import { NavItems as Items } from "../../utilities/NavItems";
import { UserContext } from "./../../context/UserStore";
//top bar
export const Top = () => {
  return (
    <div className="h-[49px] flex items-center">
      <marquee className="font-bold" direction="left">
        WoWnex বাংলাদেশের বিশ্বস্ত অনলাইন শপ, সারাদেশে ক্যাশ অন ডেলিভারি (৪৮
        থেকে ৭২ ঘণ্টার মধ্যে) হটলাইনঃ 01710696950
      </marquee>
    </div>
  );
};

// middle
export const Middle = () => {
  const { cart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [isOpenAvatar, setIsOpenAvatar] = useState(false);
  //show the dropdown menu when click on the icon
  const handleOpenAvatar = () => {
    setIsOpenAvatar(!isOpenAvatar);
  };

  console.log(user);

  return (
    <div className="flex items-center justify-between gap-4 pr-4 md:pr-0 bg-white">
      <div className="h-[70px]  w-full grid grid-cols-12 bg-white md:px-10 px-1">
        <div className="col-span-2 hidden md:block  place-self-center">
          <Link to="/">
            <img
              className=""
              src="../../../src/assets/logo/logo.png"
              alt="brand logo"
            />
          </Link>
        </div>
        <div className="col-span-11 md:col-span-9  place-self-center w-full justify-self-center flex justify-center">
          <div className=" border-[1px] border-[#FF4747] rounded-[15px] pl-1 w-[80%] h-[48px] flex justify-between">
            <input
              className="px-3 outline-none w-full  rounded-l-[15px]"
              type="text"
              placeholder="Search"
            />
            <button className="bg-[#FF4747] rounded-r-[15px] w-[80px] px-4">
              Search
            </button>
          </div>
        </div>
        <div className="flex items-center gap-5 col-span-1 place-self-center justify-self-end">
          <div className="relative hidden md:block">
            {user ? (
              <div
                onClick={() => handleOpenAvatar()}
                className="h-[40px] cursor-pointer overflow-hidden w-[40px] border-[1px] border-red-400 rounded-full"
              >
                <img className="h-[39px] w-[39px]" src={avater} alt="" />
              </div>
            ) : (
              <button className="border-[1px] px-2 py-1 rounded-full mt-4 text-xs">
                Sign In
              </button>
            )}
            {isOpenAvatar && (
              <div className="rounded-md overflow-hidden shadow-lg -bottom-[120px] font-semibold absolute text-center -left-12 bg-blue-500 p-3  w-[150px] z-50">
                <small>Prohlad Mandal</small>
                <br />
                <small>prohlad.m99@gmail.com</small>
                <br />
                <button className="border-[1px] px-2 py-1 rounded-full mt-4 text-xs">
                  Sing Out
                </button>
              </div>
            )}
          </div>
          <Link to="/cart">
            <div className="relative">
              <img
                className="w-[35px]"
                src="../../../src/assets/icons/cart.png"
                alt=""
              />
              <p className="bg-[#FF4747] rounded-full flex justify-center items-center w-[20px] h-[20px] text-white text-[12px] absolute top-0 -right-2">
                {cart.length}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isOpenAvatar, setIsOpenAvatar] = useState(false);
  const { user } = useContext(UserContext);
  //show the dropdown menu when click on the icon
  const handleOpenAvatar = () => {
    setIsOpenAvatar(!isOpenAvatar);
  };

  const handleDropDown = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <Top />
      <Middle />
      <div className="bg-[#FF4747]">
        <div
          className={`h-[50px] flex justify-between items-center bg-blue-200 md:mx-10 text-white  relative`}
        >
          <div className="md:hidden">
            <Link to="/">
              <img
                className="w-[150px]"
                src="../../../src/assets/logo/logo.png"
                alt="brand logo"
              />
            </Link>
          </div>
          <ul
            className={`p-4 md:h-full items-center border-t-[1px] z-10 border-blue-400  bg-[#FF4747]  md:flex md:justify-between absolute w-full top-[50px] -left-full md:left-0 md:top-0 md:border-none transition-all ease-in-out delay-200 ${
              isNavOpen ? "left-0" : ""
            }`}
          >
            <li>
              <p
                className="md:hidden my-2 flex  gap-2 items-center"
                onClick={handleDropDown}
              >
                <span>All Categories </span>
                <span
                  className={`text-white text-xl ${
                    isCategoryOpen ? "rotate-180" : ""
                  }`}
                >
                  <FaCaretDown />
                </span>
              </p>
              <p className="hidden md:block ">
                <span className="flex  gap-2 items-center">
                  <span>All Categories</span>
                  <span className="text-white text-xl">
                    <FaCaretDown />
                  </span>
                </span>
              </p>
              <ul
                className={`bg-red-300 rounded-[15px] p-4 ml-4 transition-all ease-in-out delay-300 ${
                  isCategoryOpen ? "block" : "hidden"
                }`}
              >
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
            </li>
            <li>
              <ul className="md:flex gap-6">
                <li className="my-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="my-2">
                  <Link to="/flash-sale">Flash Sale</Link>
                </li>
                <li className="my-2">
                  <Link to="/hot-products">Hot Product</Link>
                </li>
                <li className="my-2">
                  <Link to="#">Shop</Link>
                </li>
                <li className="my-2">
                  <p className="flex items-center gap-1">
                    <span className="flex items-center gap-2 font-thin">
                      <span>
                        <IoCallOutline />
                      </span>{" "}
                      Hotline:
                    </span>
                    01710-696950
                  </p>
                </li>
              </ul>
            </li>
          </ul>
          <div>
            {/* avatar */}
            {user ? (
              <div className="relative md:hidden">
                <div
                  onClick={() => handleOpenAvatar()}
                  className="h-[40px] cursor-pointer overflow-hidden w-[40px] border-[1px] border-red-400 rounded-full"
                >
                  <img
                    className="h-[39px] w-[39px]"
                    src={user.photoURL}
                    alt=""
                  />
                </div>
                {isOpenAvatar && (
                  <div className="rounded-md overflow-hidden shadow-lg -bottom-[120px] font-semibold absolute text-center -left-12 bg-blue-500 p-3  w-[150px] z-50">
                    <small>{user.displayName}</small>
                    <br />
                    <small>prohlad.m99@gmail.com</small>
                    <br />
                    <button className="border-[1px] px-2 py-1 rounded-full mt-4 text-xs">
                      Sing Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <button>Sign In</button>
            )}
            {/* end avatar  */}
          </div>
          <div className="mr-2 md:hidden">
            {isNavOpen ? (
              <button onClick={handleNav} className="text-4xl text-black">
                <IoMdClose />
              </button>
            ) : (
              <button onClick={handleNav} className="text-4xl text-black">
                <RxHamburgerMenu />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
