import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import {SonyImage,RockStarImage,EAImage,WarnerImage,MarvelImage,Ubisoft, UbisoftImage} from "../assets"
import { useFilter } from "../context/FilterContext";

function GamesFromBrands() {
  const { dispatch } = useFilter()
  const brands = [
    {
      name: "Sony",
      value: "Sony",
      linkTo: "/products",
      imgSrc: SonyImage,
    },
    {
      name: "RockStar",
      value: "RockStar",
      linkTo: "/products",
      imgSrc: RockStarImage,
    },
    {
      name: "EA",
      value: "EA",
      linkTo: "/products",
      imgSrc: EAImage,
    },
    {
      name: "Warner",
      value: "Warner Bros",
      linkTo: "/products",
      imgSrc: WarnerImage,
    },
    {
      name: "Marvel",
      value: "Marvel",
      linkTo: "/products",
      imgSrc: MarvelImage,
    },
    {
      name: "Ubisoft",
      value: "Ubisoft",
      linkTo: "/products",
      imgSrc: UbisoftImage,
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
