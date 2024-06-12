import React from 'react'

const ShoppingSection = () => {
  return (
    <div className='w-full bg-white pt-2 pb-4 mt-10'>
         <div className='grid md:grid-cols-2 grid-cols-1 lg:w-[80%] md:w-[90%] w-[98%] mx-auto mt-20 gap-20'>
      <div className='flex justify-center flex-col px-6 md:px-0'>
        <h3 className='md:text-lg text-sm text-[#cf802e] mb-2 md:text-start text-center'>SUMMER COLLECTION</h3>
        <h1 className='lg:text-4xl md:text-3xl text-[28px] font-bold mb-4 md:text-start text-center'>Shopping Everyday</h1>
        
        <p className='text-[16px] mb-2 md:text-start text-justify mx-auto md:mx-0'>
        Lorem proin gravida nibh enean s mauris enean sollicitudin, lom himenaeos conita summ vero lorem proin gravida nibh enean s mauris sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos per inceptos himenaeos.
        </p>
        <h6 className="mt-4 mx-auto md:mx-0"><a className="md:inline-block inline-block  hover:bg-gray-500 px-12 mt-4 text-[18px] py-4  text-white bg-[#cf802e]" href="#">know More</a></h6>
      </div>
      {/* Progress Bars */}
      <div className='flex flex-col justify-center px-4 gap-6 md:px-0'>
    
       <div className='flex gap-2 flex-col'>
        <div className='flex justify-between'>
        <h3 className='text-[16px] font-bold text-gray-600'>Fashion</h3>
        <h3>82%</h3>
        </div>
       <div className="w-full bg-gray-300 h-[4px] rounded-full mb-2">
          <div className="bg-[#cf802e] h-full rounded-full" style={{ width: '82%' }}></div>
        </div>
       </div>

       <div className='flex gap-2 flex-col'>
        <div className='flex justify-between'>
        <h3 className='text-[16px] font-bold text-gray-600'>Black Dress</h3>
        <h3>77%</h3>
        </div>
       <div className="w-full bg-gray-300 h-[4px] rounded-full mb-2">
          <div className="bg-[#cf802e] h-full rounded-full" style={{ width: '77%' }}></div>
        </div>
       </div>


       
       <div className='flex gap-2 flex-col'>
        <div className='flex justify-between'>
        <h3 className='text-[16px] font-bold text-gray-600'>Shoes</h3>
        <h3>89%</h3>
        </div>
       <div className="w-full bg-gray-300 h-[4px] rounded-full mb-2">
          <div className="bg-[#cf802e] h-full rounded-full" style={{ width: '89%' }}></div>
        </div>
       </div>
       

        
       <div className='flex gap-2 flex-col'>
        <div className='flex justify-between'>
        <h3 className='text-[16px] font-bold text-gray-600'>Trending</h3>
        <h3>89%</h3>
        </div>
       <div className="w-full bg-gray-300 h-[4px] rounded-full mb-2">
          <div className="bg-[#cf802e] h-full rounded-full" style={{ width: '66%' }}></div>
        </div>
       </div>



        
       <div className='flex gap-2 flex-col'>
        <div className='flex justify-between'>
        <h3 className='text-[16px] font-bold text-gray-600'>Popular</h3>
        <h3>76%</h3>
        </div>
       <div className="w-full bg-gray-300 h-[4px] rounded-full mb-2">
          <div className="bg-[#cf802e] h-full rounded-full" style={{ width: '76%' }}></div>
        </div>
       </div>
       
       


        
      </div>
    </div>
    </div>
  )
}

export default ShoppingSection