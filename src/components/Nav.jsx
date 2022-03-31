import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth, useCart,useWishList,useToast } from "../context";
import WishList from "../pages/WishList";

export default function Nav() {
  const { signInStatus, signInStatusDispatch } = useAuth();
  const {cart} = useCart()
  const {wishList} = useWishList()
  const {addToast} = useToast();
  const wishListToast=() =>{
    addToast({type:"Info",msg:"Login to Access WishList"})
  }
  const cartToast = () => {
    addToast({ type: "Info", msg: "Login to Access Cart" });
  };
  const logOut =() => {
    localStorage.removeItem("token")
    signInStatusDispatch({ type: "SIGN_OUT"});
  }
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
        {signInStatus.status ? (
          <>
            <button className="btn btn_light" onClick={logOut}>
              Log Out
            </button>
            <Link className="link_wrapper" to="/wishlist">
              <span className="badge_wrapper">
                <i className="fas fa-heart fa-2x"></i>
                {wishList.length > 0 && (
                  <span className="badge badge_circle badge_primary position_absolute right-0 top-0">
                    {wishList.length}
                  </span>
                )}
              </span>
            </Link>
            <Link className="link_wrapper" to="/cart">
              <span className="badge_wrapper">
                <i className="fas fa-shopping-cart fa-2x"></i>
                {cart.length > 0 && (
                  <span className="badge badge_circle badge_primary position_absolute right-0 top-0">
                    {cart.length}
                  </span>
                )}
              </span>
            </Link>
          </>
        ) : (
          <>
            <Link className="link_wrapper" to="/login">
              <button className="btn btn_light">Log In</button>
            </Link>
            <span className="badge_wrapper">
              <i onClick={wishListToast} className="fas fa-heart fa-2x"></i>
            </span>
            <span className="badge_wrapper">
              <i onClick={cartToast} className="fas fa-shopping-cart fa-2x"></i>
            </span>
          </>
        )}
      </div>
    </nav>
  );
}
