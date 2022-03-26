import "../index.css";
import React from "react";
import { Link } from "react-router-dom";
import {SonyImage,RockStarImage,EAImage,WarnerImage,MarvelImage,Ubisoft, UbisoftImage} from "../assets"

function GamesFromBrands() {
  const brands = [
    { name: "Sony", linkTo: "/products", imgSrc: SonyImage },
    { name: "RockStar", linkTo: "/products", imgSrc: RockStarImage },
    { name: "EA", linkTo: "/products", imgSrc: EAImage },
    { name: "Warner", linkTo: "/products", imgSrc: WarnerImage },
    { name: "Marvel", linkTo: "/products", imgSrc: MarvelImage },
    { name: "Ubisoft", linkTo: "/products", imgSrc: UbisoftImage },
  ];
  return (
    <div>
      <p className="h4 pl-x-small">Games from top brands</p>
      <div className="container_games_from_top_brands px-small pb-small">
        {brands &&
          brands.map((element) => (
            <Link className="link_wrapper" to={element.linkTo}>
              <div className="card_featured_category">
                <img src={element.imgSrc} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default GamesFromBrands;
