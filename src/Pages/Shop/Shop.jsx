import React from 'react'
import ShopProduct from '../ShopSection/ShopProduct/ShopProduct'
import PriceCategory from '../../Components/PriceCategory/PriceCategory'

const Shop = () => {
  return (
    <div className='w-full '>
    <div className='  h-full 2xl:w-[80%] md:w-[90%] w-[90%]  mx-auto  mt-20 '>
        <div className=' flex md:flex-row flex-col  w-full gap-10 justify-between'>
       <div className='2xl:w-[70%] md:w-[60%]'>
       <ShopProduct/>
       </div>
       <div className=' 2xl:w-[20%] md:w-[30%]'>
        <PriceCategory/>
       </div>
       </div>

    </div>
    </div>
  )
}

export default Shop