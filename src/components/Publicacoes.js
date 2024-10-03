import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Publicacoes.css";

const publicacoesData = [
  {
    titulo: "Anais MHN",
    descricao:
      "Os Anais MHN, editados desde 1940, constituem o periódico científico do Museu Histórico Nacional.",
    imagem: "https://mhn.museus.gov.br/wp-content/uploads/2024/06/capa.jpg",
  },
  {
    titulo: "Biblioteca Virtual",
    descricao:
      "A Biblioteca Virtual do Museu oferece a pesquisadores um vasto acervo de obras do século XVI ao XXI.",
    imagem:
      "https://mhn.museus.gov.br/wp-content/uploads/2024/06/docpro-biblioteca-virtual.jpg",
  },
  {
    titulo: "Histórias do Brasil",
    descricao:
      'O livro "Histórias do Brasil: 100 objetos do Museu Histórico Nacional" oferece um passeio pela história do Brasil.',
    imagem:
      "https://mhn.museus.gov.br/wp-content/uploads/2024/06/livro-100.jpg",
  },
];

const Publicacoes = () => {
  return (
    <div className="publicacoes">
      <h2 className="titulo-publicacoes">Publicações</h2>
      <p className="descricao-publicacoes">
        Conheça as publicações do Museu Histórico Nacional
      </p>

      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showStatus={false}
        className="carrossel-publicacoes"
      >
        {publicacoesData.map((publicacao, index) => (
          <div key={index} className="cartao-publicacao">
            <img src={publicacao.imagem} alt={publicacao.titulo} />
            <div className="conteudo-publicacao">
              <h3>{publicacao.titulo}</h3>
              <p>{publicacao.descricao}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Publicacoes;
