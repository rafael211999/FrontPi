import React from "react";
import axios from "axios";
import imagem from "../../imagem/OIP.png";
import "../components/cardProdutos/Produtos.css"

const Url = "http://localhost:8080/api/products";

// var imagemLuffi = "https://th.bing.com/th/id/R.fedb2e98fbca74375274d15379b8532e?rik=rjV%2fTPYpBiuL%2fw&riu=http%3a%2f%2ficongal.com%2fgallery%2fimage%2f403828%2fluffys_flag_manga_skull_chopper_hat_bones_dead.png&ehk=wm41upgAtqfbJ6oO724bGfS9Tw0Z989Grd%2boKVCVLEk%3d&risl=&pid=ImgRaw&r=0"

// var imagemZoro = "https://cdn3.emoji.gg/emojis/3105-zoro-jolly-roger.png"


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

    var teste = "";
    userArray.forEach((dados) => {
     
      teste += `

      <div class="Container">
      <img src=${dados.quantidade} alt="Aqui é minha imagem" class="Img" />
      <div class="Descricao">
      <div class="TituloProduto">Nome: ${dados.name} </div>
      <div class="SubTitulo">Anime: ${dados.fabrica}</div>
      </div>
      </div>
    `;

    console.log("Aqui está os meus dados", dados)

    //   newDiv.innerHTML = `
    //         <div className="MyImg">
    //         <img src={} alt="imagem" />
    //         </div>
    //         <div>${dados.name} </div>
    //         <div>Fabrica: ${dados.fabrica}</div>
    //         <div>Imagem: ${dados.quantidade}</div>
    //   `;

    //   divId.appendChild(newDiv);


    });

    divId.innerHTML = teste;
    // console.log("Cheguei dentro do meu get: ", teste)

  }).catch((error) => {
    console.log("Ocorreu um erro");
  });
}

async function productsDataPost() {
  // Montando o objeto de dados JSON
  const userJson = {
    name: "Rafael",
    fabrica: "Sansung",
    quantidade: "15",
  };

  await axios
    .post("http://localhost:8080/api/products", userJson, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      maxRedirects: 0,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
}

export default { getProducts, productsDataPost };
