import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./routes";
import { GlobalStyle } from "./styles";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainRoutes />
    <GlobalStyle />
    <ToastContainer />
  </React.StrictMode>
);
