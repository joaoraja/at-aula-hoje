import React, { useState, useEffect } from "react";
import "./AlternarModo.css";

const AlternarModo = () => {
  const [modoEscuro, setModoEscuro] = useState(false);

  // Atualiza o tema da página com base no estado modoEscuro
  useEffect(() => {
    if (modoEscuro) {
      document.body.classList.add("modo-escuro");
      console.log("Modo escuro ativado");
    } else {
      document.body.classList.remove("modo-escuro");
      console.log("Modo claro ativado");
    }
  }, [modoEscuro]);

  // Alternar entre os modos claro e escuro
  const alternarModo = () => {
    setModoEscuro(!modoEscuro);
  };

  return (
    <div className="alternar-modo">
      <button onClick={alternarModo} className="botao-alternar">
        {modoEscuro ? "Modo Claro" : "Modo Escuro"}
      </button>
    </div>
  );
};

export default AlternarModo;
