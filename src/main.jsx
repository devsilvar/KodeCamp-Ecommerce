import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ShopProvider from "./Context/ShopContext.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <ShopProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ShopProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
