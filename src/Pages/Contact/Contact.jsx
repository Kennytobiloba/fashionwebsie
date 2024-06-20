import React from 'react'

const Contact = () => {
  return (
    <div className='2xl:w-[80%] w-[98%] grid md:grid-cols-2 grid-cols-1 mx-auto mt-20 2xl:gap-20 gap-2'>
        <div>
            <h1 className=' 2xl:text-4xl lg:text-3xl mb-2 text-2xl font-bold'>Our Offices</h1>
            <p className='lg:text-[18px] text-[16px]'>Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim aditivo minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

            <div className='flex gap-4'>
                <div className='mt-6'>
                    <h1 className='lg:text-3xl text-[20px] font-bold'>New York</h1>
                    <h3 className='2xl:text-[20px] mt-2 text-[16px] flex gap-2br'> <span><i className="fa fa-phone text-[#cf802e]"></i></span><span> +(000) 345 67 89</span></h3>
                    <h3 className='2xl:text-[20px] mt-2 text-[16px] flex gap-2'> <span><i className="fa fa-envelope text-[#cf802e]"></i></span><span>info@gmail.com</span></h3>
                    <h3 className='2xl:text-[20px] mt-2 text-[16px] flex gap-2'> <span><i className="fa fa-home text-[#cf802e]"></i></span><span> 144 Street Conubia 3002</span></h3>     
                </div>

                <div className='mt-6'>
                    <h1 className='lg:text-3xl text-[20px] font-bold'>London</h1>
                    <h3 className='2xl:text-[20px] mt-2 text-[16px] flex gap-2'> <span><i className="fa fa-phone text-[#cf802e]"></i></span><span> +(000) 345 67 89</span></h3>
                    <h3 className='2xl:text-[20px] mt-2 text-[16px] flex gap-2'> <span><i className="fa fa-envelope text-[#cf802e]"></i></span><span>info@gmail.com</span></h3>
                    <h3 className='2xl:text-[20px] mt-2 text-[16px] flex gap-2'> <span><i className="fa fa-home text-[#cf802e]"></i></span><span> 144 Street Conubia 3002</span></h3>     
                </div>
            </div>
        </div>

        <div className='mt-4'>
        <input type="text" placeholder=' Your Name' className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
        <input type="text" placeholder=' Your Email' className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
        <input type="text" placeholder=' Your Subject' className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
        <textarea name="" placeholder='Your Review' className=' p-2 text-[16px] mb-4 w-[100%] h-[20vh] mt-4 border-2 border-gray-300'></textarea>
        <h6 className="mt-4 text-center "><a className="button md:text-[18px] text-[16px]  items-center justify-center  flex hover:bg-gray-500 px-12 mt-4 py-4  text-white bg-[#cf802e]" href="#">Submit</a></h6>

        </div>
    </div>
  )
}

export default Contact