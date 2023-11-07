import React from "react";
import Navibar from "../navibar/Navibar";

function User() {
  return (
    <>
     <Navibar />
      <div className="ContainerInput">
        <h1>Cadastro de Usuário</h1>
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
            placeholder="Sobrenome"
            rel="noopener noreferrer"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Email"
            rel="noopener noreferrer"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Cpf"
            rel="noopener noreferrer"
          />
        </div>

        <button id="cadastrarProduto" className="MyButton"> Cadastrar </button>
      </div>
    </>
  );
}

export default User;
