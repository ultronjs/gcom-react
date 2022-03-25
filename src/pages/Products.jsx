import React from 'react'
import Nav from "../components/Nav"
import Filter from '../components/Filter'
import ProductContainer from '../components/ProductContainer'
import Footer from "../components/Footer"

function Products() {
  return (
    <div>
      <Nav />
      <div className="main_container product_container grid">
        <Filter />
        <ProductContainer />
      </div>
      <Footer />
    </div>
  )
}

export default Products