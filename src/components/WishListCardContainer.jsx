import React from 'react'
import { useWishList } from '../context'
import WishListCard from './WishListCard'

function WishListCardContainer() {
    const {wishList} = useWishList()

  return (
    <div className="product_grid grid-jc-center">
      {wishList &&
        wishList.map((element) => <WishListCard wishListDetails={element} />)}
    </div>
  );
}

export default WishListCardContainer