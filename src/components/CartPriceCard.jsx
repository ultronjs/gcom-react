import React from 'react'
import { useCart } from '../context/cartContext';
import { formatCurreny } from '../utils/format';

function CartPriceCard() {
  const { cart,getPriceForPriceCard } = useCart ()
  const {getTotalDiscount,getTotalMrp,getDeliveryPrice} = getPriceForPriceCard()
  return (
    <div className="card price_card flex flex-col">
      <div className="m-x-small px-x-small">
        <span>
          <strong>Price Details</strong> ({cart.length} Items)
        </span>
      </div>
      <div className="flex flex-row flex-jc-space-between mx-x-small mb-x-small px-x-small">
        <span>Total MRP</span>
        <span>{formatCurreny(getTotalMrp)}</span>
      </div>
      <div className="flex flex-row flex-jc-space-between mx-x-small mb-x-small px-x-small">
        <span>Discount on MRP</span>
        <span>-{formatCurreny(getTotalDiscount)}</span>
      </div>
      <div className="flex flex-row flex-jc-space-between mx-x-small mb-x-small px-x-small">
        <span>Coupon Discount</span>
        <a>Apply Coupon</a>
      </div>
      <div className="flex flex-row flex-jc-space-between mx-x-small mb-x-small px-x-small">
        <span>Delivery Fee</span>
        <span className="text_crossed">+{formatCurreny(getDeliveryPrice)}</span>
      </div>
      <div className="flex flex-row flex-jc-space-between m-x-small pt-x-small cart_total_amount px-x-small">
        <span>Total Amount</span>
        <span>{formatCurreny(getTotalMrp - getTotalDiscount)}</span>
      </div>
      <button className="btn btn_primary fw-semibold mx-x-small">
        Place Order
      </button>
      <div className="flex flex-col flex-center gap-s my-x-small">
        <span className="fs-xs">100% Secure</span>
        <i className="fas fa-shield-check fa-4x"></i>
      </div>
      <div className="flex flex-center gap-s my-x-small">
        <i className="fab fa-cc-visa fa-2x"></i>
        <i className="fab fa-cc-mastercard fa-2x"></i>
        <i className="fab fa-cc-paypal fa-2x"></i>
        <i className="fab fa-cc-diners-club fa-2x"></i>
        <i className="fab fa-cc-amex fa-2x"></i>
      </div>
    </div>
  );
}

export default CartPriceCard