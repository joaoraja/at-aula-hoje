import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AlternarModo from "./components/AlternarModo";
import AcessoInformacao from "./components/AcessoInformacao";
import Acervo from "./components/Acervo";
import Publicacoes from "./components/Publicacoes";
import Educacao from "./components/Educacao";
import FAQ from "./components/FAQ";
import Contato from "./components/Contato";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Footer from "./components/Footer";
import VideoGallery from "./components/videos"; // Importe o componente de vídeos
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Estado para o modo escuro

  // Adiciona ou remove a classe do modo escuro ao body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("modo-escuro");
    } else {
      document.body.classList.remove("modo-escuro");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode); // Alterna entre claro e escuro
  };

  return (
    <div className="App">
      {/* Adiciona o Header */}
      <header>
        <Navbar />
      </header>

      {/* Botão de alternar de modo */}
      <div className="alternar-modo">
        <button className="botao-alternar" onClick={toggleDarkMode}>
          {isDarkMode ? "Modo Claro" : "Modo Escuro"}
        </button>
      </div>

      {/* Renderiza o botão de Modo Claro/Escuro */}
      <AlternarModo />

      {/* Adiciona o Main */}
      <main>
        {/* Renderiza o componente de Acesso à Informação */}
        <section id="informacao">
          <AcessoInformacao />
        </section>

        {/* Renderiza o componente Acervo */}
        <section id="acervo">
          <Acervo />
        </section>

        {/* Renderiza o componente Publicações */}
        <section id="publicacoes">
          <Publicacoes />
        </section>

        {/* Renderiza a galeria de vídeos */}
        <section id="videos">
          <h2>Galeria de Vídeos</h2>
          <VideoGallery />
        </section>

        {/* Renderiza o componente Educação */}
        <section id="educacao">
          <h2>Educação</h2>
          <Educacao />
        </section>

        {/* Renderiza o componente FAQ */}
        <section id="perguntas">
          <FAQ isDarkMode={isDarkMode} />
        </section>

        {/* Renderiza o componente Contato */}
        <section id="faleconosco">
          <Contato />
        </section>

        {/* Botão para voltar ao topo */}
        <ScrollToTopButton />
      </main>

      {/* Adiciona o Footer */}
      <Footer />
    </div>
  );
}

export default App;
