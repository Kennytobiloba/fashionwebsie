import React from 'react'
import { assets } from '../../assets/assets'

const SummerCollection = () => {
  return (
    <div className='mx-auto lg:w-[80%] gap-10 w-[90%] mt-20  md:grid-cols-2 grid grid-cols-1'>
        <div>
            <img src={assets.SummerCollection} alt="" className='w-full h-full' />
        </div>
        <div className=' flex justify-center flex-col px-6 md:px-0 '>
            <h3 className='md:text-lg text-sm text-[#cf802e] mb-2 md:text-start text-center'>SUMMER COLLECTION</h3>
            <h1 className='lg:text-5xl md:text-3xl text-[28px] font-bold  mb-4 md:text-start text-center'>Time to Shine</h1>
            <p className='text-[16px] mb-4 md:text-start text-justify mx-auto md:mx-0'>Ne sed vero libris, his vivendo referrentur an. Torquatos voluptatum sit ad. Legendos dignissim eu mea, sea ei doming inimicus adolescens. Stet iusto deserunt sed in, ex quo quot invidunt.</p>
            <p className='text-[16px] mb-4 md:text-start text-justify mx-auto md:mx-0'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, labore et dolore magna aliquased do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis labore et dolore magna aliqua nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <h6 className="mt-8 mx-auto md:mx-0 "><a className=" md:inline-block inline-block  hover:bg-gray-500 px-12 mt-4 text-[16px] py-4  text-white bg-[#cf802e]" href="#">See Whole Collection</a></h6>
        </div>
    </div>
  )
}

export default SummerCollection