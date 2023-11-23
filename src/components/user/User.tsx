import React from "react";
import Navibar from "../navibar/Navibar";
import axios from "axios";

function User() {

  async function userDataPost() {
    // Montando o objeto de dados JSON

    var name = (document.getElementById("sName") as HTMLInputElement) || null;
    var lastName = (document.getElementById("sSobrenome") as HTMLInputElement) || null;
    var email = (document.getElementById("sEmail") as HTMLInputElement) || null;
    var cpf = (document.getElementById("sCpf") as HTMLInputElement) || null;
    


    const userJson = {
      name: name.value.toString(),
      last_name: lastName.value.toString(),
      email: email.value.toString(),
      cpf: cpf.value.toString(),
    };
  
    await axios
      .post("http://localhost:9000/api/users", userJson, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
        maxRedirects: 0,
      })
      .then((response) => {
        console.log(response);
        alert("Usuário cadastrado com sucesso")
      })
      .catch((error) => {
        console.log(error);
      });
  }






  return (
    <>
     <Navibar />
      <div className="ContainerInput">
        <h1>Cadastro de Usuário</h1>
        <div className="Children">
          <input
            className="MyInput"
            type="text"
            placeholder="Nome"
            rel="noopener noreferrer"
            id="sName"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Sobrenome"
            rel="noopener noreferrer"
            id="sSobrenome"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Email"
            rel="noopener noreferrer"
            id="sEmail"
          />

          <input
            className="MyInput"
            type="text"
            placeholder="Cpf"
            rel="noopener noreferrer"
            id="sCpf"
          />
        </div>

        <button id="cadastrarProduto" className="MyButton" onClick={userDataPost}> Cadastrar </button>
      </div>
    </>
  );
}

export default User;
