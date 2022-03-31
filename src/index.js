import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom"
import { FilterProvider,CartProvider,WishListProvider, AuthProvider, ToastProvider } from "./context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <FilterProvider>
        <AuthProvider>
          <CartProvider>
            <WishListProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </WishListProvider>
          </CartProvider>
        </AuthProvider>
      </FilterProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
