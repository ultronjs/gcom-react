import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import Mockman from "mockman-js";
import NotFound from "./pages/NotFound";
import { RequireAuth } from "./pages/RequireAuth";

function App() {
  return (
    <div className="App bg-body-color">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mockman" element={<Mockman />} />
        {/* Protected Paths */}
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <WishList />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
