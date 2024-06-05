import React from 'react'

const Head = () => {
  return (
    <div className='bg-black p-2 mb-2 md:block hidden '>
        <div className='flex justify-between content-center lg:w-[80%] w-full mx-auto  '>
    
            <p className='md:text-[14px] text-[12px] text-white font-normal font-montserrat'>Free shipping on domestic orders over $130</p>
            <ul className='flex '>
                <li className='md:text-[14px] text-[12px] lg:mx-4 mx-2 text-white font-normal font-montserrat'>SIGN IN</li>
                <li className='md:text-[14px] lg:mx-4 mx-2 text-[12px]  text-white font-normal font-montserrat'>CONTACT US</li>
                <li className='md:text-[14px] lg:mx-4 mx-2 text-[12px]  text-white font-normal font-montserrat' > FAQ</li>
            </ul>
            
        </div>
    </div>
  )
}

export default Head