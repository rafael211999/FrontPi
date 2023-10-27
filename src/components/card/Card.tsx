import React from "react";
import "./Card.css";
import imagem from "../../imagem/OIP.png";

function Card() {
  return (
    <div>
      <div className="MyImage">
        <img src={imagem} alt="imagem" />
        <div className="Descricao">
          <div className="Titulo">PRODUTO</div>
          <div className="Valor">Valor</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
