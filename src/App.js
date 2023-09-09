import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes
} from "react-router-dom";
import logo from "./images/logo.svg";
import logo2 from "./images/Mindray_s_logo.png";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Product";
import Reclamation from "./Pages/Reclamation";
import Formulaire from "./Pages/Formulaire";
import Login from "./Pages/Login";
import Historique from "./Pages/Historique";
import Cookies from "js-cookie";

export const CartContext = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const location = window.location.pathname;

  useEffect(() => {
    window.scrollTo(0, 0);
    const hideNavbarRoutes = ["/login"]; // Add the paths of routes where you want to hide the navbar
    setShowNavbar(!hideNavbarRoutes.includes(location));
  }, [location]);
  function hundleLogout() {
    Cookies.remove("login");
    window.location.href = "/login";
  }
  return (
    

    <CartContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        {showNavbar && !Cookies.get(Login) && (
          <div className="Nav">
            <NavLink to="/" className="logo">
              <img src={logo} alt="logo" />
              <img src={logo2} alt="logo2" id="logoLogin2 log2" />
            </NavLink>
            <div>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/product">pieces de rechange</NavLink>
              <NavLink to="/reclamation">Reclamation</NavLink>
              <NavLink to="/formulaire">Formulaire</NavLink>
              <NavLink to="/historique">Historique</NavLink>
              <button type="button" className="btn btn-danger" onClick={hundleLogout}>
                logout
              </button>
            </div>
          </div>
        )}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/reclamation" element={<Reclamation />} />
          <Route path="/formulaire" element={<Formulaire />} />
          <Route path="/historique" element={<Historique />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;