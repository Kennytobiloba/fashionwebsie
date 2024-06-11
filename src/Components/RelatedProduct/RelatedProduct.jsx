import React from 'react'
import { Othercollections } from '../../assets/assets'
import Items from "../Items/Items"

const RelatedProduct = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold'>Related Products</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3  md:grid-cols-3 2xl:grid-cols-3 sm:grid-cols-3 mt-6 gap-10'>
        {
          Othercollections.slice(0, 3).map((item, id) => {
            return (
              <div key={id} className='relative'>
                <Items name={item.name} image={item.image} price={item.price} product={item.product} category={item.category}  />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RelatedProduct
