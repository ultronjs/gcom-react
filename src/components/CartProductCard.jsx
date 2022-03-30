import React from 'react'
import { useCart } from '../context/cartContext';
import {formatCurreny} from "../utils/format"; 
import { BsFillPlusCircleFill } from "react-icons/bs";
import {FiMinusCircle} from "react-icons/fi"
import "../index.css"
import { useWishList } from '../context';

function CartProductCard({cartDetails}) {
    const { deleteCartData ,increaseQuantity,decreaseQuantity } = useCart();
    const {postWishListData} = useWishList()
  return (
    <>
      <div className="card card_horizontal badge_wrapper">
        <div className="card_content card_content_horizontal">
          <img
            className="card_content_image_horizontal"
            src={cartDetails.productImg}
            alt=""
          />
          <div className="card_content_body_horizontal">
            <i
              onClick={() => deleteCartData(cartDetails._id)}
              className="far fa-times-circle fa-lg card_dismiss position_absolute right-0 top-10"
            ></i>
            <div className="card_content_header card_content_header_horizontal">
              <div className="primary_header text_center">
                {cartDetails.name}
              </div>
              <div className="secondary_header">By {cartDetails.brand}</div>
              <div className="fs-s">
                {formatCurreny(cartDetails.currentPrice)}
              </div>
              <div>
                <span className="fs-xs text_crossed">
                  {formatCurreny(cartDetails.mrp)}
                </span>
                <span className="fs-xs color_grey_200">
                  {" "}
                  {cartDetails.discount}% off
                </span>
              </div>
              <div className="flex flex-ai-center">
                <BsFillPlusCircleFill
                  cursor="pointer"
                  onClick={() => increaseQuantity(cartDetails._id)}
                />
                <label htmlFor="quantity" className="mr-x-small">
                  Quantity:{" "}
                </label>
                <span className="mx-x-small">{cartDetails.qty}</span>
                {cartDetails.qty > 1 && (
                  <FiMinusCircle
                    cursor="pointer"
                    onClick={() => decreaseQuantity(cartDetails._id)}
                  />
                )}
              </div>
            </div>
            <div className="card_actions card_actions_horizontal flex-jc-center">
              <div className="card_button_action">
                <button
                  onClick={() => {
                    postWishListData(cartDetails)
                    deleteCartData(cartDetails._id)
                  }}
                  className="btn btn_primary_outline fs-xs"
                >
                  MOVE TO WISHLIST
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProductCard