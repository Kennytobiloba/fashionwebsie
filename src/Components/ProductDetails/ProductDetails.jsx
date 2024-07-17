import React, { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Pagination, Autoplay } from 'swiper/modules';
import { ShopContext } from '../../ShopContext/ShopContext';

const ProductDetails = (props) => {
    const { product } = props;
    const {addToCart,cartItems} = useContext(ShopContext)

    return (
        <div className='flex md:flex-row flex-col md:mx-0 mx-auto mt-20 2xl:gap-10 gap-10 lg:gap-2 w-[100%] ' >
            <div className='flex-shrink-0 mx-auto md:mx-0  h-[70vh] md:w-[50%] lg:w-[60%] w-[100%]   ' >
                <Swiper
                    pagination={{
                        clickable: true,
                        renderBullet: (index, className) => {
                            return `<span class="${className}" style="margin: 0 4px; display: inline-block; width: 30px; height: 4px; background: #cf802e; opacity: 0.5; transition: opacity 0.3s ease-in-out;"></span>`;
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
                            <img src={product.productimage_one} alt="" className='w-full h-full object-cover' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={product.productimage_two} alt="" className='w-full h-full object-cover' />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={product.productimage_three} alt="" className='w-full h-full object-cover' />
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-pagination" style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}></div>
            </div>
            <div className=' text-center md:text-start md:w-[50%] w-full '>
                <h1 className='2xl:text-3xl lg:text-2xl md:2xl text-[20px] mb-4 font-bold'>Product Detail</h1>
                <h3 className='lg:text-2xl text-[18px] mb-4'>{product.price}</h3>
                <div className='flex gap-2 items-center justify-center md:justify-start '>
                    <span className='flex 2xl:gap-2 2xl:text-[16px] text-[12px] text-[#cf802e]'>
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </span>
                    <span className='2xl:text-[18px] text-[12px]'>(1 customer review)</span>
                </div>
                <p className='md:w-[100%] w-[70%] text-[18px] mt-4 mx-auto md:mx-0'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                <div className='flex gap-4 items-center mt-6  justify-center md:justify-start'>
                    <input type="number" value={cartItems[product.id] } placeholder='1' className='w-[70px] bg-pink-100 border-gray-300 border-2 2xl:px-4 2xl:py-[1.2rem] py-[0.8rem] px-4 ' />
                    <button onClick={()=>{addToCart(product.id)}}><a className="button 
                    capitalize 2xl:text-[16px] text-[14px] font-bold hover:bg-gray-500 md:p-4
                      inline-block  text-white bg-[#cf802e] py-4 px-6 md:px-2 " href="#">Add to cart</a></button>
                </div>
                <h6 className="mt-6 lg:text-[18px] text-[16px]  font-bold"><a href="#"><i className="fa fa-heart text-[#cf802e]"></i> Add to Wishlist</a></h6>
                <h6 className="mt-4 lg:text-[18px] text-[16px]  capitalize"><span className="font-bold">SKU</span> / 1-2</h6>
                <h6 className="mt-4 lg:text-[18px] text-[16px]  capitalize"><span className="font-bold">CATEGORY</span> / Store</h6>
                <h6 className="mt-4 lg:text-[18px] text-[16px]  mb-0 capitalize"><span className="font-bold">TAGS</span> / Shopping, Clothes</h6>
            </div>
        </div>
    );
}

export default ProductDetails;
