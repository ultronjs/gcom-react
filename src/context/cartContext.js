import { createContext, useContext, useReducer, useState,useEffect } from "react";
import { privateInstance, publicInstance } from "../utils/axios";
import { cartReducer } from "../reducers";

const CartContext = createContext()


const CartProvider = ({children}) => {
    const getCartData = async () => {
    const {status,data} =  await privateInstance
      .get("/user/cart")
      if(status===200) 
      cartDispatch({type:"SET_DATA",payload:data.cart})
      else
      console.error("Not getting the Cart Data",status)
    };
    const postCartData = async (product) => {
        console.log("i m here posting" ,product)
        const {status,data}= await privateInstance({
            method: "post",
            url: "/user/cart",
            data: {
                product
            }});
        if(status===201){
            cartDispatch({type:"ADD_TO_CART",payload:product})
            return data.cart}
        else
        console.error("Not able to Post Cart Data",status)
    };
    const deleteCartData = async (id) => {
        try{
            const { status, data } = await privateInstance({
                method: "delete",
                url: `/user/cart/:${id}`,
            })
            console.log(data)
            if(status===200){
                cartDispatch({type:"REMOVE_FROM_CART",payload:id})
                return data.cart
            }
        }catch(error){
            console.error(error)
           }
    }
    const increaseQuantity = async (id) => {
        console.log("i am increasing quantity")
        const { status, data } = await privateInstance({
          method: "post",
          url: `/user/cart/:${id}`,
          data: {
            action: {
              type: "increment"
            },
          },
        })
        if(status ===200){
            console.log(data)
            cartDispatch({ type: "INCREASAE_QUANTITY", payload: id });
            return data.cart;
        }
        else
        console.error("Not able to Increase the Cart Item Quantity");
    }
    const decreaseQuantity = async (id) => {
      const { status, data } = await privateInstance({
        method: "post",
        url: `/user/cart/:${id}`,
        data: {
          action: {
            type: "decrement"
          },
        },
      })
      if(status ===200){
        cartDispatch({ type: "DECREASE_QUANTITY", payload: id });
        return data.cart;
      }
      else
      
        console.error("Not able to Decrease the Cart Item Quantity");
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
          postCartData,
          getCartData,
          deleteCartData,
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