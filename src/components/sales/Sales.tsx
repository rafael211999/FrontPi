import React from "react";
import Navibar from "../navibar/Navibar";
import axios from "axios";

function Sales() {



  async function salesDataPost() {
    // Montando o objeto de dados JSON

    var nameUser = (document.getElementById("nUser") as HTMLInputElement) || null;
    var nameProd = (document.getElementById("nProd") as HTMLInputElement) || null;
    var valorVenda = (document.getElementById("vVenda") as HTMLInputElement) || null;
    var vendaFinal = (document.getElementById("vFinal") as HTMLInputElement) || null;
    var desconto = (document.getElementById("desconto") as HTMLInputElement) || null;
    var numeroVenda = (document.getElementById("numVenda") as HTMLInputElement) || null;
    


    const salesJson = {
      usuario: nameUser.value.toString(),
      produto: nameProd.value.toString(),
      valor: valorVenda.value.toString(),
      venda_final: vendaFinal.value.toString(),
      desconto: desconto.value.toString(),
      venda: numeroVenda.value.toString(),
    };
  
    await axios
      .post("http://localhost:9000/api/sales", salesJson, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        maxRedirects: 0,
      })
      .then((response) => {
        console.log(response);
        alert("Dados da venda cadastrados com sucesso")
      })
      .catch((error) => {
        console.log(error);
        alert("Não foi possível cadastrar os dados da sua venda, por favor tente novamente mais tarde!!!")
      });
  }



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
            id="nUser"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Nome do produto"
            rel="noopener noreferrer"
            id="nProd"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Valor da venda"
            rel="noopener noreferrer"
            id="vVenda"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Venda final?"
            rel="noopener noreferrer"
            id="vFinal"
          />
          <input
            className="MyInput"
            type="text"
            placeholder="Valor do desconto"
            rel="noopener noreferrer"
            id="desconto"
          />
          <input
            className="MyInput"
            type="text"
            placeholder="Numero da venda"
            rel="noopener noreferrer"
            id="numVenda"
          />
        </div>

        <button id="cadastrarProduto" onClick={salesDataPost} className="MyButton">
          {" "}
          Cadastrar{" "}
        </button>
      </div>
    </>
  );
}
export default Sales;
