import React, { useEffect } from "react";
import "./CardSales.css";
import getSales from "../../services/Sales";

function CardSales() {
  useEffect(() => {
    var divId = (document.getElementById("newDiv") as HTMLDivElement) || null;
    getSales.getSales(divId);
  }, []);

  return <div id="newDiv" className="renderDiv"></div>;
}

export default CardSales;