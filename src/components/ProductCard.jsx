import React from "react";

function ProductCard({ productDetails }) {
  // {
  //     id: 12,
  //     name: "PS1",
  //     currentPrice: 50000,
  //     mrp: 59000,
  //     rating: 3,
  //     discount: "20%",
  //     outOfStock: true,
  //     brand: "Sony",
  //     productImg: "url",
  //     addedToWishList: true,
  //     isBestSeller: true,
  //     addedToCart: false,
  //   }
  return (
    <div className="card product_card card_with_dismiss">
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
          <span class="badge badge_warning position_absolute left-0 top-20">
            {productDetails.rating}
            <i class="fas fa-star"></i>
          </span>
        )}

        <div className="card_content_header">
          <div className="primary_header">{productDetails.name}</div>
          <div className="secondary_header">By {productDetails.brand}</div>
          <div className="fs-s">Rs {productDetails.currentPrice}</div>
          <div>
            <span className="fs-xs text_crossed">Rs {productDetails.mrp}</span>
            <span className="fs-xs color_grey_200">
              {productDetails.discount} off
            </span>
          </div>
        </div>
      </div>
      <div className="card_actions flex-center">
        <div className="card_button_action">
          {productDetails.addedToCart ? (
            <button className="btn btn_primary_outline">ADD TO CART</button>
          ) : (
            <button className="btn btn_primary_outline">
              REMOVE FROM THE CART
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
