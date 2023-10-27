import React from "react";
import "./UserInput.css";
import axios from "axios";

async function userDataGet() {
  var userNameInput =
    (document.getElementById("userName") as HTMLInputElement) || null;
  var userLastNameInput =
    (document.getElementById("userLastName") as HTMLInputElement) || null;
  var userEmailInput =
    (document.getElementById("userEmail") as HTMLInputElement) || null;
  var userCpfInput =
    (document.getElementById("userCpf") as HTMLInputElement) || null;

  const userUrl = "http://localhost:8080/api/users";

  var userDataJason = {
    name: userNameInput.value.toString(),
    last_name: userLastNameInput.value.toString(),
    email: userEmailInput.value.toString(),
    cpf: userCpfInput.value.toString(),
  };

  /*   newDiv.innerHTML = `<div> 
    <div> 
    Nome: ${userNameInput.value}</br>
    </div> 
    <div>
    Sobrenome: ${userLastNameInput.value}</br>
    </div>
    <div> 
    Email: ${userEmailInput.value}</br>
    </div>
    <div> 
    Cpf: ${userCpfInput.value}</br>
    </div> 
    </div>`;
 */

  await axios.get(userUrl).then((response) => {
    // O Record serve para poder permitir que a gente traga a chave valor do JSon e coloque no array
    // Aqui eu estou criando um array através do meu Record, para poder receber os meus valores, que tem que estar do mesmo jeito que está no meu backend.
    const dataUser: Record<
      string,
      { name: string; last_name: string; email: string; cpf: string }
    > = response.data;

    // Aqui eu estou criando um array que vai receber o meu objeto e que vai pegar pelas chaves, os meus valores
    const userArray = Object.entries(dataUser).map(([key, value]) => ({
      key,
      ...value, // Os ... serve para pegar tudo.
    }));

    userArray.forEach((i) => {
      const newDiv = document.createElement("div");

      newDiv.innerHTML = `
        <div>
          Nome: ${i.name}</br>
        </div>
        <div>
          Sobrenome: ${i.last_name}</br> 
        </div>
        <div>
          Email: ${i.email}</br> 
        </div>
        <div>
          Cpf: ${i.cpf}
        </div>
        </br> 
        </br>
      `;

      document.body.appendChild(newDiv);
    });
  });
}

// async function userDataPost() {
//   const userPostUrl = "http://localhost:8080/api/users";
//   var userJson = {
//     "name": "Camila",
//     "last_name": "maluca",
//     "email": "rsteste.com",
//     "cpf": "12642961755",
//   };

//   await axios.post(userPostUrl, userJson,
//     {
//     headers: {
//     "Content-Type" : "application/json",
//     }
//   })
//   .then((response) => {
//     console.log(response);
//   });
// }

async function userDataPost() {
  // Montando o objeto de dados JSON
  const userJson = {
    name: "Camila",
    last_name: "maluca",
    email: "rsteste.com",
    cpf: "12642961755",
  };

  await axios
    .post("http://localhost:8080/api/users", userJson, {
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

function UserIput() {
  return (
    <div className="userInputMain">
      <div className="userInputBody">
        <label>Nome: </label>
        <input type="text" placeholder="text" id="userName" />
      </div>
      <div className="userInputBody">
        <label>Sobrenome: </label>
        <input type="text" placeholder="text" id="userLastName" />
      </div>
      <div className="userInputBody">
        <label>Email: </label>
        <input type="text" placeholder="text" id="userEmail" />
      </div>
      <div className="userInputBody">
        <label>Cpf: </label>
        <input type="text" placeholder="text" id="userCpf" />
      </div>
      <div className="button">
        <button id="sendBtn" onClick={userDataGet}>
          Obter
        </button>
      </div>
      <br />
      <div className="button">
        <button id="sendBtnPost" onClick={userDataPost}>
          Enviar
        </button>
      </div>

      <br />
    </div>
  );
}

export default UserIput;
