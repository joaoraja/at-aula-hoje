import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa"; // Importa o ícone de seta para cima
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Função para rolar a página até o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Mostrar o botão de rolar para o topo quando o usuário descer a página
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {isVisible && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      )}
    </div>
  );
};

export default ScrollToTopButton;
