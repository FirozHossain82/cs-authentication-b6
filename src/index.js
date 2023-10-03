import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";
import AuthProviders from "./contexts/AuthProviders.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProviders>
      <App/>
    </AuthProviders>
  </React.StrictMode>
);
