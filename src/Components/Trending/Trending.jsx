import React from 'react';
import { assets } from '../../assets/assets';

const Trending = () => {
  return (
    <div className=' mt-12 lg:w-[80%] mx-auto w-full'>
      <div className='grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 sm:grid-cols-2 mx-auto lg:grid-cols-2 gap-10 lg:gap-[2rem]'>
        <div className='relative '>
          <img src={assets.trending_imgone} alt="" className='w-full h-auto ' />
          <h1 className=" 2xl:text-[50px] text-[30px] md:text-[40px] left-6 font-bold text-[#cf802e] absolute top-4">$180</h1>
          <div className='absolute bottom-[10rem] left-6'>
          <h3 className="text-white 2xl:text-[28px]  text-[20px] md:text-[22px] leading-8  2xl:leading-10 font-bold">Elegant and <br/> Stylish Look</h3>
          <h6 className="mb-0 mt-3 text-white text-[18px]"><a className="text-light" href="#"><i className="fa fa-chevron-right align-middle font_14 me-1 col_red text-[#cf802e]"></i> See Whole Collection</a></h6>
          </div>
        </div>
        <div className=' relative'>
          <img src={assets.trending_imgtwo} alt="" className='w-full h-auto' />
          <h1 className=" 2xl:text-[50px] text-[30px] md:text-[40px] left-6 font-bold text-[#cf802e] absolute top-4">$180</h1>
          <div className='absolute bottom-[10rem] left-6'>
          <h3 className="text-white 2xl:text-[28px]  text-[20px] md:text-[22px] leading-8  2xl:leading-10 font-bold">Elegant and <br/> Stylish Look</h3>
          <h6 className="mb-0 mt-3 text-white text-[18px]"><a className="text-light" href="#"><i className="fa fa-chevron-right align-middle font_14 me-1 col_red text-[#cf802e]"></i> See Whole Collection</a></h6>
          </div>
          
          
          
          
        </div>
        <div className=' relative '>
          <img src={assets.trending_imgthree} alt="" className='w-full h-auto' />
          <h1 className=" 2xl:text-[50px] text-[30px] md:text-[40px] left-6 font-bold text-[#cf802e] absolute top-4">$180</h1>
          <div className='absolute bottom-[10rem] left-6'>
          <h3 className="text-white 2xl:text-[28px]  text-[20px] md:text-[22px] leading-8  2xl:leading-10 font-bold">Elegant and <br/> Stylish Look</h3>
          <h6 className="mb-0 mt-3 text-white text-[18px]"><a className="text-light" href="#"><i className="fa fa-chevron-right align-middle font_14 me-1 col_red text-[#cf802e]"></i> See Whole Collection</a></h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
