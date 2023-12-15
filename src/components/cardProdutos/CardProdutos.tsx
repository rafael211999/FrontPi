import React, { useEffect } from "react";
import "./CardProdutos.css";
import getProducts from "../../services/Products";

function CardProdutos() {
  useEffect(() => {
    var divId = (document.getElementById("newDiv") as HTMLDivElement) || null;
    getProducts.getProducts(divId);
  }, []);

  return <div id="newDiv" className="renderDiv"></div>;
}

export default CardProdutos;
