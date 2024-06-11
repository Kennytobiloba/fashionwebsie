import React, { useContext } from 'react'
import { ShopContext } from '../../ShopContext/ShopContext'


const Carts = () => {
    const {addToCart,all_data,cartItems} = useContext(ShopContext)
  return (
    <div>
      {
        all_data.map((item,index) => {
          if(cartItems[item.id] > 0){
            return(
              <div key={index}>
                <h1>lorem100</h1>
                <img src={item.image} alt="" />

              </div>
            )
          }
        })
      }
    </div>
  )
}

export default Carts