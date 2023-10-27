import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navibar from "./components/navibar/Navibar";

function App() {
  return (
    <div className="App">
      <Navibar />
      <Outlet />
    </div>
  );
}

export default App;
