import React, { useContext } from 'react';
import { ShopContext } from '../../ShopContext/ShopContext';
import { useNavigate } from 'react-router-dom';

const Carts = () => {
  const navigate = useNavigate();

  const checkout = () => {
    navigate('/Checkout');
  };

  const { addToCart, all_data, cartItems, RemoveFromCart, getTotalCartAmount } = useContext(ShopContext);
  const totalCartAmount = getTotalCartAmount();

  return (
    <div className='2xl:w-[80%] mx-auto m:w-[98%] w-[90%] mt-20 grid md:grid-cols-3 grid-cols-1 gap-6'>
      <div className='md:col-span-2 col-1 '>
        <div className='flex justify-between mb-4'>
          <h3 className='lg:text-2xl font-bold text-[20px]'>MY CART</h3>
        </div>
        <div className='w-full bg-pink-50 p-4 lg:text-[18px] text-[16px]'>
          <h3>PRODUCT</h3>
        </div>
        <div className='mt-8 grid-cols-1 '>
          {totalCartAmount > 0 ? (
            all_data.map((item, index) => {
              if (cartItems[item.id] > 0) {
                return (
                  <div key={index} className='grid grid-cols-3 gap-4 mb-6'>
                    <div>
                      <img src={item.image} alt="" className='h-full object-cover w-full' />
                    </div>
                    <div className='col-span-2'>
                      <h3 className='lg:text-[18px] text-[16px] font-bold hover:text-[#cf802e] cursor-pointer mb-4'>{item.name}</h3>
                      <h3 className='lg:text-[14px] text-[14px] hover:text-[#cf802e] cursor-pointer mb-4'>RED / XS</h3>
                      <h3 className='lg:text-[14px] text-[14px] hover:text-[#cf802e] cursor-pointer mb-4'>{item.vendor}</h3>
                      <h3 className='lg:text-[26px] font-bold text-[18px] text-[#cf802e] cursor-pointer mb-4'>${item.price}.00</h3>
                      <h4 className='lg:text-[14px] text-[14px] hover:text-[#cf802e] cursor-pointer mb-4'>Quantity</h4>
                      <div className='flex gap-4 flex-wrap md:flex-nowrap'>
                        <input type="number" value={cartItems[item.id]} className='lg:w-[100px] md:w-[60px] w-[100px] bg-pink-100 border-gray-300 border-2 px-2 text-lg' readOnly />
                        <button onClick={() => RemoveFromCart(item.id)} className="button flex-shrink-1 capitalize 2xl:text-[18px] text-[14px] font-bold hover:bg-gray-500 inline-flex text-white bg-[#242422] 2xl:px-10 2xl:py-4 px-10 py-4 lg:px-4 lg:py-4 md:py-4 md:px-2">
                          REMOVE
                        </button>
                        <button onClick={() => addToCart(item.id)} className="button capitalize 2xl:text-[18px] text-[14px] font-bold hover:bg-gray-500 2xl:px-10 px-10 2xl:py-4 md:px-6 py-4 inline-flex text-white bg-[#cf802e]">
                          UPDATE CART
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })
          ) : (
            <div className='text-center mt-8'>
              <h3 className='lg:text-2xl text-[18px] font-bold'>No cart added yet</h3>
            </div>
          )}
        </div>
      </div>
      <div className='w-full'>
        <h3 className='lg:text-2xl font-bold mb-4 text-[20px] md:text-end text-center'>CONTINUE SHOPPING</h3>
        <div className='w-full bg-pink-50 p-4 lg:text-[18px] text-[16px] text-center'>
          <h3>SUBTOTAL</h3>
        </div>
        <h3 className='lg:text-[26px] text-center mt-4 font-bold text-[18px] text-[#cf802e] cursor-pointer mb-4'>${totalCartAmount}.00</h3>
        <hr className='bg-pink-100 mt-4 h-[1px] w-full' />
        <h3 className='lg:text-[18px] text-[16px] mt-2 md:text-start text-center'>Additional comments</h3>
        <div>
          <textarea className='p-2 text-[16px] mb-4 w-[100%] h-[20vh] mt-4 border-2 border-pink-100'></textarea>
          <div className='flex justify-center' onClick={checkout}>
            <a className="button capitalize lg:text-[18px] text-[14px] font-bold hover:bg-gray-500  lg:px-10 px-10 py-4 md:px-4 md:py-4 lg:py-4 inline-flex text-white bg-[#cf802e]" href="#">
              PROCEED TO CHECKOUT
            </a>
          </div>
          <h1 className='lg:text-[24px] text-[20px] font-bold mt-8 md:text-start text-center'>GET SHIPPING ESTIMATES</h1>
          <div>
            <h4 className='lg:text-[18px] md:text-[16px] mt-4'>Country</h4>
            <select className='w-full p-2 text-lg border-2 border-pink-200 mt-4'>
              <option value="">America</option>
              <option value="">India</option>
              <option value="">England</option>
              <option value="">Africa</option>
            </select>
            <h4 className='lg:text-[18px] md:text-[16px] mt-4'>Postal/Zip Code</h4>
            <input type="text" placeholder='Your Subject' className='p-2 w-full mb-4 text-[16px] border-1 border-pink-100 mt-4 border' />
            <h4 className='lg:text-[18px] md:text-[16px] mt-4'>Country</h4>
            <select className='w-full p-2 text-lg border-2 border-pink-200 mt-4'>
              <option value="">Delhi</option>
              <option value="">Uttar Pradesh</option>
              <option value="">Punjab</option>
              <option value="">Madhya Pradesh</option>
            </select>
            <div className='flex justify-center mt-6'>
              <a className="button capitalize lg:text-[18px] text-[14px] font-bold hover:bg-gray-500 lg:px-10 px-10 py-4 md:px-4 md:py-4 lg:py-4 inline-flex text-white bg-[#cf802e]" href="#">
                CALCULATE SHIPPING
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carts;
