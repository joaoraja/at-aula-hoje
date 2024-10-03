import React, { useState } from "react";
import styles from "./Educacao.module.css";
import styled from "styled-components"; // CSS-in-JS para aplicar estilo

// Exemplo de CSS inline
const inlineStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "20px",
};

// Exemplo de uso de CSS-in-JS
const TextTitle = styled.h2`
  font-size: 2.5em;
  text-align: center;
  padding: 20px;
`;

const Educacao = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para o modo escuro

  // Alterna entre modo escuro e claro
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    if (!isDarkMode) {
      document.body.classList.add("modo-escuro");
    } else {
      document.body.classList.remove("modo-escuro");
    }
  };

  return (
    <div>
      {/* Botão de alternância de modo */}
      <div className={styles.alternarModo}>
        <button className={styles.botaoAlternar} onClick={toggleDarkMode}>
          {isDarkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>

      <section
        className={`${styles.container} ${isDarkMode ? styles.darkMode : ""}`}
      >
        {/* Bloco da imagem principal e texto */}
        <div className={styles.flexContainer}>
          <div className={styles.imgContainer}>
            <img
              src="https://mhn.museus.gov.br/wp-content/uploads/2020/03/Visita_Escolas_MHN.jpg"
              alt="Visite o Museu com seu grupo"
              className={styles.flexItem}
            />
          </div>

          <div className={styles.textContent}>
            <TextTitle>Traga sua escola para visitar o museu</TextTitle>
            <p>
              O Núcleo de Educação desenvolve projetos e eventos com visitas
              agendadas, dirigidos aos alunos e professores das redes pública e
              particular de ensino. As visitas abordam temas relacionados ao
              acervo do museu, suas exposições e arquitetura, à história e à
              sociedade brasileira.
            </p>
            <a href="#" style={{ color: "#f09d42" }}>
              Saiba mais sobre as visitas
            </a>
          </div>
        </div>

        {/* Adicionando um Grid de imagens com Flexbox */}
        <div className={styles.flexGrid}>
          <div className={`${styles.flexItem} ${styles.gridItem}`}>
            <img
              src="https://mhn.museus.gov.br/wp-content/uploads/2020/03/VNH-Logo2.png"
              alt="Projeto “Viajando na história”"
            />
            <p>Projeto “Viajando na história”</p>
          </div>
          <div className={`${styles.flexItem} ${styles.gridItem}`}>
            <img
              src="https://mhn.museus.gov.br/wp-content/uploads/2016/02/BondeHistoria1_MHN.jpg"
              alt="Projeto “Bonde da história”"
            />
            <p>Projeto “Bonde da história”</p>
          </div>
          <div className={`${styles.flexItem} ${styles.gridItem}`}>
            <img
              src="https://mhn.museus.gov.br/wp-content/uploads/2016/02/Acessibilidade2_MHN-1.jpg"
              alt="Educação museal e acessibilidade"
            />
            <p>Educação museal e acessibilidade</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Educacao;
