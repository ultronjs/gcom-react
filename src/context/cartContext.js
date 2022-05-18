import { createContext, useContext, useReducer } from "react";
import instance from "../utils/axios";
import { cartReducer } from "../reducers";
import { useToast } from "./toastContext";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const {addToast} = useToast()

    const getCartData = async () => {
      try{
        const { status, data } = await instance.get("/user/cart", {
          headers: {
            Accept: "*/*",
            authorization: localStorage.getItem("token"),
          },
        })
        if(status===200) 
          cartDispatch({type:"SET_DATA",payload:data.cart})
        }catch(error){
          addToast({
            type: "Error",
            msg: "Unable to Fetch Data from API",
          });
          console.error(error)
        }
    };
    const postCartData = async (product) => {
      try{
        const { status, data } = await instance({
          method: "post",
          url: "/user/cart",
          data: {
            product,
          },
          headers: {
            Accept: "*/*",
            authorization: localStorage.getItem("token"),
          },
        });
        if(status===201){
            product.addedToCart=true;
            cartDispatch({ type: "SET_DATA", payload: data.cart });
            return data.cart
          }
          }catch(error){
            addToast({
              type: "Error",
              msg: "Unable to Add Item in Cart",
            });
            console.error(error)
          }
        
    };
    const postCartDataFromWishList = (product) => {
      cart.some(item => item._id ===product._id)?increaseQuantity(product._id):postCartData(product)
    };

    const deleteCartData = async (id) => {
        try{
            const { status, data } = await instance({
              method: "delete",
              url: `/user/cart/${id}`,
              headers: {
                Accept: "*/*",
                authorization: localStorage.getItem("token"),
              },
            });
            if(status===200){
                cartDispatch({type:"REMOVE_FROM_CART",payload:id})
                return data.cart
            }
        }catch(error){
           addToast({
             type: "Error",
             msg: "Unable to Remove Item from Cart",
           });
            console.error(error)
           }
    }
    const increaseQuantity = async (id) => {
        const { status, data } = await instance({
          method: "post",
          url: `/user/cart/${id}`,
          data: {
            action: {
              type: "increment"
            },
          },
          headers: {
            Accept: "*/*",
            authorization: localStorage.getItem("token"),
          },
        });
        if(status ===200){
            cartDispatch({ type: "INCREASAE_QUANTITY", payload: data.cart });
            return data.cart;
        }
        else
        console.error("Not able to Increase the Cart Item Quantity");
    }
    const decreaseQuantity = async (id) => {
      const { status, data } = await instance({
        method: "post",
        url: `/user/cart/${id}`,
        data: {
          action: {
            type: "decrement"
          },
        },
        headers: {
          Accept: "*/*",
          authorization: localStorage.getItem("token"),
        },
      });
      if(status ===200){
        cartDispatch({ type: "DECREASE_QUANTITY", payload: data.cart });
        return data.cart;
      }
      else
      
        console.error("Not able to Decrease the Cart Item Quantity");
    };

    const [cart, cartDispatch] = useReducer(cartReducer, []);

    const getPriceForPriceCard = () => {
        const getTotalMrp = cart.reduce((acc,curVal) =>acc+(curVal.mrp*curVal.qty),0)
        const getTotalDiscount = cart.reduce(
          (acc, curVal) =>  acc + (curVal.mrp - curVal.currentPrice)*curVal.qty,
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
          postCartDataFromWishList,
        }}
      >
        {children}
      </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext)


export {useCart,CartProvider}