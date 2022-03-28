import React from "react";
import { Link } from "react-router-dom";
import {
  controllerImage,
  headsetImage,
  racingWheelImage,
  streamingDevicesImage,
  vrImage,
  thumbGripsImage,
  casesAndCoversImage,
  internationBrandsImage,
} from "../assets";
import { useFilter } from "../context/FilterContext";

function PickYourAccessories() {
  const { dispatch } = useFilter()
  const accessories = [
    {
      name: "Controller",
      value: "Controller",
      linkTo: "/products",
      src: controllerImage,
    },
    {
      name: "Headset",
      value: "Headset",
      linkTo: "/products",
      src: headsetImage,
    },
    {
      name: "Racing Wheel",
      value: "Racing Wheel",
      linkTo: "/products",
      src: racingWheelImage,
    },
    {
      name: "Streaming Devices",
      value: "Streaming Devices",
      linkTo: "/products",
      src: streamingDevicesImage,
    },
    {
      name: "VR",
      value: "VR",
      linkTo: "/products",
      src: vrImage,
    },
    {
      name: "Thumb Grips",
      value: "Thumb Grips",
      linkTo: "/products",
      src: thumbGripsImage,
    },
    {
      name: "Cases and Covers",
      value: "Thumb Grips",
      linkTo: "/products",
      src: casesAndCoversImage,
    },
    {
      name: "International Brands",
      value: "International Brands",
      linkTo: "/products",
      src: internationBrandsImage,
    },
  ];
  return (
    <div>
      <p className="h4 pl-x-small">Pick your accessories</p>
      <div className="container_pick_your_accessories px-small pb-small">
        {accessories &&
          accessories.map((element) => (
            <Link className="link_wrapper" to={element.linkTo}>
              <div
                className="card card_container_pick_your_accessories px-x-small"
                onClick={() =>
                  dispatch({
                    type: "sortByAccessoriesType",
                    payload: element.value,
                  })
                }
              >
                <img className="img_responsive" src={element.src} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default PickYourAccessories;
