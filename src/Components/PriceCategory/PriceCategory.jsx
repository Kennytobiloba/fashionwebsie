import React from 'react'
import { Othercollections } from '../../assets/assets'
 
const PriceCategory = () => {
  return (
    <div  className="w-[100%] grid grid-cols-1 " >
        <div className='w-[100%]  px-4 py-4 shadow-md text-center md:text-start '>
            <h1 className='2xl:text-2xl text-[18px] font-bold'>Price Filter</h1>
            <input type="range" className="form-range mt-3 w-full" id="customRange1" />
            <div className=' flex justify-between mt-2 '>
            <h6 className=" 2xl:text-[16px] text-[14px] md:text-[12px] ">Price: $0 — $1,050 <a className="float-end font-bold" href="#"></a></h6>
            <h6 className='font-bold 2xl:text-[16px] text-[14px] md:text-[12px]'>Filter</h6>
            </div>


        </div>
        <div className='w-[100%]  px-4 py-6 mt-10 shadow-md  text-center md:text-start  '>
        <h5 className="2xl:text-2xl text-[18px]  mb-3 text-2xl font-bold">Categories</h5>
       <h6 className="text-[16px]"><a href="#">Accessories (2)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Bags (4)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Casual (6)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Children (5)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Clothes (8)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Cosmetic (7)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Fashion (10)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Jacket (13)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Kids (12)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Summer (14)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Showcase (6)</a></h6>
	   <h6 className=" text-[16px] mt-3 mb-0"><a href="#">Watch (5)</a></h6>

        </div>
        <div className='w-[100%]  px-4 py-4 shadow-md  text-center md:text-start  '>
        <h5 className="mb-3 2xl:text-2xl text-[18px] font-bold">Colors</h5>
	   <h6 className="text-[16px] mt-3 "><a href="#">Blue (10)</a></h6>
	   <h6 className="text-[16px] mt-3 "><a href="#">Red (13)</a></h6>
	   <h6 className="text-[16px] mt-3 "><a href="#">Black (8)</a></h6>
	   <h6 className="text-[16px] mt-3 mb-0"><a href="#">Yellow (6)</a></h6>

        </div>
        <div className='grid grid-cols-1 mt-8 w-[100%]   px-4 py-6 shadow-md  '>
          {
            Othercollections.slice(0,3).map((item,id) => (
              <div key={id} className='grid grid-cols-2 gap-4 mt-2  mb-6  w-full  '>
                <div className=' w-full'>
                  <img src={item.image} alt="" className='w-full h-full object-cover' />
                 </div>

                <div>
                  
                <h3 className='text-[14px]  lg:text-[16px] font-bold mb-2 w-full '>{item.topProduct_name}</h3>
                <span className='flex text-[14px]  lg:text-[16px] mb-2 mt-2 text-[#cf802e]'>
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </span>
                <h3 className='text-[14px]  lg:text-[16px] font-bold mb-2'>{item.topProduct_price}</h3>
                

                </div>

              </div>
            ))
          }

        </div>
        <div className='flex items-center border overflow-hidden bg-white shadow-sm mt-6 px-4'>
  <input 
    type="text" 
    placeholder='Search' 
    className='text-[18px] w-full py-2 px-2 border-none focus:outline-none' 
  />
  <button className="ml-2">
    <i className="fa fa-search text-red-400"></i>
  </button>
</div>
<div className='w-[100%]  px-4 py-6 mt-10 shadow-md  text-center md:text-start '>
  <h1 className='text-2xl font-bold'>Tags</h1>
  
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2 mt-4"><a href="#">clothes</a>,</li>
  <li className="text-uppercase inline-block lg:text-[18px] text-[14px] mr-2 "><a href="#">Bags</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">decoration</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">flowers</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">lifestyle</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">look</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">minimal</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">modern</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">new</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">stylish</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">trend</a>,</li>

</div>

<div className='w-[100%]  px-4 py-6 mt-10 shadow-md  text-center md:text-start '>
  <h1 className='text-2xl font-bold'>Newsletter</h1>
  <div className='flex items-center border overflow-hidden bg-white shadow-sm mt-6 px-4'>
  <input 
    type="text" 
    placeholder='Search' 
    className='text-[18px] w-full py-2 px-2 border-none focus:outline-none' 
  />
  <button className="ml-2">
    <i className="fa fa-envelope text-red-400"></i>
  </button>
</div>

</div>

    </div>
  )
}

export default PriceCategory