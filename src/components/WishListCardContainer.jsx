import React from 'react'
import { useFilter, useWishList } from '../context'
import { searchFilter } from '../utils/filter'
import WishListCard from './WishListCard'

function WishListCardContainer() {
    const {wishList} = useWishList()
    const {search} = useFilter()

  return (
    <div className="product_grid grid-jc-center">
      {wishList &&
        searchFilter(wishList,search).map((element) => <WishListCard wishListDetails={element} />)}
    </div>
  );
}

export default WishListCardContainer