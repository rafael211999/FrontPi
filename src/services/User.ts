import React from "react";
import axios from "axios";
import imagem from "../../imagem/OIP.png";
import "../components/cardUser/CardUser.css"




const Url = "http://localhost:9000/api/users";

async function getUsers(divId: HTMLDivElement) {
    await axios.get(Url).then((response) => {

        const dataUsers: Record<
            string,
            { name: string; last_name: string; email: string; cpf: string }
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
                    class="divName"
                    type="text"
                    rel="noopener noreferrer"
                    id="sName"
                >Nome: ${dados.name}  </div>

                <div
                    class="divLastName"
                    type="text"
                    rel="noopener noreferrer"
                    id="sSobrenome"
                >Sobrenome: ${dados.last_name} </div>

                <div
                    class="divEmail"
                    type="text"
                    rel="noopener noreferrer"
                    id="sEmail"
                >Email: ${dados.email}</div>

                <div
                    class="divCpf"
                    type="text"
                    rel="noopener noreferrer"
                    id="sCpf"
                >Cpf: ${dados.cpf} </div>
            </div>
        

    `;

            console.log("Aqui está os meus dados", dados)
        });

        divId.innerHTML = myDiv;

    }).catch((error) => {
        console.log("Ocorreu um erro");
    });
}

export default { getUsers };
