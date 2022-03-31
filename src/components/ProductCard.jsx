import React from "react";
import { Link } from "react-router-dom";
import { useWishList,useAuth,useToast,useCart } from "../context/";
import { formatCurreny } from "../utils/format";

function ProductCard({ productDetails }) {
  const {  postCartData } = useCart();
  const { postWishListData,deleteWishListData } = useWishList();
  const { signInStatus } = useAuth();
  const { addToast } = useToast();
  const wishListToast = () => {
    addToast({ type: "Info", msg: "Login to Access WishList" });
  };
  const cartToast = () => {
    addToast({ type: "Info", msg: "Login to Access Cart" });
  };

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
          <i
            onClick={() => {
                productDetails.addedToWishList = false;
                deleteWishListData(productDetails._id);
              
            }}
            className="fas fa-heart fa-lg card_dismiss card_product_heart_filled position_absolute right-10 top-20"
          ></i>
        ) : (
          <i
            onClick={() => {
              if (signInStatus.status) {
                postWishListData(productDetails);
              } else {
                wishListToast();
              }
            }}
            className="far fa-heart fa-lg card_dismiss card_product_heart position_absolute right-10 top-20"
          ></i>
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
          <div className="fs-s">
            {formatCurreny(productDetails.currentPrice)}
          </div>
          <div>
            <span className="fs-xs text_crossed">
              {formatCurreny(productDetails.mrp)}
            </span>
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
              <button className="btn btn_primary_outline">GO TO CART</button>
            </Link>
          ) : (
            <button
              onClick={() => {
                if (signInStatus.status) {
                  postCartData(productDetails);
                } else {
                  cartToast();
                }
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
