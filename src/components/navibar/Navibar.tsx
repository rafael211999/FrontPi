import React, { useEffect } from "react";
import "./Navibar.css";
import { Link } from "react-router-dom";
import { hostname } from "os";

function Navibar() {
  useEffect(() => {
    var hostName = document.location.pathname.split("/")[2];

    switch (hostName) {
      case "user":
        var resultado =
          (document.getElementById("user") as HTMLElement) || null;
        resultado.classList.add("Link");
        break;

      case "home":
        var resultado =
          (document.getElementById("home") as HTMLElement) || null;
        resultado.classList.add("Link");
        break;
      case "products":
        var resultado =
          (document.getElementById("products") as HTMLElement) || null;
        resultado.classList.add("Link");
        break;
      case "sales":
        var resultado =
          (document.getElementById("sales") as HTMLElement) || null;
        resultado.classList.add("Link");
        break;

      default:
        break;
    }
  }, []);

  return (
    <div>
      <div className="Nav">
        <div className="Button">
          <Link to="/home" id="home" rel="noopener noreferrer">
            Home
          </Link>
        </div>
        <div className="Button">
          <Link to="/user" id="user" rel="noopener noreferrer">
            Cadastro de usuários
          </Link>
        </div>
        <div className="Button">
          <Link to="/products" id="products" rel="noopener noreferrer">
            Cadastro de produtos
          </Link>
        </div>
        <div className="Button">
          <Link to="/sales" id="sales" rel="noopener noreferrer">
            Cadastro de vendas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navibar;
