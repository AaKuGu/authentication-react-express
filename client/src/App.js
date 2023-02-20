import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

const App = () => {
  const [user, setUser] = useState(false);
  return (
    <div className="app_container h-screen">
      <BrowserRouter>
        <Navbar user={user} />
        <div
          className="flex items-center justify-center "
          style={{ height: "calc(100% - 70px)" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
