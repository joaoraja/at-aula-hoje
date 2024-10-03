import React from "react";
import "./Acervo.css";

const Acervo = () => {
  return (
    <div className="acervo">
      {/* Banner, título e imagem de fundo */}
      <section className="acervo-banner">
        <div className="acervo-banner-text">
          <h1>Nossos Acervos</h1>
        </div>
      </section>

      {/*Descrição inicial*/}
      <section className="acervo-descricao">
        <p className="subacervo">
          O Acervo do MHN é dividido em quatro esferas: O Acervo Arquivístico:
          Histórico e Institucional, Acervo Bibliográfico e o Acervo
          Museológico.
        </p>
      </section>

      {/*Acervo Arquivístico: Histórico*/}
      <section className="acervo-item">
        <div className="acervo-texto">
          <h2>Acervo Arquivístico: Histórico</h2>
          <p>
            O Arquivo Histórico do Museu Histórico Nacional é formado por
            coleções, a maioria de caráter privado, que abrigam mais de 62 mil
            documentos iconográficos e manuscritos sobre a história do Brasil.
          </p>
          <p>
            As consultas ao acervo, mediante agendamento, podem ser feitas pelo
            telefone (21) 3299.0368 ou pelo e-mail mhn.arquivo.historico
            Consulte online as informações das coleções na{" "}
            <a
              href="https://atom-mhn.museus.gov.br/index.php/"
              target="_blank"
              rel="noopener noreferrer"
            >
              base de dados Atom
            </a>
            . Confira
            <a
              href="https://mhn.museus.gov.br/wp-content/uploads/2023/05/Tutorial_Atom_ArquivoHistorico_MHN.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              tutorial{" "}
            </a>{" "}
            para pesquisa.
          </p>
        </div>
        <div className="acervo-imagem">
          <img
            src="https://mhn.acervos.museus.gov.br/wp-content/uploads/2024/03/arquivo_historico-265x300-1.jpg"
            alt="Acervo Arquivístico Histórico"
          />
          <button className="btn-acervo">Acesse o Acervo Online</button>
        </div>
      </section>

      {/*Acervo Arquivístico: Institucional*/}
      <section className="acervo-item">
        <div className="acervo-texto">
          <h2>Acervo Arquivístico: Institucional</h2>
          <p>
            Com 250 metros lineares de documentação variada, o Arquivo
            Institucional é fonte de pesquisa sobre a história do próprio MHN,
            dos museus no Brasil, da história política e administrativa da
            cultura no país.
          </p>
          <p>
            O Arquivo Institucional pode ser consultado, mediante agendamento,
            pelo tel (21) 3299-0365 ou pelo e-mail mhn.arquivo.institucional
          </p>
        </div>
        <div className="acervo-imagem">
          <img
            src="https://mhn.acervos.museus.gov.br/wp-content/uploads/2024/03/DSC08093m2-277x300-1.png"
            alt="Acervo Arquivístico Institucional"
          />
          <button className="btn-acervo">Acesse o Acervo Online</button>
        </div>
      </section>

      {/*Acervo Bibiográfico*/}
      <section className="acervo-item">
        <div className="acervo-texto">
          <h2>Acervo Bibliográfico</h2>
          <p>
            A Biblioteca do Museu Histórico Nacional oferece a pesquisadores um
            vasto acervo, compreendendo obras do século XVI ao XXI. São livros,
            folhetos, periódicos e materiais especiais, que abrangem temas como
            Arte Decorativa, Numismática, Filatelia, Indumentária, História do
            Brasil, História do Rio de Janeiro, História de Portugal, Heráldica,
            Genealogia, Sigilografia, Gastronomia e Museologia.
          </p>
          <p>
            É possível acessar pela web as{" "}
            <a
              href="https://www.docpro.com.br/mhn/bibliotecadigital.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              publicações
            </a>{" "}
            editadas pelo Museu Histórico Nacional, como catálogos das
            exposições, e os{" "}
            <a
              href="https://anaismhn.museus.gov.br/index.php/amhn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anais do MHN
            </a>{" "}
            desde o seu primeiro número.
          </p>
        </div>
        <div className="acervo-imagem">
          <img
            src="https://mhn.acervos.museus.gov.br/wp-content/uploads/2024/03/biblioteca-263x300-1.jpg"
            alt="Acervo Bibliográfico"
          />
          <button className="btn-acervo">Acesse o Acervo Online</button>
        </div>
      </section>

      {/*Acervo Museológico*/}
      <section className="acervo-item">
        <div className="acervo-texto">
          <h2>Acervo Museológico</h2>
          <p>
            O acervo museológico do Museu Histórico Nacional, com cerca de 170
            mil itens, é formado por coleções de objetos que datam desde a
            Antiguidade até os dias atuais. Esse acervo engloba uma variada
            tipologia de bens culturais.
          </p>
          <p>
            O acervo numismático apresenta as coleções de moedas, medalhas,
            selos, selos sigilográficos e valores impressos, além do meio
            circulante do Brasil e Portugal, totalizando mais de 150 mil itens.
          </p>
        </div>
        <div className="acervo-imagem">
          <img
            src="https://mhn.acervos.museus.gov.br/wp-content/uploads/2024/03/JA-126732.png"
            alt="Acervo Museológico"
          />
          <button className="btn-acervo">Acesse o Acervo Online</button>
        </div>
      </section>
    </div>
  );
};

export default Acervo;
