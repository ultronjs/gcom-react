import React from 'react'
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="main_container flex flex-col flex-center py-small">
      <img className="empty_image" src="/assets/empty_cart.png" alt="EMPTY" />
      <div className="h3 text_center">Hey its feels so light!</div>
      <div className="h5 color_grey_200 text_center">
        There is nothing in your cart.Let's add some items
      </div>
      <Link to="/wishlist">
        <button className="btn btn_primary_outline">ADD ITEMS FROM WISHLIST</button>
      </Link>
    </div>
  );
}

export default EmptyCart