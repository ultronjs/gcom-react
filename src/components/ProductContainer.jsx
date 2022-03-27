import React, { useEffect, useState } from "react";
import ProductCard from './ProductCard';
import axios from 'axios'

function ProductContainer() {
    const [product,setProduct] = useState([])
    useEffect(()=>{
      (async function (){
        try{
        const {products} = await axios.get(
          "/api/products").then(response => response.data);
          console.log(products)
          setProduct(products)
        }catch(err){
          console.log(err)
        }
      })()
    },[])
  return (
    <div className="product_grid py-small">
      {product &&
        product.map((element) => (
          <ProductCard key={element.id} productDetails={element}></ProductCard>
        ))}
    </div>
  );
}

export default ProductContainer