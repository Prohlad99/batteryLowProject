import { Link } from "react-router-dom";

const Congra = () => {
  return (
    <div>
      {/* container  */}
      <div className="grid justify-items-center h-[500px] items-center justify-center">
        <div className="flex justify-center flex-col items-center -mt-16">
          <img
            className="h-[300px] mt-10"
            src="../../../src/assets/images/congra.gif"
            alt=""
          />
          <h1 className="md:text-4xl sm:text-2xl lg:text-2xl text-xl text-center my-4 text-red-400">
            We have received you order!!
          </h1>
          <Link to="/">
            <button className="border-1 bg-[#FF4747] px-4 py-1 sm:px-6 sm:py-2 md:px-6 md:py-2 text-sm sm:text-base md:text-base text-white rounded-full">
              Let&apos;s Buy
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Congra;
