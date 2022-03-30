import { createContext, useContext, useReducer } from "react";
import { privateInstance } from "../utils/axios";
import { wishListReducer } from "../reducers";

const WishListContext = createContext({wishList:[]})


const WishListProvider = ({children}) => {

    const getWishListData = async () => {
    console.log("i m getting triggered getWishList")
    try{
        const {status,data} = await privateInstance
      .get("/user/wishlist")
      if(status ===200){
        wishListDispatch({ type: "SET_DATA", payload: data.wishlist })
        return data.wishlist}
    }catch(error){
        console.error(error)
    }
    }
    const postWishListData = async (product) => {
        console.log("i m here posting" ,product)
        try{
            const {status,data} =  await privateInstance({
            method: "post",
            url: "/user/wishlist",
            data: {
                product
            }})
            if(status ===201){
                wishListDispatch({
                    type: "ADD_TO_WISHLIST",
                    payload: product,
                });
                return data.wishlist}
        }catch(error){
            console.error(error)
        }
    }   
    const deleteWishListData = async (id) => {
        console.log("i m getting triggered deleteWishList Data")
        try{
            const {status,data} =  await privateInstance({
            method: "delete",
            url: `/user/wishlist/:${id}`,
        })
            if(status===200){
                console.log(data)
                wishListDispatch({
                type: "REMOVE_FROM_WISHLIST",
                payload: id,
                });
                return data.wishlist}
        }catch(error){
            console.error(error) 
        }
    };

    const initialWishListState = [];
    const [wishList,wishListDispatch] = useReducer(wishListReducer,initialWishListState)
    console.log("gggggggg",wishList)
    return(
    <WishListContext.Provider value={{wishList,getWishListData,postWishListData,deleteWishListData}}>
        {children}
    </WishListContext.Provider>
    )
    
}
const useWishList = () => useContext(WishListContext)

export {WishListProvider,useWishList}

