import React from 'react'
import ProductCard from './ProductCard'

export default function ProductCards(props) {
  return (
    <div className=' md:w-[52rem] mx-auto mt-4'> 
       <ProductCard products={props.products}/>
    </div>
  )
}
