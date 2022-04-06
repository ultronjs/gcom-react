import React, { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import { getFilteredData, searchFilter } from "../utils/filter";
import { useFilter } from "../context/FilterContext";
import { publicInstance } from "../utils/axios";
import { useCart, useWishList } from "../context";

function ProductContainer() {
    const [product,setProduct] = useState([])
    const [filteredData,setFilteredData] = useState([])
    const {state,search} = useFilter()
    const {cart} = useCart()
    const { wishList } = useWishList();
    useEffect(()=>{
      (async function (){
        try{
        const {products} = await publicInstance.get(
          "/products").then(response => response.data);
          setProduct(products)
          setFilteredData(getFilteredData(state,products));
        }catch(err){
          console.log(err)
        }
      })()
    },[])
    useEffect(()=> {
      setFilteredData(getFilteredData(state, product));
    },[state])

  return (
    <div className="product_grid py-small">
      {filteredData &&
        searchFilter(filteredData, search).map((element) => {
          cart.some((cartItem) => cartItem._id === element._id)
            ? (element.addedToCart = true)
            : (element.addedToCart = false);
          wishList.some((wishListItem) => wishListItem._id === element._id)
            ? (element.addedToWishList = true)
            : (element.addedToWishList = false);
          return (
            <ProductCard
              key={element.id}
              productDetails={element}
            ></ProductCard>
          );
        })}
    </div>
  );
}

export default ProductContainer