import React,{useEffect} from 'react'
import { useCart } from '../context/cartContext';
import CartCardContainer from './CartCardContainer'
import CartPriceContainer from './CartPriceContainer'
import EmptyCart from './EmptyCart';

function CartContainer() {
  const { cart, getCartData } = useCart();
  useEffect(() => {
    getCartData();
  }, []);
  return (
    <>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <div className="main_container grid m-small">
          <div className="h2 text_center">My Cart</div>
          <div className="text_center">{cart.reduce((acc,curVal)=>acc+curVal.qty,0)} Items</div>
          <div className="cart_container">
            <CartCardContainer />
            <CartPriceContainer />
          </div>
        </div>
      )}
    </>
  );
}

export default CartContainer