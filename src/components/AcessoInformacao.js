import React from "react";
import "./AcessoInformacao.css";

const AcessoInformacao = () => {
  return (
    <div className="acesso-informacao">
      <h1 className="titulo">A HISTÓRIA DO MHN</h1>
      <div className="conteudo">
        <div className="coluna-esquerda">
          <p>
            Numa ponta que avançava sobre o mar, posteriormente conhecida como
            Ponta do Calabouço, entre as praias de Píacaba e Santa Luzia, no
            centro histórico do Rio de Janeiro (RJ), os portugueses construíram,
            em 1603, a fortaleza de Santiago, origem do conjunto arquitetônico
            que abriga o Museu Histórico Nacional.
          </p>
          <p>
            Ao longo dos séculos, outras edificações somaram-se à fortaleza,
            como a prisão do Calabouço (1693), destinada ao castigo de
            escravizados; a Casa do Trem (1762), para a guarda do “trem de
            artilharia” (armas e munições); o Arsenal de Guerra (1764) e um
            quartel para abrigar tropas militares (1835).
          </p>
          <p>
            Por sua localização estratégica para defesa da baía da Guanabara, e
            da própria cidade, a região foi uma área militar até 1908, quando o
            Arsenal de Guerra foi transferido para a Ponta do Caju.
          </p>
        </div>
        <div className="coluna-direita">
          <p>
            Atualmente, o Museu Histórico Nacional ocupa todo o complexo
            arquitetônico do Calabouço e tornou-se um dos mais importantes
            museus de história do país. Reunindo um acervo com mais de 300 mil
            itens arquivísticos, bibliográficos e museológicos, é uma
            instituição federal de produção e difusão de conhecimento.
          </p>
          <p>
            Da fortaleza de Santiago e da prisão do Calabouço restam apenas as
            fundações. No entanto, permanecem até hoje a Casa do Trem,
            restaurada ao seu aspecto colonial na década de 1990; o prédio do
            Arsenal de Guerra, e seu imponente pátio da Minerva; e o pavilhão da
            Exposição de 1922, atual Biblioteca, formando um dos mais
            significativos conjuntos arquitetônicos da cidade, com uma área de
            20.000m².
          </p>
        </div>
      </div>
      <div className="imagens-historicas">
        <h2>Imagens Históricas</h2>
        <div className="galeria-imagens">
          <div className="imagem">
            <img
              src="https://mhn.museus.gov.br/wp-content/uploads/2016/05/mh-h-410-150x150.gif"
              alt="Vista parcial da Casa do Trem"
            />
            <p>
              Vista parcial de uma das duas salas, no interior da Casa do Trem,
              que deram origem ao Museu Histórico Nacional, em 1922.
            </p>
          </div>
          <div className="imagem">
            <img
              src="https://mhn.museus.gov.br/wp-content/uploads/2016/05/mh-h-420-150x150.gif"
              alt="Fachada do MHN"
            />
            <p>
              Vista aérea da antiga torre do Arsenal de Guerra e ao fundo a Baia
              de Guanabara .
            </p>
          </div>
          <div className="imagem">
            <img
              src="https://mhn.museus.gov.br/wp-content/uploads/2016/05/mh-h-430-150x150.gif"
              alt="Fachada do MHN"
            />
            <p>
              Vista aérea da fachada do museu e o Viaduto da Perimetral,
              recentemente demolido.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcessoInformacao;
