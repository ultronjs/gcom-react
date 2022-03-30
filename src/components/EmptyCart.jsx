import React from 'react'
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div class="main_container flex flex-col flex-center py-small">
      <img class="empty_image" src="/assets/empty_cart.png" alt="EMPTY" />
      <div class="h3 text_center">Hey its feels so light!</div>
      <div class="h5 color_grey_200 text_center">
        There is nothing in your cart.Let's add some items
      </div>
      <Link to="/wishlist">
        <button class="btn btn_primary_outline">ADD ITEMS FROM WISHLIST</button>
      </Link>
    </div>
  );
}

export default EmptyCart