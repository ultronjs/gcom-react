import React from 'react'
import ProductCard from './ProductCard';
import dbProducts from "./sample"

function ProductContainer() {
    const products = dbProducts
  return (
    <div className="product_grid py-small">
      {products &&
        products.map((element) => (
          <ProductCard key={element.id} productDetails={element}></ProductCard>
        ))}
    </div>
  );
}

export default ProductContainer