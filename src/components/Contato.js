import React, { useState } from "react";
import "./Contato.css";
import ProgressBar from "./ProgressBar"; // Importa o ProgressBar

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  });

  // Calcula o progresso com base nos campos preenchidos
  const calcularProgresso = () => {
    const totalCampos = 4;
    const camposPreenchidos = Object.values(formData).filter(
      (value) => value !== ""
    ).length;
    return (camposPreenchidos / totalCampos) * 100;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso!");
  };

  return (
    <div className="contato-container">
      <h2>Fale Conosco</h2>
      <p>Preencha o formulário abaixo. O progresso será mostrado abaixo:</p>

      <ProgressBar progress={calcularProgresso()} />

      <form className="contato-form" onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Assunto:
          <input
            type="text"
            name="assunto"
            value={formData.assunto}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Sua mensagem:
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contato;
