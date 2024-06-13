import React from 'react'
import { all_data } from '../../../assets/assets'
import Items from '../../../Components/Items/Items'


const ShopProduct = () => {
  return (
    <div>
        <div className='mb-2'><h3>SHOWING 1–12 OF 132 RESULTS</h3></div>
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 w-full'>
            {
                all_data.map((item,id) => {
                    return(
                        <div key={id} className='relative'>
                             <Items name={item.name} image={item.image} product={item.product} price={item.price} id={item.id} category={item.category} />
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default ShopProduct