import React,{ useEffect } from 'react'
import { useCart } from '../context/cartContext'
import CartProductCard from './CartProductCard'

function CartCardContainer() {
    const { cart } = useCart();
  return (
      <div className="cart_card_container m-mid">
      {cart && cart.map(element =><CartProductCard cartDetails={element}></CartProductCard>)}
      </div>
  )
}

export default CartCardContainer