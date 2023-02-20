import React from "react";
import {
  AiFillGithub,
  AiFillGoogleCircle,
  AiFillFacebook,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="main flex flex-col items-center justify-around w-[70%] h-[500px] border-2 border-black">
        <div className="text-4xl font-bold text-gray-700">
          Choose A Login Method
        </div>
        <div className="flex items-center justify-center text-white">
          <div className="icons flex flex-col items-center justify-around w-[250px] gap-5 font-bold text-xl">
            <Link
              to="/"
              className="border-2 rounded-lg px-10 py-3 flex items-center justify-start gap-5 w-full"
              style={{ background: "black" }}
            >
              <AiFillGithub /> Github
            </Link>
            <Link
              to="/"
              className="border-2 rounded-lg  px-10 py-3 flex justify-start items-center gap-5 w-full"
              style={{ background: "blue" }}
            >
              <AiFillGithub />
              <span>Facebook</span>
            </Link>
            <Link
              to="https://authentication-react-express-server.vercel.app/auth/google"
              className="border-2 bg-yellow-700  rounded-lg px-10 py-3 flex items-center justify-start gap-5 w-full"
            >
              <AiFillGoogleCircle /> Google
            </Link>
          </div>
          <div className="central h-full bg-gray-700"></div>
          <div className="form flex flex-col items-center justify-center">
            <form action="">
              <input type="text" name="" id="" />
              <input type="password" name="" id="" />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
