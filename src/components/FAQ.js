import React, { useState } from "react";
import "./FAQ.css";
import ToggleSwitch from "./ToggleSwitch"; // Importa o ToggleSwitch

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [mostrarTudo, setMostrarTudo] = useState(false); // Estado para alternar exibição

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Quais os horários de funcionamento e o endereço do MHN?",
      answer:
        "O Museu Histórico Nacional funciona de quarta a domingo, das 10h às 17h. O endereço é praça Marechal Âncora S/N – Centro – Rio de Janeiro, RJ.",
    },
    {
      question: "Qual o valor do ingresso?",
      answer:
        "A entrada do MHN está gratuita devido às celebrações do seu centenário. Ingressos apenas na bilheteria.",
    },
    {
      question: "Como chegar ao MHN de transporte público?",
      answer:
        "Há ônibus que circulam pela avenida Antônio Carlos, rua Santa Luzia (terminal Castelo) e praça XV de Novembro. O VLT Carioca também dá acesso ao museu: estação Antônio Carlos (linha 1) e estação Praça XV (linha 2). Há ainda o metrô, descendo nas estações Cinelândia ou Carioca e realizando o restante do percurso a pé. Aos finas de semana, utilize preferencialmente a estação VLT Praça XV e metrô Carioca (tempo aproximado de caminhada ao museu: 10 minutos).",
    },
    {
      question: "Há estacionamento para o público?",
      answer:
        "Sim, o MHN possui estacionamento gratuito, respeitando o número de vagas existente, aberto apenas nos horários de funcionamento do museu.",
    },
    {
      question: "Posso entrar com mochila e animal de estimação?",
      answer:
        "O museu disponibiliza guarda-volumes gratuito para o público. A entrada de animais não é permitida nos espaços do MHN.",
    },
    {
      question: "O museu é acessível para pessoas com deficiência?",
      answer:
        "O estacionamento dá acesso por rampa ao edifício central. No guarda-volumes está disponível uma cadeira de rodas para uso gratuito. É possível acessar com facilidade as exposições no térreo e do primeiro andar por meio de elevadores e plataformas. As peças táteis nas exposições são outro importante suporte de acessibilidade no MHN.",
    },
    {
      question: "Como funciona o agendamento de grupos?",
      answer:
        "Visitantes em grupo devem realizar agendamento exclusivamente pelo e-mail mhn.agendamento@museus.gov.br.",
    },
    {
      question: " O museu oferece loja de souvenirs e serviço de alimentação?",
      answer:
        "A lojinha do MHN, localizada no pátio da Minerva, disponibiliza uma série de souvenirs relacionados ao museu, além de publicações e outros materiais, que podem ser enviados via Correios. Bebidas não alcóolicas e petiscos também estão à venda, pois o museu não possui lanchonete ou restaurante. Para mais informações, faça contato pelo telefone (21) 3299.0314 (horário de funcionamento do museu).",
    },
    {
      question: "Quais as exposições em cartaz?",
      answer:
        "O MHN está com todo seu circuito de longa duração aberto ao público. No térreo, é possível visitar os pátios da Minerva e dos Canhões e a exposição “Do móvel ao automóvel”, além de exposições temporárias. No primeiro andar, o visitante tem acesso à exposição de longa duração sobre a história do Brasil. Para a agenda atualizada, acesse nossas redes sociais.",
    },
    {
      question: "Quais as restrições ao visitar as exposições?",
      answer:
        "O consumo de alimentos e bebidas não é permitido dentro das exposições, assim como a entrada com mochila e outros volumes. É terminantemente proibido correr nas salas de exposição ou tocar nos objetos. Atente aos avisos nas paredes e marcação de solo. Na dúvida, consulte o funcionário da segurança.",
    },
    // Adicione mais perguntas e respostas conforme necessário
  ];

  const handleToggleSwitch = () => {
    setMostrarTudo(!mostrarTudo);
  };

  return (
    <div className="faq-container">
      <h2>Perguntas Frequentes</h2>

      {/* Adiciona o ToggleSwitch */}
      <div className="faq-toggle">
        <label>Mostrar todas as respostas</label>
        <ToggleSwitch isOn={mostrarTudo} handleToggle={handleToggleSwitch} />
      </div>

      <ul className="faq-list">
        {faqData.map((item, index) => (
          <li key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleQuestion(index)}
            >
              {index + 1}) {item.question}
              <span>{activeIndex === index || mostrarTudo ? "▲" : "▼"}</span>
            </button>
            {(activeIndex === index || mostrarTudo) && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;
