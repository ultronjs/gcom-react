import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/cartContext";

function ProductCard({ productDetails }) {
  const { cartDispatch, postCartData } = useCart();

  return (
    <div
      key={productDetails._id}
      className="card product_card card_with_dismiss"
    >
      <div className="card_content">
        <img
          className="card_content_image"
          src={productDetails.productImg}
          alt=""
        />
        {productDetails.addedToWishList ? (
          <i className="fas fa-heart fa-lg card_dismiss card_product_heart_filled position_absolute right-10 top-20"></i>
        ) : (
          <i className="far fa-heart fa-lg card_dismiss card_product_heart position_absolute right-10 top-20"></i>
        )}

        {productDetails.isBestSeller ? (
          <span className="badge badge_warning position_absolute left-0 top-20">
            Best Seller
          </span>
        ) : (
          <span className="badge badge_warning position_absolute left-0 top-20">
            {productDetails.rating}
            <i className="fas fa-star"></i>
          </span>
        )}

        <div className="card_content_header">
          <div className="primary_header">{productDetails.name}</div>
          <div className="secondary_header">By {productDetails.brand}</div>
          <div className="fs-s">Rs {productDetails.currentPrice}</div>
          <div>
            <span className="fs-xs text_crossed">Rs {productDetails.mrp}</span>
            <span className="fs-xs color_grey_200">
              {productDetails.discount}% off
            </span>
          </div>
        </div>
      </div>
      <div className="card_actions flex-center">
        <div className="card_button_action">
          {productDetails.addedToCart ? (
            <Link to="/cart">
            <button
              className="btn btn_primary_outline"
            >
              GO TO CART
            </button>
            </Link>
          ) : (
            <button
              onClick={() => {
                productDetails.addedToCart = true;
                postCartData(productDetails)
                cartDispatch({
                  type: "ADD_TO_CART",
                  payload: productDetails,
                });
              }}
              className="btn btn_primary_outline"
            >
              ADD TO CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
