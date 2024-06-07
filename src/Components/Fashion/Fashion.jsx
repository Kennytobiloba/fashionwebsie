import React from 'react'
import {assets} from "../../assets/assets"
const Fashion = () => {
  return (
    <div className='w-[100%] mx-auto text-center mt-20 relative 2xl:block hidden'>
        <div>
            <img src={assets.Background} alt="" className='w-full h-[50vh]' />
            <div className='bg-black inset-0 bg-opacity-80 z-10 absolute'></div>
            <div className='inset-0 z-20 text-center absolute flex flex-col justify-center'>
                <h3 className='text-lg text-[#cf802e] mb-4'>FOLLOW YOUR HEART</h3>
                <h1 className='text-5xl lg-4xl font-bold mb-2 tracking-wide text-white'>FASHION</h1>
                <p className='text-[16px] text-white 2xl:w-[26%] lg:w-[40%] mt-4 mx-auto text-center'>Autem neglegentur in duo, ex aperiam fabulas mei, exerci
                menandri explicari ut mei. Eam cibo et.</p>
                <h6 className="mt-8 "><a className="button  hover:bg-gray-500 px-12 mt-4 py-4  text-white bg-[#cf802e]" href="#">Shop More</a></h6>

            </div>

        </div>
    </div>
  )
}

export default Fashion