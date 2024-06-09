import React from 'react'
import { Othercollections } from '../../assets/assets'
import Items from '../Items/Items'

const OtherCollection = () => {
  return (
    <div className='mx-auto lg:w-[80%] w-full mt-20'>
        <div className='text-center'>
            <h3 className='md:text-lg text-sm text-[#cf802e] mb-2'>OTHER COLLECTION</h3>
            <h1 className='lg:text-3xl md:text-2xl text-[16px] font-bold  mb-4'>Trending Products</h1>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-4  md:grid-cols-4 2xl:grid-cols-4 sm:grid-cols-2 mt-6 gap-10'>
            {
                Othercollections.map((item, id) => {
                    return(
                        <div className='relative' key={id}>
                            <Items name={item.name} image={item.image} product={item.product} price={item.price} id={item.id} category={item.category}/>

                        </div>
                    )
                })
            }
        </div>


    </div>
  )
}

export default OtherCollection