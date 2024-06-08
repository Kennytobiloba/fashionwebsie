import React from 'react'
import { FashionBlogs } from '../../assets/assets'
FashionBlogs
const FashionBlog = () => {
  return (
    <div className='w-[100%] lg:w-[80%] mx-auto mt-20'>
        <div className='text-center mb-8'>
            <h3 className='md:text-lg text-sm text-[#cf802e] mb-2'>LOVE SHOPPING</h3>
            <h1 className='lg:text-4xl md:text-3xl text-[16px] font-bold  mb-2'>Fashion Blog</h1>
            <p className='text-[16px] 2xl:w-[30%] mb-4 w-[80%] lg:w-[50%] mx-auto text-center'>Autem neglegentur in duo, ex aperiam fabulas mei, exerci
            menandri explicari ut mei. Eam cibo et.</p>
            </div>
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 2xl:gap-10 gap-20 '>
                {
                    FashionBlogs.map((item, id) => (
                        <div key={id} className='mt-2 relative'>
                            <img src={item.image} alt="" className='w-full h-full' />
                          <h3 className='absolute px-4 py-2 bg-white top-0 left-0'>  {item.date}</h3>
                            <div className='flex gap-2 md:text-lg text-sm  '>
                                <span className=' cursor-pointer hover:text-[#cf802e]' >ADMIN </span>
                                <span className=' cursor-pointer hover:text-[#cf802e]'>/ ACCESSORIES </span>
                                <span  className=' cursor-pointer hover:text-[#cf802e]'> / CASUAL</span>
                            </div>
                            <h3 className='md:text-[18px] leading-6 text-[16px] font-bold '>{item.text}</h3>

                        </div>
                    ))
                }
           


        </div>
    </div>
  )
}

export default FashionBlog