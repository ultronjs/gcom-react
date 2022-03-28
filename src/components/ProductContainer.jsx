import React, { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import axios from 'axios'
import { getFilteredData } from "../utils/filter";
import { useFilter } from "../context/FilterContext";
import { products } from "../backend/db/products";

function ProductContainer() {
    const [product,setProduct] = useState([])
    const [filteredData,setFilteredData] = useState([])
    const {state} = useFilter()
    useEffect(()=>{
      (async function (){
        try{
        const {products} = await axios.get(
          "/api/products").then(response => response.data);
          console.log(products)
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

    console.log(filteredData)

  return (
    <div className="product_grid py-small">
      {filteredData &&
        filteredData.map((element) => (
          <ProductCard key={element.id} productDetails={element}></ProductCard>
        ))}
    </div>
  );
}

export default ProductContainer