import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

export default function Nav() {
  const {cart} =useCart()
  return (
    <nav className="navbar">
      <div className="nav_left_side flex flex-center gap-s">
        <Link className="link_wrapper" to="/">
          <i className="fas fa-axe-battle fa-3x"></i>
          <span className="h3">G-Commerce</span>
        </Link>
      </div>
      <div className="nav_search">
        <input className="input_regular input_round" placeholder="Search" />
        <button className="btn btn_light">Search</button>
      </div>
      <div className="nav_right_side">
        <Link className="link_wrapper" to="/login">
          <button className="btn btn_light">Log In</button>
        </Link>
        <Link className="link_wrapper" to="/wishlist">
          <span className="badge_wrapper">
            <i className="fas fa-heart fa-2x"></i>
            <span className="badge badge_circle badge_primary position_absolute right-0 top-0">
              4
            </span>
          </span>
        </Link>
        <Link className="link_wrapper" to="/cart">
          <span className="badge_wrapper">
            <i className="fas fa-shopping-cart fa-2x"></i>
            <span className="badge badge_circle badge_primary position_absolute right-0 top-0">
              {cart.length}
            </span>
          </span>
        </Link>
      </div>
    </nav>
  );
}
