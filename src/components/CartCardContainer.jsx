import React,{ useEffect } from 'react'
import { useFilter } from '../context';
import { useCart } from '../context/cartContext'
import { searchFilter } from '../utils/filter';
import CartProductCard from './CartProductCard'

function CartCardContainer() {
    const { cart } = useCart();
    const {search} = useFilter()
  return (
      <div className="cart_card_container m-mid">
      {cart && searchFilter(cart,search).map(element =><CartProductCard cartDetails={element}></CartProductCard>)}
      </div>
  )
}

export default CartCardContainer