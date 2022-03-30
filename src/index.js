import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter, BrowserRouter as Router} from "react-router-dom"
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/cartContext";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <FilterProvider>
      <CartProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CartProvider>
    </FilterProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
