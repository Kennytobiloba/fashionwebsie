import React from 'react'

const PriceCategory = () => {
  return (
    <div  className="w-[20%] mt-20 md:grid grid-cols-1 hidden" >
        <div className='w-[120%] shadow-lg 2xl:px-4 2xl:py-8 px-4 py-2 '>
            <h1 className='2xl:text-2xl text-[18px] font-bold'>Price Filter</h1>
            <input type="range" className="form-range mt-3 w-full" id="customRange1" />
            <div className=' flex justify-between mt-2'>
            <h6 className=" 2xl:text-[16px] text-[14px] md:text-[12px] ">Price: $0 — $1,050 <a className="float-end font-bold" href="#"></a></h6>
            <h6 className='font-bold 2xl:text-[16px] text-[14px] md:text-[12px]'>Filter</h6>
            </div>


        </div>
        <div className='  w-[120%] shadow-lg px-4 py-8 mt-6 '>
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
        <div className='w-[120%] shadow-lg px-4 py-8 mt-6 '>
        <h5 className="mb-3 2xl:text-2xl text-[18px] font-bold">Colors</h5>
	   <h6 className="text-[16px] mt-3 "><a href="#">Blue (10)</a></h6>
	   <h6 className="text-[16px] mt-3 "><a href="#">Red (13)</a></h6>
	   <h6 className="text-[16px] mt-3 "><a href="#">Black (8)</a></h6>
	   <h6 className="text-[16px] mt-3 mb-0"><a href="#">Yellow (6)</a></h6>

        </div>

    </div>
  )
}

export default PriceCategory