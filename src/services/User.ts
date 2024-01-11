import React from "react";
import axios from "axios";
import imagem from "../../imagem/OIP.png";
import "../components/cardUser/CardUser.css"

// function teste(dados : any){
//     return(
//         {
//             dados.map((dados) => {
    
//                 console.log("Aqui está o meu id:  " + dados.id)
    
                 
//                 <div class="Children">
//                     <div class="divName" type="text" rel="noopener noreferrer" id="sName">Nome: ${dados.name}</div>
//                     <div class="divLastName" type="text" rel="noopener noreferrer" id="sSobrenome">Sobrenome: ${dados.last_name}</div>
//                     <div class="divEmail" type="text" rel="noopener noreferrer" id="sEmail">Email: ${dados.email}</div>
//                     <div class="divCpf" type="text" rel="noopener noreferrer" id="sCpf">Cpf: ${dados.cpf}</div>
//                     <button class="MyButton" onClick={() => UserDelete(dados.id)}> Excluir Usuário </button>
//                 </div>
            
//             });
//         }
//     )
// }


const Url = "http://localhost:9000/api/users";

async function getUsers(divId: HTMLDivElement) {
    await axios.get(Url).then((response) => {
        console.log("Aqui está a minha response " + response.data)

        const dataUsers: Record<
            string,
            {id : number; name: string; last_name: string; email: string; cpf: string }
        > = response.data;

        const userArray = Object.entries(dataUsers).map(([key, value]) => ({
            key,
            ...value,
        }));


        var myDiv = "";
        // var cont = 0;
        // var keyArray = ""; 

        userArray.map((dados) => {
            const userId = dados.id;
            myDiv += `
            <div class="Children">
                <div class="divName" type="text" rel="noopener noreferrer" id="sName">Nome: ${dados.name}</div>
                <div class="divLastName" type="text" rel="noopener noreferrer" id="sSobrenome">Sobrenome: ${dados.last_name}</div>
                <div class="divEmail" type="text" rel="noopener noreferrer" id="sEmail">Email: ${dados.email}</div>
                <div class="divCpf" type="text" rel="noopener noreferrer" id="sCpf">Cpf: ${dados.cpf}</div>
                <button class="MyButton" onClick={() => UserDelete(dados.id)}> Excluir Usuário </button>
            </div>
        `
        

        ;
        });

        // divId.innerHTML = teste(userArray);

        divId.innerHTML =  myDiv;

    }).catch((error) => {
        console.log("Ocorreu um erro");
    });
}

async function UserDelete(idUsuario : any) {
    try {
  
      console.log("Cheguei na minha função de deletar")
      // Realizar a solicitação DELETE para a API com o ID do usuário a ser excluído
      const response = await axios.delete(`${Url}/${idUsuario}`);
  
      // Verificar se a exclusão foi bem-sucedida
      if (response.status === 204) {
        console.log('Usuário excluído com sucesso!');
      } else {
        console.error('Falha ao excluir o usuário. Código de status:', response.status);
      }
    } catch (error) {
      console.error('Erro ao excluir o usuário');
    }
  };
  
  

export default  {getUsers };