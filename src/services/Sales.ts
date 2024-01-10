import React from "react";
import axios from "axios";
import imagem from "../../imagem/OIP.png";
import "../components/cardSales/CardSales.css"




const Url = "http://localhost:9000/api/sales";

async function getSales(divId: HTMLDivElement) {
    await axios.get(Url).then((response) => {

        const dataUsers: Record<
            string,
            { usuario: string; produto: string; valor: GLfloat ; venda_final: string; desconto : GLfloat; venda: string }
        > = response.data;

        const userArray = Object.entries(dataUsers).map(([key, value]) => ({
            key,
            ...value,
        }));

        var myDiv = "";
        userArray.forEach((dados) => {

            myDiv += `
      

            <div class="Children">
                <div
                    class="divUser"
                    type="text"
                    rel="noopener noreferrer"
                >Usuario: ${dados.usuario}  </div>

                <div
                    class="divProduto"
                    type="text"
                    rel="noopener noreferrer"
                >Produto: ${dados.produto} </div>

                <div
                    class="divValor"
                    type="text"
                    rel="noopener noreferrer"
                  
                >Valor: ${dados.valor}</div>

                <div
                    class="divVendaFinal"
                    type="text"
                    rel="noopener noreferrer"
                    id="sCpf"
                >Venda final: ${dados.venda_final} </div>
                <div
                    class="divDesconto"
                    type="text"
                    rel="noopener noreferrer"
                    id="sCpf"
                >Desconto: ${dados.desconto} </div>
                <div
                    class="divVenda"
                    type="text"
                    rel="noopener noreferrer"
                    id="sCpf"
                >Numero da venda: ${dados.venda} </div>
            </div>
        

    `;

            console.log("Aqui está os meus dados", dados)
        });

        divId.innerHTML = myDiv;

    }).catch((error) => {
        console.log("Ocorreu um erro");
    });
}

export default { getSales };
