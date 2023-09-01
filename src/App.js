import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import logo from "./images/logo.svg";
import "./App.css";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Product";
import Reclamation from "./Pages/Reclamation";
import Formulaire from "./Pages/Formulaire";
import Login from "./Pages/Login";
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
    console.log("fdsjjksfdhnjksndfkj");
  }, [location]);
  function hundleLogout() {
    Cookies.remove("login");
    window.location.href = "/login";
  }
  return (
    

    <CartContext.Provider value={{ login, setLogin }}>
      <BrowserRouter>
        {showNavbar && (
          <div className="Nav">
            <NavLink to="/" className="logo">
              <img src={logo} alt="logo" />
            </NavLink>
            <div>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/product">pieces de rechange</NavLink>
              <NavLink to="/reclamation">Reclamation</NavLink>
              <NavLink to="/formulaire">Formulaire</NavLink>
              <button type="button" className="btn btn-primary" onClick={hundleLogout}>
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
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </CartContext.Provider>
  );
}

export default App;