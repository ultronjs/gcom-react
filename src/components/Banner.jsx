import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import { BannerImage } from "../assets";

function Banner() {
  return (
    <Link to="/products">
      <img className="home_banner" src={BannerImage} alt="" />
    </Link>
  );
}

export default Banner;
