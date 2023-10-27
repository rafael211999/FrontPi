import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import reportWebVitals from "./reportWebVitals";
// import Mensagem from './components/mensagem/Mensagem';
// import UserIput from './components/userInput/UserInput';
import Navibar from "./components/navibar/Navibar";
import Card from "./components/card/Card";
import Produtos from "./components/cardProdutos/Produtos";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/routes/Home";
import Products from "./components/routes/Products";
import Sales from "./components/routes/Sales";
import User from "./components/routes/User";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
