import React from "react";
import Navibar from "../navibar/Navibar";

function Sales() {
  return (
    <>
      <Navibar />
      <div className="ContainerInput">
        <h1>Cadastro de Vendas</h1>
        <div className="Children">
          <input
            className="MyInput"
            type="text"
            placeholder="Nome do usuário"
            rel="noopener noreferrer"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Nome do produto"
            rel="noopener noreferrer"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Valor da venda"
            rel="noopener noreferrer"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Venda final?"
            rel="noopener noreferrer"
          />
          <input
            className="MyInput"
            type="text"
            placeholder="Valor do desconto"
            rel="noopener noreferrer"
          />
          <input
            className="MyInput"
            type="text"
            placeholder="Numero da venda"
            rel="noopener noreferrer"
          />
        </div>

        <button id="cadastrarProduto" className="MyButton">
          {" "}
          Cadastrar{" "}
        </button>
      </div>
    </>
  );
}
export default Sales;
