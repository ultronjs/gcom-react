import React from "react";
import { Link } from "react-router-dom";
import { useFilter } from "../context/FilterContext";

function PickYourAccessories() {
  const { dispatch } = useFilter()
  const accessories = [
    {
      name: "Controller",
      value: "Controller",
      linkTo: "/products",
      src: "/assets/controller.jpg",
    },
    {
      name: "Headset",
      value: "Headset",
      linkTo: "/products",
      src: "/assets/headset.jpg",
    },
    {
      name: "Racing Wheel",
      value: "Racing Wheel",
      linkTo: "/products",
      src: "/assets/racing_wheels.jpg",
    },
    {
      name: "Streaming Devices",
      value: "Streaming Devices",
      linkTo: "/products",
      src: "/assets/streaming_devices.jpg",
    },
    {
      name: "VR",
      value: "VR",
      linkTo: "/products",
      src: "/assets/vr.jpg",
    },
    {
      name: "Thumb Grips",
      value: "Thumb Grips",
      linkTo: "/products",
      src: "/assets/thumb_grips.jpg",
    },
    {
      name: "Cases and Covers",
      value: "Cases and Covers",
      linkTo: "/products",
      src: "/assets/cases_and_covers.jpg",
    },
    {
      name: "International Brands",
      value: "International Brands",
      linkTo: "/products",
      src: "/assets/international_brands.jpg",
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
