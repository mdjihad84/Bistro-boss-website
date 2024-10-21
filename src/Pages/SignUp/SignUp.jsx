import React from "react";
import img1 from "../../assets/others/authentication.png";
import img2 from "../../assets/others/authentication2.png";

const SignUp = () => {
  return (
    <div
      style={{ backgroundImage: `url(${img1})` }}
      className="bg-cover bg-center h-screen"
    >
      <div className="flex flex-col w-full lg:flex-row-reverse items-center mx-auto h-full">
        {/* image section */}
        <div className="lg:w-[50%]">
          <img src={img2} alt="" />
        </div>
        {/* form section */}
        <div className="lg:w-[50%]">
          <h1 className="font-bold text-center">SignUp</h1>
          <form className="flex flex-col items-center">
            <div className="">
              <label className="block text-gray-700 text-sm  font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name=""
                placeholder="Type here"
                className="w-[300px] h-[35px] mb-4 p-4 text-base"
                id="1"
              />

              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                name=""
                placeholder="Enter your password"
                className="w-[300px] h-[35px] mb-4  p-4 text-base"
                id="2"
              />
              <label className="block text-gray-700 text-sm font-bold mb-2"></label>
              <input
                type="text"
                value="U A g l u o "
                name=""
                readOnly
                className="w-[300px] h-[35px] p-4 text-base outline-none"
                id="3"
              />
              <p className="link no-underline text-blue-700 mb-4">
                Reload Captcha
              </p>
              {/* <input type="text" name="" id="" /> */}
              <textarea
                name=""
                placeholder="Text here"
                className="w-[300px] h-[80px] p-4 mb-4 text-base outline-none"
                id="4"
              ></textarea>
              <br />
              <button className="w-[300px] font-bold text-white bg-[#D1A054B2] mb-4 p-4 rounded-[8px]">
                Create a account
              </button>
              {/* <h1 className="text-[#D1A054B2] text-center">
                New here? <a className="font-bold">Create a New Account</a>
              </h1> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;