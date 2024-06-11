import React from 'react';
import { assets } from '../../assets/assets';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const FashionDisplay = () => {
  return (
    <div className='lg:w-[80%] w-[90%] mx-auto text-left relative'>
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        autoplay={{
          delay: 2500, // Time delay in milliseconds
          disableOnInteraction: false, // Continue autoplay after user interaction
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='w-full relative'>
          <img src={assets.home_imgone} alt="" className='' />
          <div className="absolute">
            <h1 className='font-bold lg:text-[120px] text-white md:text-[60px] text-[40px]'>40% Off</h1>
            <p className='text-[16px] text-white'>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt<br />
              mollit lorem ipsum anim id est laborum perspiciatis unde.</p>
            <h6 className="mt-8  "><a className="button hover:bg-gray-400 mt-2 px-10 py-4  text-white bg-[#cf802e]" href="#">View More</a></h6>
            <div className='fixed bottom-4 left-4'>
              <ul className='flex space-x-4'>
                <li><a href="#" className='text-white font-bold text-[20px]'>Facebook</a></li>
                <li><a href="#" className='text-white font-bold text-[20px]'>Instagram</a></li>
                <li><a href="#" className='text-white font-bold text-[20px]'>Twitter</a></li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.home_imgtwo} alt="" className='relative' />
          <div className="text-content text-center absolute">
            <h1 className='font-bold lg:text-[120px] text-white md:text-[60px] text-[40px]'>New Look</h1>
            <p className='text-[16px] text-white'>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt<br />
              mollit lorem ipsum anim id est laborum perspiciatis unde.</p>
            <h6 className="mt-8 "><a className="button hover:bg-gray-400  px-10 py-4  text-white bg-[#cf802e]" href="#">Shop Now</a></h6>
            <div className='fixed bottom-4 left-4'>
              <ul className='flex space-x-4'>
                <li><a href="#" className='text-white font-bold text-[20px]'>Facebook</a></li>
                <li><a href="#" className='text-white font-bold text-[20px]'>Instagram</a></li>
                <li><a href="#" className='text-white font-bold text-[20px]'>Twitter</a></li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.home_imgthree} alt="" className='relative' />
          <div className="text-content text-center absolute">
            <h1 className='font-bold lg:text-[120px] text-white md:text-[60px] text-[40px]'>Fashion Star</h1>
            <p className='text-[16px] text-white'>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt<br />
              mollit lorem ipsum anim id est laborum perspiciatis unde.</p>
            <h6 className="mt-8 "><a className="button  hover:bg-gray-500 px-10 py-4  text-white bg-[#cf802e]" href="#">Explore</a></h6>
            <div className='fixed bottom-4 left-4'>
              <ul className='flex space-x-4'>
                <li><a href="#" className='text-white font-bold text-[20px]'>Facebook</a></li>
                <li><a href="#" className='text-white font-bold text-[20px]'>Instagram</a></li>
                <li><a href="#" className='text-white font-bold text-[20px]'>Twitter</a></li>
              </ul>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default FashionDisplay;
