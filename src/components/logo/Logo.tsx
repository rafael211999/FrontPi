import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../imagem/R.gif";

function Logo() {
  return (
    <div className="MyLogo">
      <Link to="/" target="_blank" rel="noopener noreferrer">
        <img src={logo} alt="Logo" />
      </Link>
    </div>
  );
}

export default Logo;
