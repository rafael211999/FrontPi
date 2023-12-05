import React from "react";
import "./Products.css";
import Navibar from "../navibar/Navibar";
import productsDataPost from "../../services/Products"
import axios from "axios";

function Products() {
  
  async function productsDataPost() {
    // Montando o objeto de dados JSON

    var name = (document.getElementById("PName") as HTMLInputElement) || null;
    var fabrica = (document.getElementById("PFabrica") as HTMLInputElement) || null;
    var quantidade = (document.getElementById("PQuantidade") as HTMLInputElement) || null;
    


    const userJson = {
      name: name.value.toString(),
      fabrica: fabrica.value.toString(),
      quantidade: quantidade.value.toString(),

    };
  
    await axios
      .post("http://localhost:9000/api/products", userJson, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        maxRedirects: 0,
      })
      .then((response) => {
        console.log(response);
        alert("Dados do produto cadastrados com sucesso")
      })
      .catch((error) => {
        console.log(error);
        alert("Não foi possível cadastrar os dados do seu produto, por favor tente novamente mais tarde!!!")
      });
  }
  



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
            id="PName"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Fabrica"
            rel="noopener noreferrer"
            id="PFabrica"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Quantidade"
            rel="noopener noreferrer"
            id="PQuantidade"
          />
        </div>

        <button id="cadastrarProduto" className="MyButton" onClick={productsDataPost} > Cadastrar </button>
      </div>
    </>
  );
}
export default Products;
