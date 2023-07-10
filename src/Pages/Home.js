import React from "react";
import { NavLink } from "react-router-dom";
import Product from "../Card";
import productList from "../ft_product.json";
import logo from "../images/logo.svg";

import "./Home.css";

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="header_title">RESPINNOV</h1>
        <p className="header_text">Description of Respinnov</p>
        <NavLink to="/Product" className="header_button">
          <button type="submit" className="cart" id="header_button">
            EXPLORE
          </button>
        </NavLink>
      </div>
      <div className="content">
        <h1>This is your space</h1>
        <p>Talk about your business, your products, or yourself.</p>
      </div>
      <hr />
      <div className="main">
        <div className="main_left">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
        <div className="main_right">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem
            imperdiet. Nunc ut sem vitae risus tristique posuere.
          </p>
        </div>
      </div>
      <div className="featured_product">
        <h1>Featured Products</h1>
        <p>Check out new and popular products</p>
        <div className="featured_product_list">
          {productList.products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/* <div className="footer">
      <NavLink to="/" className="logo">
          <img src={logo} alt="logo" />
        </NavLink>
        <div className="footer_menu">
          <NavLink to="/product" className="footer_menu_item">
            Products
          </NavLink>
          <NavLink to="/about" className="footer_menu_item">
            About
          </NavLink>
          <NavLink to="/contact" className="footer_menu_item">
            Contact
          </NavLink>
            </div> */}
      {/* </div> */}
    </div>
  );
}
