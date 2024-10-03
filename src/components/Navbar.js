import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const alternarMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const alternarDropdown = () => {
    setDropdownAberto(!dropdownAberto);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img
          src="http://museuhistoriconacional.museus.gov.br/wp-content/uploads/2016/02/mhn.png"
          alt="Museu Logo"
          className="logo-img"
        />
      </div>
      <div
        className={`menu-hamburguer ${menuAberto ? "aberto" : ""}`}
        onClick={alternarMenu}
      >
        <div className="linha"></div>
        <div className="linha"></div>
        <div className="linha"></div>
      </div>
      <ul className={`nav-links ${menuAberto ? "ativo" : ""}`}>
        <li>
          <a href="#informacao">ACESSO À INFORMAÇÃO</a>
        </li>
        <li>
          <a href="#acervo">ACERVO</a>
        </li>
        <li>
          <a href="#publicacoes">PUBLICAÇÕES</a>
        </li>
        <li>
          <a href="#educacao">EDUCAÇÃO</a>
        </li>
        <li>
          <a
            href="https://my.matterport.com/show/?m=8YYr6jcq7nX"
            target="_blank"
            rel="noopener noreferrer"
          >
            TOUR VIRTUAL
          </a>
        </li>
        <li>
          <a href="#videos">Videos</a>
        </li>

        {/* Item com Dropdown */}
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownAberto(true)}
          onMouseLeave={() => setDropdownAberto(false)}
          onClick={alternarDropdown}
        >
          <a href="#contato-faq" className="dropdown-link">
            FAQ's
            <span className="seta"></span>
          </a>
          <ul className={`dropdown-menu ${dropdownAberto ? "visivel" : ""}`}>
            <li>
              <a href="#perguntas">Perguntas</a>
            </li>
            <li>
              <a href="#faleconosco">Fale Conosco</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
