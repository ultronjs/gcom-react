import "../index.css";
import React from "react";
import { Link } from "react-router-dom";

function FeaturedCategory() {
  return (
    <div>
      <p className="h4 pl-x-small">Featured Category</p>
      <div className="container_featured_category px-small pb-small">
        <Link className="link_wrapper" to="/products">
          <div className="card_featured_category">
            <i className="fab fa-playstation fa-4x"></i>
            <span className="h4">PS5</span>
          </div>
        </Link>
        <Link className="link_wrapper" to="/products">
          <div className="card_featured_category">
            <i className="fab fa-xbox fa-4x"></i>
            <span className="h4">XBOX</span>
          </div>
        </Link>
        <Link className="link_wrapper" to="/products">
          <div className="card_featured_category">
            <img src="https://img.icons8.com/ios-filled/64/000000/nintendo-switch-logo.png" />
            <span className="h4">Nineto Switch</span>
          </div>
        </Link>
        <Link className="link_wrapper" to="/products">
          <div className="card_featured_category">
            <i className="fas fa-desktop fa-4x"></i>
            <span className="h4">Desktop/PC</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCategory;
