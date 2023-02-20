import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LoginBar from "./LoginBar";
import LogoutBar from "./LogoutBar";

const Navbar = ({ user }) => {
  console.log("user : ", user);

  return (
    <div className="w-full h-[70px] bg-purple-800 text-white flex items-center justify-around font-bold ">
      <Link to="/" className="text-3xl ">
        Aadarsh App
      </Link>
      <div className="right">{user ? <LogoutBar /> : <LoginBar />}</div>
    </div>
  );
};

export default Navbar;
