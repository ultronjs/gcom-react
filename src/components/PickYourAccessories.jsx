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

function PickYourAccessories() {
  const accessories = [
    { 
        name: "Controller", 
        linkTo: "/", 
        src: controllerImage },
    { 
        name: "Headset", 
        linkTo: "/", 
        src: headsetImage },
    { 
        name: "Racing Wheel", 
        linkTo: "/", 
        src: racingWheelImage },
    {
        name: "Streaming Devices",
        linkTo: "/",
        src: streamingDevicesImage,
    },
    { 
        name: "VR", 
        linkTo: "/", 
        src: vrImage },
    { 
        name: "Thumb Grips", 
        linkTo: "/", 
        src: thumbGripsImage },
    {
        name: "Cases and Covers",
        linkTo: "/",
        src: casesAndCoversImage,
    },
    {
        name: "International Brands",
        linkTo: "/",
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
              <div className="card card_container_pick_your_accessories px-x-small">
                <img className="img_responsive" src={element.src} />
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default PickYourAccessories;
