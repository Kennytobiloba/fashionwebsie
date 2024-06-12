import React from 'react'
import { assets } from '../../../assets/assets'

const OurStory = () => {
  return (
    <div className='w-full bg-white py-6 mt-20'>
        <div className='mx-auto lg:w-[80%] gap-10 w-[90%] mt-20  md:grid-cols-2 grid grid-cols-1'>
        <div>
            <img src={assets.OurStory} alt="" className='w-full h-full' />
        </div>
        <div className=' flex justify-start flex-col px-6 md:px-0 '>
            <h1 className='lg:text-3xl md:text-[26px] text-[20px]  font-bold mb-2 mt-2'>OUR STORY</h1>
            
        <p className='text-[18px] mb-4 md:text-start text-justify mx-auto md:mx-0'>Lorem Ipsum is simply dummy text of the printing and typesetting indust orem Ipsum has been the industry's standard dummy texever since the when anunknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        <p className='md:text-[18px] text-[16px] mb-4 md:text-start text-justify mx-auto md:mx-0'>
        Dorem Ipsum is simply dummy consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
        </p>
        <p className='md:text-[18px] text-[16px] mb-4 md:text-start text-justify mx-auto md:mx-0'>
        Lorem Ipsum is simply dummy text of the printing and typesetting indust orem Ipsum has been the industry's standard dummy texever since the when anunknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <h4 className='lg:text-2xl mt-8 text-[#cf802e] '>Mission of Our Creative House</h4>
        <div className='mt-8 grid grid-cols-3 '>
            <div className='flex gap-4 items-center'>
                <span><i className="fa fa-file-archive text-[#cf802e] 2xl:text-[55px] lg:text-[45px] md:text-[35px] text-[30px] "> </i></span>
                <div className='flex flex-col gap-2'>
                    <h1 className='2xl:text-3xl lg:text-2xl text-2xl font-bold'>328+</h1>
                    <h3 className='text-[18px]'>Projects</h3>

                </div>
            </div>

            <div className='flex gap-4 items-center'>
                <span><i className="fa fa-money text-[#cf802e] 2xl:text-[55px] lg:text-[45px] md:text-[35px] text-[30px] "> </i></span>
                <div className='flex flex-col gap-2'>
                    <h1 className='2xl:text-3xl lg:text-2xl text-2xl font-bold'>$4M</h1>
                    <h3 className='text-[18px]'>Revenue</h3>

                </div>
            </div>

            <div className='flex gap-4 items-center'>
                <span><i className="fa fa-trophy text-[#cf802e] 2xl:text-[55px] lg:text-[45px] md:text-[35px] text-[30px] "> </i></span>
                <div className='flex flex-col gap-2'>
                    <h1 className='2xl:text-3xl lg:text-2xl text-2xl font-bold'>368+</h1>
                    <h3 className='text-[18px]'>Awards</h3>

                </div>
            </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default OurStory