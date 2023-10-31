import React from "react";
import "./Navibar.css";
import { Link } from "react-router-dom";


function Navibar() {
  return (
    <div>
     
      <div className="Nav">
        <div className="Button">
          <Link to="/" target="_blank" rel="noopener noreferrer">
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
            Cadastro de produtos
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
