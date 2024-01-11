import React, { useEffect, useState } from "react";
import "./CardUser.css";
import axios from "axios";

const Url = "http://localhost:9000/api/users";

async function getUsers() {
  try {
    const response = await axios.get(Url);
    const dataUsers: Record<
      string,
      { id: number; name: string; last_name: string; email: string; cpf: string }
    > = response.data;

    const userArray = Object.entries(dataUsers).map(([key, value]) => ({
      key,
      ...value,
    }));

    return userArray.map((dados) => {
      return (
        <div key={dados.id} className="Children">
          <div className="divName" rel="noopener noreferrer" id="sName">Nome: {dados.name}</div>
          <div className="divLastName" rel="noopener noreferrer" id="sSobrenome">Sobrenome: {dados.last_name}</div>
          <div className="divEmail" rel="noopener noreferrer" id="sEmail">Email: {dados.email}</div>
          <div className="divCpf" rel="noopener noreferrer" id="sCpf">Cpf: {dados.cpf}</div>
          <button className="MyButton" onClick={() => UserDelete(dados.id)}> Excluir Usuário </button>
        </div>
      );
    });
  } catch (error) {
    console.log("Ocorreu um erro");
    return null;
  }
}

async function UserDelete(idUsuario: any) {


  var jsonId = {"id" : idUsuario}
  try {
    const response = await axios.delete(`${Url}/${jsonId}`);

    if (response.status === 204) {
      console.log('Usuário excluído com sucesso!');
    } else {
      console.error('Falha ao excluir o usuário. Código de status:', response.status);
    }
  } catch (error) {
    console.error('Erro ao excluir o usuário');
  }
}

function CardUser() {
  const [userElements, setUserElements] = useState<JSX.Element[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const users = await getUsers();
      if (users) {
        setUserElements(users);
      }
    }

    fetchData();
  }, []);

  return <div id="newDiv" className="renderDiv">{userElements}</div>;
}

export default CardUser;
























// import React, { useEffect } from "react";
// import "./CardUser.css";
// import axios from "axios";




// const Url = "http://localhost:9000/api/users";

// var resposta;

// async function getUsers(divId: HTMLDivElement) {
//   await axios.get(Url).then((response) => {
//     console.log("Aqui está a minha response " + response.data)

//     const dataUsers: Record<
//       string,
//       { id: number; name: string; last_name: string; email: string; cpf: string }
//     > = response.data;

//     const userArray = Object.entries(dataUsers).map(([key, value]) => ({
//       key,
//       ...value,
//     }));


//     var myDiv = "";

//     userArray.map((dados) => {
//       const userId = dados.id;

//       return (

//         myDiv=
//         <div>
//           <div className="Children">
//             <div className="divName" rel="noopener noreferrer" id="sName">Nome: ${dados.name}</div>
//             <div className="divLastName" rel="noopener noreferrer" id="sSobrenome">Sobrenome: ${dados.last_name}</div>
//             <div className="divEmail" rel="noopener noreferrer" id="sEmail">Email: ${dados.email}</div>
//             <div className="divCpf" rel="noopener noreferrer" id="sCpf">Cpf: ${dados.cpf}</div>
//             <button className="MyButton" onClick={() => UserDelete(dados.id)}> Excluir Usuário </button>
//           </div>
//         </div>
//       )

//     });

//     // divId.innerHTML = teste(userArray);

//     divId.innerHTML = myDiv;

//   }).catch((error) => {
//     console.log("Ocorreu um erro");
//   });
// }

// async function UserDelete(idUsuario: any) {
//   try {

//     console.log("Cheguei na minha função de deletar")
//     // Realizar a solicitação DELETE para a API com o ID do usuário a ser excluído
//     const response = await axios.delete(`${Url}/${idUsuario}`);

//     // Verificar se a exclusão foi bem-sucedida
//     if (response.status === 204) {
//       console.log('Usuário excluído com sucesso!');
//     } else {
//       console.error('Falha ao excluir o usuário. Código de status:', response.status);
//     }
//   } catch (error) {
//     console.error('Erro ao excluir o usuário');
//   }
// };





// function CardUser() {
//   useEffect(() => {
//     var divId = (document.getElementById("newDiv") as HTMLDivElement) || null;
//     getUsers(divId);
//   }, []);

//   return <div id="newDiv" className="renderDiv"></div>;
// }

// export default CardUser;


