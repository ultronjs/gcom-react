import React,{useEffect} from 'react'
import { useWishList } from '../context';
import EmptyWishList from './EmptyWishList';
import WishListCardContainer from './WishListCardContainer';

function WishListContainer() {
    const {wishList,getWishListData} = useWishList()
    useEffect(() => {
      getWishListData()
    },[])
    
  return (
    <>
      {wishList.length === 0 ? (
        <EmptyWishList />
      ) : (
        <div className="main_container flex flex-col m-small">
          <div className="flex flex-col flex-ai-center">
            <span className="h2">My Wishlist</span>
            <span>{wishList.length} Items</span>
          </div>
          <WishListCardContainer />
        </div>
      )}
    </>
  );
}

export default WishListContainer