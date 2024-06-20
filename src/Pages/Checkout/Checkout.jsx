import { useContext } from "react";
import { ShopContext } from "../../ShopContext/ShopContext";


const Checkout = () => {
   const {  getTotalCartAmount } = useContext(ShopContext);
  return (
    <div className='w-[80%] mx-auto mt-20 gap-6 grid grid-cols-3 '>
        <div className=' col-span-2'>
            <h2 className='lg:text-[20px] text-[18px] font-bold '>Make Your Checkout Here</h2>
            <p className='lg:text-[18px] text-[16px] mt-4'>Please register in order to checkout more quickly</p>
            <div className='mt-6'>
                <div className='flex gap-4 w-full mt-2'> 
                 <div className='w-full'>
                    <h3 className='lg:text-[18px] text-[16px]'>First Name *</h3>
                 <input type="text"  className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
                 </div>
                 <div className='w-full'>
                    <h3 className='lg:text-[18px] text-[16px]'> Last Name *</h3>
                 <input type="text"  className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
                 </div>
               
                </div>


                <div className='flex gap-4 w-full mt-2'> 
                 <div className='w-full'>
                    <h3 className='lg:text-[18px] text-[16px]'>Email Address *</h3>
                 <input type="text"  className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
                 </div>
                 <div className='w-full'>
                    <h3 className='lg:text-[18px] text-[16px]'>Phone Number *</h3>
                 <input type="text"  className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
                 </div>
               
                </div>
                <div className='flex gap-4 w-full mt-2'>
             <div className='w-full'>
             <h4 className='lg:text-[18px] md:text-[16px] '>Country</h4>
            <select className='w-full p-4 text-lg border-2 border-gray-200 '>
              <option value="">Delhi</option>
              <option value="">Uttar Pradesh</option>
              <option value="">Punjab</option>
              <option value="">Madhya Pradesh</option>
            </select>
            </div>

            <div className='w-full mt-2'>
             <h4 className='lg:text-[18px] md:text-[16px] '>State / Divition *</h4>
            <select className='w-full p-4 text-lg border-2 border-gray-200 '>
              <option value="">Up</option>
              <option value="">Uttar Pradesh</option>
              <option value="">Punjab</option>
              <option value="">Madhya Pradesh</option>
            </select>
                    </div>

                </div>

                
                <div className='flex gap-4 w-full mt-2'> 
                 <div className='w-full'>
                    <h3 className='lg:text-[18px] text-[16px]'>Address Line 1 * </h3>
                 <input type="text"  className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
                 </div>
                 <div className='w-full'>
                    <h3 className='lg:text-[18px] text-[16px]'> Address Line 2 *</h3>
                 <input type="text"  className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
                 </div>
               
                </div>
                <div className='flex gap-4 w-full mt-2'> 
                 <div className='w-full'>
                    <h3 className='lg:text-[18px] text-[16px]'>Postal Code * * </h3>
                 <input type="text"  className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
                 </div>
                 <div className='w-full'>
                    <h3 className='lg:text-[18px] text-[16px]'> Company  *</h3>
                 <input type="text"  className='p-4 w-full mb-4 text-[16px] border-1 border-gray-200 border' />
                 </div>
               
                </div>

                <div className='flex items-center gap-2 mt-4'>
                    <input type="checkbox" />
                    <span className='text-[16px]'>Create an account?</span>
                </div>
            </div>
        </div>
        <div>
            <div className='w-full border-[1px] px-4 border-[#efcfad] py-10 '>
                <h1 className='lg:text-[24px] text-[18px] font-bold'>CART TOTALS</h1>
                <hr className='h-[4px] bg-[#cf802e] w-[70px] mt-[2px]' />
                <div className="flex justify-between mt-4">
                  <h3 className="text-[16px] lg:text-[18px]">Sub Total</h3>
                  <h3 className="text-[16px] lg:text-[18px]">${getTotalCartAmount()}.00</h3>
                </div>
                <div className="flex justify-between mt-4">
                  <h3 className="text-[16px] lg:text-[18px]">(+) Shipping</h3>
                  <h3 className="text-[16px] lg:text-[18px]">+20.00</h3>
                </div>
                <div className="flex justify-between mt-6">
                  <h3 className="text-[16px] font-bold lg:text-[18px]">(+) Total</h3>
                  <h3 className="text-[16px] font-bold lg:text-[18px]">${getTotalCartAmount()+20}.00</h3>
                </div>

                <h1 className='lg:text-[24px] text-[18px] font-bold mt-8'>PAYMENTS</h1>
                <hr className='h-[4px] bg-[#cf802e] w-[70px] mt-[2px]' />
                <div>
                  <div className="mt-4 text-[16px] lg:text-[18px] gap-4 flex">
                     <input type="checkbox" />
                     <span>Check Payments</span>
                  </div>

                  <div className="mt-2 text-[16px] lg:text-[18px] gap-4 flex">
                     <input type="checkbox" />
                     <span>Cash On Delivery</span>
                  </div>
                </div>
                <div className="mt-2 text-[16px] lg:text-[18px] gap-4 flex">
                     <input type="checkbox" />
                     <span>PayPal</span>
                  </div>

                  <div className=' text-center mt-6 ' >
            <a className="button capitalize lg:text-[18px] text-[14px] font-bold hover:bg-gray-500  lg:px-10 px-10 py-4 md:px-4 md:py-4  lg:py-4 2xl:px-18 flex justify-center text-white bg-[#cf802e]" href="#">
              PROCEED TO CHECKOUT
            </a>
          </div>

            </div>
        </div>
    </div>
  )
}

export default Checkout