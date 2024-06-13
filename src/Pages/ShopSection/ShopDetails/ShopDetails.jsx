import React from 'react'
import ShopInfo from '../ShopInfo/ShopInfo'
import TabNav from '../../../Components/TabNav/TabNav'
import PriceCategory from '../../../Components/PriceCategory/PriceCategory'


const ShopDetails = () => {
  return (
    <div className='2xl:w-[80%] md:w-[100%] w-[90%]  mx-auto mt-20 md:gap-10 lg:gap-20 gap-20  flex justify-between flex-col md:flex-row overflow-hidden'>
        <div className='flex flex-col md:max-w-[68%] lg:max-w-[60%] 2xl:max-w-[70%] w-[95%] mx-auto md:mx-0 '>
            <ShopInfo/>
            <TabNav/>

        </div>
        <div className='w-[100%]'>
                <PriceCategory />
            </div>
        
    </div>
  )
}

export default ShopDetails