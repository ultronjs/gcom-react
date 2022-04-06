import React from 'react'
import { Link } from 'react-router-dom';

function EmptyWishList() {
  return (
    <div className="main_container flex flex-col flex-center py-small">
      <div className="h3 text_center">YOUR WISHLIST IS EMPTY</div>
      <div className="h5 color_grey_200 text_center">
        Add items that you like to your wishlist. Review them anytime and easily
        move them to the bag.
      </div>
      <img className="empty_image" src='./assets/empty_wishlist.png' alt="EMPTY WISHLIST" />
      <Link to="/products">
        <button className="btn btn_primary_outline">Continue Shopping</button>
      </Link>
    </div>
  );
}

export default EmptyWishList