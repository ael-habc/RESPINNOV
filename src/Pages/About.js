import React from "react";
import { NavLink } from "react-router-dom";
import "./Home.css";
import logo from "../images/logo.svg";

export default function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>RESPINNOV</h1>
        <p>
          Un souffle d'excellence technologique pour une expérience de
          respirateur d'anesthésie repensée
        </p>
      </div>
      <hr />
      <div className="about-main">
        <div className="about-main-left">
          <p>
            Bienvenue dans l'univers de RespInnov, une plateforme numérique
            révolutionnaire dédiée à l'excellence de la gestion des respirateurs
            d'anesthésie de la multinationale chinoise Mindray. RespInnov est
            bien plus qu'un simple système informatisé ; c'est un écosystème
            complet conçu pour optimiser la performance, la sécurité et
            l'efficacité des respirateurs d’anesthésie vitaux utilisés par les
            professionnels de santé au Maroc.
          </p>
        </div>
        <div className="about-main-right">
          <p>
            RespInnov est donc l'aboutissement d'une synergie sans précédent
            entre technologie de pointe, expertise médicale et engagement envers
            l'amélioration continue. Elle est bien plus qu'une simple plateforme
            numérique : c'est un partenaire fiable pour les professionnels de
            santé, offrant des solutions novatrices pour améliorer la gestion,
            la maintenance et la sécurité des respirateurs d'anesthésie de
            Mindray. Nous sommes déterminés à repousser les limites de
            l'innovation et à contribuer à un environnement médical plus sûr et
            plus performant. Rejoignez-nous !
          </p>
        </div>
      </div>
      <div className="footer">
        <img src={logo} alt="logo" />
        <div className="footer_menu">
          <h1>Menu</h1>
          <NavLink to="/product" className="footer_menu_item">
            Products
          </NavLink>
          <NavLink to="/about" className="footer_menu_item">
            About
          </NavLink>
          <NavLink to="/reclamation" className="footer_menu_item">
            Reclamation
          </NavLink>
          <NavLink to="/cart" className="footer_menu_item">
            cart
          </NavLink>
        </div>
        <div className="footer_menu">
          <h1>Social Media</h1>
          <NavLink to="/" className="footer_menu_item">
            instagram
          </NavLink>
          <NavLink to="/" className="footer_menu_item">
            facebook
          </NavLink>
          <NavLink to="/" className="footer_menu_item">
            linkdin
          </NavLink>
        </div>
      </div>
    </div>
  );
}
