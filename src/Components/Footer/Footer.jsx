import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black relative bottom-0 flex flex-col justify-center pt-[20px] mt-20 text-white px-10 2xl:px-20'>
        <div className='grid md:grid-cols-6 gap-10 grid-cols-1 2xl:w-[80%] w-full mx-auto 2xl:p-10'>
            {/* first section */}
            <div className='flex flex-col items-start gap-6 '>
                <div className='flex md:gap-4 md:mx-0 mx-auto'>
                    <h1 className='text-[28px] md:text-[24px] lg:text-2xl sm:p-0 px-4 font-Poppins font-bold'>Fashist</h1>
                    <i className="fa fa-female text-[32px] md:text-[24px] lg:text-2xl sm:p-0 px-4 font-Poppins font-bold text-red-600 "></i> 
                </div>
            
            <p className='text-[16px] text-gray-100 text-start'>Lorem ipsum dolor sit amet, doming quaeque an mea gravida.</p>
            
            <div className='flex gap-4'>
          <i className="fa fa-rss"></i>
          <i className="fa fa-pinterest"></i>
          <i className="fa fa-twitter"></i>
          <i className="fa fa-linkedin"></i>

            </div>



            </div>

            <div className='flex flex-col items-start gap-4'>
                <h1 className='text-[28px] md:mx-0 mx-auto md:text-[24px] lg:text-2xl sm:p-0 px-4 font-Poppins font-bold'> Locate Us</h1>
                <h3 className='text-[16px] text-gray-100'>382 Sixth Avenue East Street, Old Venue</h3>
                <h3 className='text-[16px] text-gray-100'>Phone:+(000) 345 67 89</h3>
                <h3 className='text-[16px] text-gray-100'>Email:info@gmail.com</h3>

            </div>
            {/* second Section */}
            <div className=' flex flex-col items-start gap-4'>
                <h1 className=' text-[28px] mx-auto md:mx-0 md:text-[24px] lg:text-2xl sm:p-0 px-4 font-Poppins font-bold'>Information</h1>
                 <div className='grid grid-cols-2 gap-[12rem] md:flex md:flex-col md:gap-4'>
                 <div className='flex flex-col items-start gap-4'>
                 <h3 className='text-[16px] text-gray-100'> About Us</h3>
                 <h3 className='text-[16px] text-gray-100'>FAQ Page</h3>
                 <h4 className='text-[16px] text-gray-100'>Contact Us</h4>
                 </div>
                 <div className='flex flex-col items-start gap-4'>
                 <h3 className='text-[16px] text-gray-100'>Our Work</h3>
                 <h4 className='text-[16px] text-gray-100'>Offices</h4>
                 <h4 className='text-[16px] text-gray-100'>Policy</h4>

                 </div>

                 </div>
            </div>
            







            
            {/* third Section */}

            <div className='flex flex-col items-start gap-4'>
                <h1 className=' text-[28px] mx-auto md:mx-0  md:text-[24px] lg:text-2xl sm:p-0 px-4 font-Poppins font-bold'>Discover</h1>
                <div className='grid grid-cols-2 gap-[12rem] md:flex md:flex-col md:gap-4'>
                    <div className='flex flex-col items-start gap-4'>
                    <h4 className='text-[16px] text-gray-100'>Men</h4>
                   <h4 className='text-[16px] text-gray-100'>Women</h4>
                   <h4 className='text-[16px] text-gray-100'>Home & Living</h4>
                    </div>
                    <div className='flex flex-col items-start gap-4'>
                    <h4 className='text-[16px] text-gray-100'>Sale</h4>
                  <h4 className='text-[16px] text-gray-100'>Privacy</h4>
                   <h4 className='text-[16px] text-gray-100'>Shopping</h4>
                    </div>
                </div>
                
                
            </div>

            







            
              {/* five Section */}

              <div className='flex flex-col items-start gap-4'>
                <h1 className=' text-[28px] mx-auto md:mx-0 md:text-[24px] lg:text-2xl sm:p-0 px-4 font-Poppins font-bold'>Connect</h1>
                <div className=' grid grid-cols-2 gap-[12rem] md:flex md:flex-col md:gap-4'>
                <div className='flex flex-col items-start gap-4'>
                <h4 className='text-[16px] text-gray-100'>Follow Instagram</h4>
                <h4 className='text-[16px] text-gray-100'>Add to Facebook</h4>
                <h4 className='text-[16px] text-gray-100'>Pinterest</h4>
                </div>
                <div className='flex flex-col items-start gap-4'>
                <h4 className='text-[16px] text-gray-100'>Follow Twitter</h4>
                <h4 className='text-[16px] text-gray-100'>Google</h4>
                <h4 className='text-[16px] text-gray-100'>Linkedin</h4>
                </div>
                </div>
                
            </div>

            
              {/* forth Section */}

              <div className='flex flex-col items-start gap-4'>
                <h1 className=' text-[28px] mx-auto md:mx-0  md:text-[24px] lg:text-2xl sm:p-0 px-4 font-Poppins font-bold'>Download App</h1>
                <h4 className='text-[16px] text-gray-100'>Onea App for iOS and Android</h4>
                <h1 className='text-[16px] text-gray-100'>Newsletter</h1>
                <div>

                </div>
            </div>




        </div>

    </div>
  )
}

export default Footer