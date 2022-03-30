import "../index.css";
import React from "react";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <Link to="/products">
      <img className="home_banner" src="/assets/ps5_unchartedjpg.jpg" alt="" />
    </Link>
  );
}

export default Banner;
