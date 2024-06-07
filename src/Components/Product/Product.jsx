import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../../ShopContext/ShopContext'

const Product = () => {

    const {id} = useParams()
    const {all_data} = useContext(ShopContext)
    const product = all_data.find((item) => item.id === parseInt(id))
    if(!product){
        return (
            <div>Product is not found</div>
        )
    }
  return (
    <div>
        <h1>{product.name}</h1>
        <h1>{product.id}</h1>
    </div>
  )
}

export default Product