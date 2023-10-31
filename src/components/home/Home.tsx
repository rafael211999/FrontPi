import React from "react";
import Card from "../card/Card";
import Produtos from "../cardProdutos/Produtos";
import Navibar from "../navibar/Navibar";

function Home() {
  return (
    <div>
      <Navibar/>
      <Card />
      <Produtos />
    </div>
  );
}

export default Home;
