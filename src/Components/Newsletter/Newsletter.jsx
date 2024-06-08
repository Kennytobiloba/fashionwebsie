import React from 'react'

const Newsletter = () => {
  return (
    <div className='lg:w-[80%] w-full mx-auto text-center mt-[10%]'>
        <div className='mt-[30%] lg:mt-20'>
            <h1 className='3xl:text-3xl  font-bold lg:text-3xl text-lg'>Join Our Newsletter</h1>
            <p className='mt-4  lg:w-[40%] w-[70%] mx-auto mb-8 lg:text-[18px] text-[16px]'>orem ipsum dolor sit amet, consectetuer adipiscing elit.
            Aenean commodo ligula eget dolor. Aenean massa.</p>
           <div className='border border-gray-300 w-[50%] mx-auto mt-2'>
           <input type="text" className='w-[100%] md:p-4  h-auto outline-none text-[18px] text-start border border-b-4' placeholder='Full Name' />
           </div>
           <h6 className="mt-12 "><a className="button text-[18px] inline-block justify-center items-center hover:bg-gray-500 px-10 mt-2 py-2  text-white bg-[#cf802e]" href="#">Send</a></h6>

        </div>
    </div>
  )
}

export default Newsletter