import React from "react";
import "./Navibar.css";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../../imagem/R.gif";

function Navibar() {
  return (
    <div>
      <div className="MyLogo">
        <Link to="/home" target="_blank" rel="noopener noreferrer">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="Nav">
        <div className="Button">
          <Link to="/home" target="_blank" rel="noopener noreferrer">
            Home
          </Link>
        </div>
        <div className="Button">
          <Link to="/user" target="_blank" rel="noopener noreferrer">
            Cadastro usuários
          </Link>
        </div>
        <div className="Button">
          <Link to="/products" target="_blank" rel="noopener noreferrer">
            Cadastro produtos
          </Link>
        </div>
        <div className="Button">
          <Link to="/sales" target="_blank" rel="noopener noreferrer">
            Cadastro vendas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navibar;
