import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext";

function GamesFromBrands() {
  const { dispatch } = useFilter()
  const brands = [
    {
      name: "Sony",
      value: "Sony",
      linkTo: "/products",
      imgSrc: "/assets/sony (1).png",
    },
    {
      name: "RockStar",
      value: "RockStar",
      linkTo: "/products",
      imgSrc: "/assets/rockstar.png",
    },
    {
      name: "EA",
      value: "EA",
      linkTo: "/products",
      imgSrc: "/assets/ea.png",
    },
    {
      name: "Warner",
      value: "Warner Bros",
      linkTo: "/products",
      imgSrc: "/assets/warner.png",
    },
    {
      name: "Marvel",
      value: "Marvel",
      linkTo: "/products",
      imgSrc: "/assets/marvel.png",
    },
    {
      name: "Ubisoft",
      value: "Ubisoft",
      linkTo: "/products",
      imgSrc: "/assets/ubisoft.png",
    },
  ];
  return (
    <div>
      <p className="h4 pl-x-small">Games from top brands</p>
      <div className="container_games_from_top_brands px-small pb-small">
        {brands &&
          brands.map((element) => (
            <Link className="link_wrapper" to={element.linkTo}>
              <div
                className="card_featured_category"
                onClick={() =>
                  dispatch({
                    type: "sortByBrands",
                    payload: element.value,
                  })
                }
              >
                <img src={element.imgSrc} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default GamesFromBrands;
