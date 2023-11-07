import React, { useEffect } from "react";
import "./Produtos.css";
import getProducts from "../../services/Products";

function Produtos() {
  useEffect(() => {
    var divId = (document.getElementById("newDiv") as HTMLDivElement) || null;
    getProducts.getProducts(divId);
  }, []);

  return <div id="newDiv" className="PrincipalDiv"></div>;
}

export default Produtos;
