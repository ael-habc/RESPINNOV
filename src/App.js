import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import logo from "./images/logo.svg";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";

function App() {
  return (
    <BrowserRouter>
      <div className="Nav">
        <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>

        <div>
          <NavLink to="/about">Products</NavLink>
          <NavLink to="/dashboard">About</NavLink>
          <NavLink to="/home">Contact</NavLink>
          <button type='submit' className="cart">cart</button>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
