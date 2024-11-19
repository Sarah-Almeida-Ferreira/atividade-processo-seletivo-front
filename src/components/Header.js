import React, { useState } from "react";
import "../styles/header.scss"; // Importando o arquivo SCSS
import Logo from "../../src/assets/logo.png";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const goTo = (sectionId) => {
    setIsMenuOpen(false);
    setTimeout(() => {
      scroller.scrollTo(sectionId, {
        smooth: true,
        duration: 500,
        offset: 0,
      });
    }, 100);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>
            <Link to="/" onClick={() => goTo("home")}>
              <img src={Logo} alt="Logo" />
            </Link>
          </h1>
        </div>
        <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => goTo("home")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => goTo("sobre")}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => goTo("servicos")}>
                Serviços
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
