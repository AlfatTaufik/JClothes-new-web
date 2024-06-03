import React from 'react'
import Heading from '../Shared/Heading'
import ProductsCard from './ProductsCard'
import { ProductData, ProductsData2 } from '../../base-data'

const Products = () => {
  return (
    <div>
        <div className="container">
            {/* Header */}
            <div className="grid">
            <Heading title={"Our Products"} subtitle={"Custom Sekarang"}/>
            </div>
            {/* body  */}
            <ProductsCard data={ProductData}/>
            <ProductsCard data={ProductsData2}/>

        </div>
    </div>
  )
}

export default Products