import React from "react";
import axios from "axios";
import imagem from "../../imagem/OIP.png";
import "../components/cardUser/CardUser.css"







const Url = "http://localhost:9000/api/users";


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


export default UserDelete;