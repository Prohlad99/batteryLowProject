import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";
import { Link } from "react-router-dom";
import img from "../../assets/images/authentication1.png";
import { UserContext } from "./../../context/UserStore";
import app from "./../../firebase/firebase.config";
import "./style.css";

const SignIn = () => {
  const provider = new GoogleAuthProvider();
  const { user, addUser } = useContext(UserContext);

  const auth = getAuth(app);
  const [error, setError] = useState();

  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const AuthUser = result.user;
        GoogleAuthProvider.credentialFromResult(result);
        addUser(AuthUser);
      })
      .then((error) => setError(error));
  };
  console.log(user);

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="pt-[90px]">
      {/* container  */}
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center items-center md:w-[80%] w-full h-auto py-4 bg-white mx-auto form-container rounded-md mb-28">
        {/* image  */}
        <div className="hidden md:block">
          <img className="w-[500px]" src={img} alt="" />
        </div>
        {/* form  */}
        <div className="flex md:w-[70%] w-[95%] mx-auto justify-end flex-col items-center form rounded-md">
          <h1 className="text-xl font-semibold mt-4">Sign In</h1>
          <div className="w-[30%] h-[5px] rounded-lg bg-slate-600"></div>
          <form action="" className="w-full px-10 py-10">
            <div className="my-3">
              <label htmlFor="email">Email</label>
              <br />
              <input
                className="py-2 mt-2 px-3 w-full border-[1px] border-blue-300 rounded-sm outline-none"
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <br />
              <input
                className="py-2 mt-2 px-3 w-full border-[1px] border-blue-300 rounded-sm outline-none"
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
              />
            </div>

            <div className="mt-6">
              <button
                onClick={(e) => handleSignIn(e)}
                className="w-full rounded-lg py-2 px-3 hover:bg-green-600 bg-slate-600 ease-in-out duration-300 text-white"
              >
                Sign In
              </button>
            </div>
          </form>

          <div>
            <p className="text-center text-[#D1A054]">
              New here?{" "}
              <span>
                <Link to="/auth/sign-up">Create a New Account</Link>
              </span>
            </p>
            <p className="text-center my-3">Or sign in with</p>
            <div className="flex justify-center gap-4 mb-10 mt-4 text-[#444444] text-xl">
              <span className="cursor-pointer border-[1px] border-blue-600 rounded-full p-1 hover:bg-blue-700 hover:text-white ease-in-out duration-300">
                <GrFacebookOption />
              </span>
              <span
                onClick={() => handleGoogleLogin()}
                className="border-[1px] cursor-pointer border-blue-600 rounded-full p-1 hover:bg-red-700 hover:text-white ease-in-out duration-300"
              >
                <FaGoogle />
              </span>
              <span className="cursor-pointer border-[1px] border-blue-600 rounded-full p-1 hover:bg-green-700 hover:text-white ease-in-out duration-300">
                <FaGithub />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
