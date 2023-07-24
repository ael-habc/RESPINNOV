import React, { createContext, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from "./images/logo.svg";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Cart from "./Cart";
import Products from "./Pages/Product";
import Reclamation from "./Pages/Reclamation";

export const CartContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <div className="Nav">
          <NavLink to="/" className="logo">
            <img src={logo} alt="logo" />
          </NavLink>

          <div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/product">Products</NavLink>
            <NavLink to="/reclamation">Reclamation</NavLink>
            <NavLink to="/cart">cart</NavLink>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reclamation" element={<Reclamation />} />
        </Routes>
        
      </BrowserRouter>
      
    </CartContext.Provider>
  );
}

export default App;
