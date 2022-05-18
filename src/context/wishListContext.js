import { createContext, useContext, useReducer } from "react";
import { wishListReducer } from "../reducers";
import { useToast } from "./toastContext";
import instance from "../utils/axios"

const WishListContext = createContext({wishList:[]})

const WishListProvider = ({children}) => {
    const {addToast} = useToast()

    const getWishListData = async () => {
    try{
      const { status, data } = instance.get("/user/wishlist", {
          headers: {
            Accept: "*/*",
            authorization: localStorage.getItem("token"),
          },
        });
      if(status ===200){
        wishListDispatch({ type: "SET_DATA", payload: data.wishlist })
        return data.wishlist}
    }catch(error){
        addToast({ type: "Error", msg: "Unable to Fetch Data From the API" });
        console.error(error)
    }
    }
    const postWishListData = async (product) => {
        try{
            const { status, data } = await instance({
              method: "post",
              url: "/user/wishlist",
              data: {
                product,
              },
              headers: {
                Accept: "*/*",
                authorization: localStorage.getItem("token"),
              },
            })
            if(status ===201){
                product.addedToWishList = true;
                wishListDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: product,
                });
                return data.wishlist}
        }catch(error){
            addToast({
              type: "Error",
              msg: "Unable to Save the Item in Wishlist",
            });
            console.error(error)
        }
    }   
    const deleteWishListData = async (id) => {
        try{
            const { status, data } = await instance({
              method: "delete",
              url: `/user/wishlist/${id}`,
              headers: {
                Accept: "*/*",
                authorization: localStorage.getItem("token"),
              },
            });
            if(status===200){
                wishListDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: id,
                });
                return data.wishlist}
        }catch(error){
            addToast({
              type: "Error",
              msg: "Unable to Remove Item from Wishlist",
            });
            console.error(error) 
        }
    };

    const initialWishListState = [];
    const [wishList,wishListDispatch] = useReducer(wishListReducer,initialWishListState)
    return(
    <WishListContext.Provider value={{wishList,getWishListData,postWishListData,deleteWishListData}}>
        {children}
    </WishListContext.Provider>
    )
    
}
const useWishList = () => useContext(WishListContext)

export {WishListProvider,useWishList}

