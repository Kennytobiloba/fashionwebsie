import React, { useState } from 'react'
import NavLinks from '../NavLinks/NavLinks'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle] = useState(true)
  return (
    
    <div className=' sticky w-full p-2 px-[15px] shadow-xl bg-white top-0 z-50'>
      <div className='w-[100%] lg:w-[80%] mx-auto flex justify-between '>
     <div className=' flex items-center justify-between  '>
    <div className='flex '>
    <a href="" className=' text-[32px] md:text-[24px] lg:text-[30px] sm:p-0 px-4 font-Poppins font-bold'>
    <i className="fa fa-female text-red-600 "></i> Fashist </a>
    </div>
    <div className=' md:flex hidden items-center font-Poppins '>
     <NavLinks/>
     </div>
     </div>
     {/* navbar Links */}
     <div className='flex gap-8 items-center'>
     <div className=' md:flex hidden  text-black text-[16px] font-poppins hover:text-[#cf802e]  justify-between items-center gap-4'>
     <i className="fa fa-search"></i>
     <a href="#"><i className="fa fa-heart"></i> Wishlist </a>
     
     </div>
     <Link to="Cart">
     <i className="fa fa-shopping-cart"></i>
     </Link>
     </div>
     <div className='md:hidden flex justify-center items-center'>
     { toggle ? <i className="fa-solid fa-bars text-[28px]" onClick={()=> setToggle(false)}></i> : <i className="fa-regular fa-circle-xmark text-[28px]" onClick={()=> setToggle(true)}></i> }
     
     </div>
    {
      toggle ? "" :  <div className='md:hidden  bg-[#fcf9f6] mt-6 border rounded-md shadow-md mr-2 flex  justify-center text-left p-[2rem] 
      absolute top-[40px] right-0 min-w-[210px] border-r-4 space-y-4  '>
     
      {/* mo bile section */}
      {
        toggle ? "" :<NavLinks/> 
      }

     </div>
    }
      </div>
    </div>
  )
}

export default Navbar