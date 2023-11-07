import React from "react";
import "./Products.css";
import Navibar from "../navibar/Navibar";

function Products() {
  return (
    <>
      <Navibar />
      <div className="ContainerInput">
        <h1>Cadastro de produtos</h1>
        <div className="Children">
          <input
            className="MyInput"
            type="text"
            placeholder="Nome"
            rel="noopener noreferrer"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Fabrica"
            rel="noopener noreferrer"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Quantidade"
            rel="noopener noreferrer"
          />
        </div>

        <button id="cadastrarProduto" className="MyButton"> Cadastrar </button>
      </div>
    </>
  );
}
export default Products;
