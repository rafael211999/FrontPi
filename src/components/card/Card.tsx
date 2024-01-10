import React from "react";
import "./Card.css";
import imagem from "../../imagem/gratidao.jpg";

function Card() {
  return (
    <div>
      <div className="Container">
        <div className="Titulo">Bem vindo ao sistema de estoque</div>
        <div className="Apresentacao">Apresentação:</div>
        <div className="Informacao">Me chamo Rafael, tenho 24 anos e sou nascido e criado em Teresópolis. Comecei a me interessar por programação depois que eu terminei o colégio.
          Me formei em ADS ( Analise e desenvilvimento de sistema), mas infelizmente não consegui exercer a profissão. Por gostar muito de programação, continuei estudando para poder futuramente, aparecendo uma oportunidade, estar preparado para o mercado de trabalho.
          Esse projeto de estoque foi feito com intenção de facilitar o gerenciamento de produtos, pessoas e vendas. Ainda estamos trabalhando para poder estar ajustando e facilitando cada dia mais
          o dia a dia das pessoal. Desde já agradeço ao professor Rafael Ramos, que passou com muita claresa e didatica o seu conhecimento, estando sempre dispoto a ajudar e sanar as duvidas. Agradeço ao Senac, pela oportunidade de estar participando
          desse projeto. </div>
        <img className="MyImage" src={imagem} alt="imagem" />
      </div>
    </div>
  );
}

export default Card;
