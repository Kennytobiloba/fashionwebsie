import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { assets } from '../../assets/assets';

const Review = () => {
  return (
    <div style={{ position: 'relative', height: '50vh' }}>
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" style="margin: 0 4px; display: inline-block; width: 30px; height: 4px; background: text-[#cf802e] ; opacity: 0.5; transition: opacity 0.3s ease-in-out;"></span>`;
          }
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        style={{ height: '100%' }}
      >
        <SwiperSlide>
            

      <div> 
    <h3 className='md:text-lg text-sm text-[#cf802e] mb-2'>SUMMER COLLECTION</h3>
    <h1 className='lg:text-4xl md:text-3xl text-[16px] font-bold  mb-6'>What they’re saying</h1>
     <p className='lg:w-[50%] w-[70%] mx-auto text-[16px]'>At quidam dissentiet definitionem eam, te nec ullum similique. Verear
     appareat adversarium id eos, eum ei aperiri vivendo quaestio, mea leg
     ea. Quo probo noluisse menandri an.</p>
    <div className='w-[90px] h-[90px] mx-auto  '>
    <img src={assets.Review_one} alt="" className='w-full h-full rounded-[50%]' />
     <div className="swiper-pagination mt-4 flex justify-center"></div>
</div>
</div>

        </SwiperSlide>
        <SwiperSlide>
            
      <div>
    <h3 className='md:text-lg text-sm text-[#cf802e] mb-2'>SUMMER COLLECTION</h3>
    <h1 className='lg:text-4xl md:text-3xl text-[16px] font-bold  mb-6'>What they’re saying</h1>
     <p className='lg:w-[50%] w-[70%]  mx-auto text-[16px]'>At quidam dissentiet definitionem eam, te nec ullum similique. Verear
     appareat adversarium id eos, eum ei aperiri vivendo quaestio, mea leg
     ea. Quo probo noluisse menandri an.</p>
    <div className='w-[90px] h-[90px] mx-auto mt-4  '>
    <img src={assets.Review_two} alt="" className='w-full h-full rounded-[50%]' />
     <div className="swiper-pagination mt-4 flex justify-center"></div>
</div>
</div>
        </SwiperSlide>
        <SwiperSlide>
            
      <div>
    <h3 className='md:text-lg text-sm text-[#cf802e] mb-2'>SUMMER COLLECTION</h3>
    <h1 className='lg:text-4xl md:text-3xl text-[16px] font-bold  mb-6'>What they’re saying</h1>
     <p className='lg:w-[50%] w-[70%]  mx-auto text-[16px]'>At quidam dissentiet definitionem eam, te nec ullum similique. Verear
     appareat adversarium id eos, eum ei aperiri vivendo quaestio, mea leg
     ea. Quo probo noluisse menandri an.</p>
    <div className='w-[90px] h-[90px] mx-auto mt-4  '>
    <img src={assets.Review_one} alt="" className='w-full h-full rounded-[50%]' />
     <div className="swiper-pagination mt-4 flex justify-center"></div>
</div>
</div>
        </SwiperSlide>
       
      </Swiper>
      <div className="swiper-pagination" style={{ display: 'flex', color:"[#cf802e] ", justifyContent: 'center', marginTop: '16px' }}></div>
    </div>
  );
}

export default Review;














