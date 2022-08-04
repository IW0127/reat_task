import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { Context } from "./Context";
import Header from "./Header";
import Home from "./Home";
import Cart from "./Cart";
function Main() {
  const [cart, setCart] = useState([]);
  return (
    <Context value={{ cart, setCart }}>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Context>
  );
}

export default Main;
