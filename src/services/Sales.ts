import React from "react";
import axios from "axios";

const Url = "http://localhost:8080/api/sales";

async function getSales(divId: HTMLDivElement) {
    await axios.get(Url).then((response) => {
      
      const dataSales: Record<
        string,
        { user: string; produto: string; valor: number; venda_final: boolean ; desconto: number ; venda: string}
      > = response.data;
  
      const userArray = Object.entries(dataSales).map(([key, value]) => ({
        key,
        ...value,
      }));
  
      var teste = "";
      userArray.forEach((dados) => {
       
        teste += `
  
        <div class="Container">
        <img src=${dados.produto} alt="Aqui é minha imagem" class="Img" />
        <div class="Descricao">
        <div class="TituloProduto">Nome: ${dados.user} </div>
        <div class="SubTitulo">Anime: ${dados.valor}</div>
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