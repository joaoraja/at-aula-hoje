import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa"; // Importa os ícones de redes sociais
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section redes-sociais">
        <h3>Redes sociais</h3>
        <ul>
          <li>
            <a
              href="https://www.facebook.com/museuhistoriconacional/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF /> FACEBOOK
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/museuhistoriconacional/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram /> INSTAGRAM
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section links-internos">
        <h3>Links internos</h3>
        <ul>
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
            <a href="#perguntas">FAQ's</a>
          </li>
        </ul>
      </div>

      <div className="footer-section outros-links">
        <h3>Outros links</h3>
        <ul>
          <li>
            <a
              href="https://www.gov.br/museus/pt-br"
              target="_blank"
              rel="noopener noreferrer"
            >
              IBRAM
            </a>
          </li>
          <li>
            <a
              href="https://www.gov.br/cultura/pt-br"
              target="_blank"
              rel="noopener noreferrer"
            >
              MINISTÉRIO DA CULTURA
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
