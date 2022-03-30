import { createContext, useContext, useReducer, useState,useEffect } from "react";
import { privateInstance, publicInstance } from "../utils/axios";

const CartContext = createContext()


const CartProvider = ({children}) => {
    const getCartData = async () => {
        console.log("i m getting triggered")
    return await privateInstance
      .get("/user/cart")
      .then(response => cartDispatch({type:"SET_DATA",payload:response.data.cart}))};

    const postCartData = async (product) => {
        console.log("i m here posting" ,{...product,quantity:1})
        return await privateInstance({
            method: "post",
            url: "/user/cart",
            data: {
                product
            }}).then(response=>console.log(response));
    };
    const deleteCartData = async (id) => {
        return await privateInstance({
            method: "delete",
            url: `/user/cart/:${id}`,
    }).then(response=>console.log(response))};
    
    const increaseQuantity = async (id) => {
        console.log("i am increasing quantity")
        return await privateInstance({
          method: "post",
          url: `/user/cart/:${id}`,
          data: {
            action: {
              type: "increment"
            },
          },
        }).then((response) =>
          {
            console.log(response)
            cartDispatch({
            type: "INCREASAE_QUANTITY",
            payload: response.data.cart,
          })}
        );
    }

    const decreaseQuantity = async (id) => {
      return await privateInstance({
        method: "post",
        url: `/user/cart/:${id}`,
        data: {
          action: {
            type: "decrement"
          },
        },
      }).then((response) =>
        cartDispatch({
          type: "DECREASE_QUANTITY",
          payload: response.data.cart,
        })
      );;
    };

    const cartReducer = (cart, action) => {
      switch (action.type) {
        case "SET_DATA":
          return [...action.payload]
        case "ADD_TO_CART":
          return [...cart, action.payload];
        case "REMOVE_FROM_CART":
          const response = deleteCartData(action.payload)
          console.log("gggg",response)
          return [
            ...cart.filter((element) => element._id !== action.payload),
          ];
        case "INCREASAE_QUANTITY":
            return [
              ...cart
            ];
        case "DECREASE_QUANTITY":
             return [
               ...cart
             ];
        default:
          return [...cart];
      }
    };
    const [cart, cartDispatch] = useReducer(cartReducer, []);
    

    console.log(cart);

    const getPriceForPriceCard = () => {
        const getTotalMrp = cart.reduce((acc,curVal) =>acc+curVal.mrp,0)
        const getTotalDiscount = cart.reduce(
          (acc, curVal) =>  acc + curVal.mrp - curVal.currentPrice,
          0
        );
        const getDeliveryPrice=49

        return { getTotalDiscount, getTotalMrp, getDeliveryPrice };
    };
    return (
      <CartContext.Provider
        value={{
          cart,
          cartDispatch,
          postCartData,
          getCartData,
          increaseQuantity,
          decreaseQuantity,
          getPriceForPriceCard,
        }}
      >
        {children}
      </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext)


export {useCart,CartProvider}