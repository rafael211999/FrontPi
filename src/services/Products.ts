import React from "react";
import axios from "axios";
import imagem from "../../imagem/OIP.png";
import "../components/cardProdutos/CardProdutos.css"

const Url = "http://localhost:9000/api/products";


async function getProducts(divId: HTMLDivElement) {
  await axios.get(Url).then((response) => {

    const dataProducts: Record<
      string,
      { name: string; fabrica: string; quantidade: string }
    > = response.data;

    const userArray = Object.entries(dataProducts).map(([key, value]) => ({
      key,
      ...value,
    }));

    var myDiv = "";
    userArray.forEach((dados) => {

      myDiv += `
      <div class="Children">
      <div
          class="divName"
          type="text"
          rel="noopener noreferrer"
      >Nome: ${dados.name}  </div>

      <div
          class="divFabrica"
          type="text"
          rel="noopener noreferrer"
      >Fabrica: ${dados.fabrica} </div>

      <div
          class="divQuantidade"
          type="text"
          rel="noopener noreferrer"
      >Quantidade: ${dados.quantidade}</div>
    `;

    });

    divId.innerHTML = myDiv;

  }).catch((error) => {
    console.log("Ocorreu um erro");
  });
}

// async function productsDataPost() {
//   const userJson = {
//     name: "Rafael",
//     fabrica: "Sansung",
//     quantidade: "15",
//   };

//   await axios
//     .post("http://localhost:9000/api/products", userJson, {
//       withCredentials: true,
//       headers: {
//         "Content-Type": "application/json",
//       },
//       maxRedirects: 0,
//     })
//     .then((response) => {
//       console.log(response);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

export default { getProducts};
