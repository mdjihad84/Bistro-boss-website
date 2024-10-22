import React from "react";
import img1 from "../../assets/others/authentication.png";
import img2 from "../../assets/others/authentication2.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img1})` }}
      className="bg-cover bg-center h-screen">
      <div className="flex flex-col w-full lg:flex-row items-center mx-auto h-full">
        {/* image section */}
        <div className="lg:w-[50%]">
          <img src={img2} alt="" />
        </div>

        {/* form section */}
        <div className="lg:w-[50%]">
          <h1 className="font-bold text-center text-3xl font-medium text-black">Login</h1>
          <form className="flex flex-col items-center">
            <div className="">
              <label className="block text-gray-700 text-sm  font-bold mb-2">Email</label>
              <input
                type="email"
                name=""
                placeholder="Type here"
                className="w-[300px] h-[35px] mb-4 p-4 text-base bg-white"
                id="1"/>
              <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
              <input
                type="password"
                name=""
                placeholder="Enter your password"
                className="w-[300px] h-[35px] mb-4  p-4 text-base bg-white"
                id="2"/>
              <label className="block text-gray-700 text-sm font-bold mb-2"></label>
              <input
                type="text"
                value="U A g l u o "
                name=""
                readOnly
                className="w-[300px] h-[35px] p-4 text-base outline-none bg-white"
                id="3"/>
              <p className="link no-underline text-blue-700 mb-4">Reload Captcha</p>
              <textarea
                name=""
                placeholder="Text here"
                className="w-[300px] h-[80px] p-4 mb-4 text-base outline-none bg-white"
                id="4"></textarea>
              <br />
              <button className="w-[300px] font-bold text-white bg-[#D1A054B2] mb-4 p-4 rounded-[8px]">Sign In</button>
              <h1 className="text-[#D1A054B2] text-center">
                New here?{" "}
                <Link to={"/signUp"} className="font-bold">Create a New Account</Link>
              </h1>
            </div>
          </form>
          <h3 className="text-center text-black text-lg mt-3 font-medium">Or sign in with</h3>
          <div className="flex justify-center gap-10 mt-3">
            <a className="w-[52px] h-[52px] rounded-full border border-solid border-black border-[2px] flex items-center justify-center" href="https://facebook.com" target="_blank">
              <i className="fa-brands fa-facebook-f text-[20px]"></i>
            </a>
            <a className="w-[52px] h-[52px] rounded-full border border-solid border-black border-[2px] flex items-center justify-center" href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter text-[20px]"></i>
            </a>
            <a className="w-[52px] h-[52px] rounded-full border border-solid border-black border-[2px] flex items-center justify-center" href="https://github.com" target="_blank">
              <i className="fab fa-github text-[20px]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;