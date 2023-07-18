import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from "./images/logo.svg";
import "./App.css";


import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="Nav">
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>

        <div>
          <NavLink to="/product">Products</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button type='submit' className="cart">cart</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
