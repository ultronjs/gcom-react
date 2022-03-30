import React from 'react'
import { useCart, useWishList } from '../context'
import { formatCurreny } from '../utils/format';

function WishListCard({ wishListDetails}) {
  const { deleteWishListData } = useWishList();
  const { postCartData } = useCart();
  return (
    <div className="card wishList_Card card_with_dismiss">
      <div className="card_content">
        <img
          className="card_content_image"
          src="../assets/card_image.png"
          alt=""
        />
        <i
          onClick={() => deleteWishListData(wishListDetails._id)}
          className="fas fa-heart fa-lg card_dismiss card_wishlist_heart position_absolute right-10 top-20"
        ></i>
        <span className="badge badge_warning position_absolute left-0 top-20">
          {wishListDetails.rating}
          <i className="fas fa-star"></i>
        </span>
        <div className="card_content_header">
          <div className="primary_header">{wishListDetails.name}</div>
          <div className="secondary_header">By {wishListDetails.brand}</div>
          <div className="fs-s">
            {formatCurreny(wishListDetails.currentPrice)}
          </div>
          <div>
            <span className="fs-xs text_crossed">
              {formatCurreny(wishListDetails.mrp)}
            </span>
            <span className="fs-xs color_grey_200">
              {" "}
              {wishListDetails.discount}% off
            </span>
          </div>
        </div>
      </div>
      <div className="card_actions flex-center">
        <div className="card_button_action">
          <button
            onClick={() => {
              postCartData(wishListDetails);
              deleteWishListData(wishListDetails._id);
            }}
            className="btn btn_primary_outline"
          >
            MOVE TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default WishListCard