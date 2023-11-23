import React from "react";
import Card from "../card/Card";
import Produtos from "../cardProdutos/Produtos";
import Navibar from "../navibar/Navibar";
import UserIput from "../userInput/UserInput";

function Home() {
  return (
    <div>
      <Navibar/>
      <Card />
      <Produtos />
      <UserIput/>
    </div>
  );
}

export default Home;
