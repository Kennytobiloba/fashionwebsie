import React from 'react'
import { assets } from '../../../assets/assets'

const BlogInfo = () => {
  return (
    <div className='bg-white py-2 px-2 shadow-md relative'>
        <div>
        <div className=''>
            <img src={assets.home_imgtwo} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='px-8 py-4 bg-black text-white absolute top-2 left-2'>
            <h4>FEB 9</h4>
        </div>
        <h3 className='mt-4 lg:text-[18px] text-[16px] cursor-pointer'><span className='hover:text-[#cf802e]'>ADMIN / </span>  <span className='hover:text-[#cf802e]'> ACCESSORIES / </span> <span className='hover:text-[#cf802e]'>CASUAL /</span>
        <span> 3 COMMENTS</span></h3>

        <h1 className='2xl:text-4xl lg:text-3xl md:text-[2xl] text-[20px]  font-bold mt-2 mb-2 hover:text-[#cf802e]'>Sweet, sweet burn of sun and summer wind.</h1>
        <p className='2xl:text-[18px] text-[16px] tracking-wide'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet scelerisque orci. Aenean et ex ut elit tincidunt rutrum vitae eleifend metus. Nunc tincidunt venenatis tellus euismod fermentum. Maecenas sed dapibus eros. Phasellus eu mi metus. Nunc mi nisl, viverra id sollicitudin et, auctor sit amet augue. Morbi blandit dolor ac rhoncus semper. Donec rutrum risus vitae arcu interdum condimentum. Pellentesque eu ex metus. Maecenas facilisis est at aliquet.
        </p>
        <div className='mt-4'>
            <h3 className='text-[18px] hover:text-[#cf802e] cursor-pointer'><span>Read More <i className="fa fa-chevron-right ms-1"></i></span></h3>
           
        </div>
        </div>
        <div className='mt-10'>
        <div>
        <div className=''>
            <img src={assets.home_imgone} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='px-8 py-4 bg-black text-white absolute top-2 left-2'>
            <h4>FEB 7</h4>
        </div>
        <h3 className='mt-4 lg:text-[18px] text-[16px]  cursor-pointer'><span className='hover:text-[#cf802e]'>ADMIN / </span>  <span className='hover:text-[#cf802e]'> ACCESSORIES / </span> <span className='hover:text-[#cf802e]'>CASUAL /</span>
        <span> 3 COMMENTS</span></h3>

        <h1 className='2xl:text-4xl lg:text-3xl md:text-[2xl] text-[20px]  font-bold mt-2 mb-2 hover:text-[#cf802e]'>Sweet, sweet burn of sun and summer wind.</h1>
        <p className='2xl:text-[18px] text-[16px]tracking-wide'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet scelerisque orci. Aenean et ex ut elit tincidunt rutrum vitae eleifend metus. Nunc tincidunt venenatis tellus euismod fermentum. Maecenas sed dapibus eros. Phasellus eu mi metus. Nunc mi nisl, viverra id sollicitudin et, auctor sit amet augue. Morbi blandit dolor ac rhoncus semper. Donec rutrum risus vitae arcu interdum condimentum. Pellentesque eu ex metus. Maecenas facilisis est at aliquet.
        </p>
        <div className='mt-4'>
            <h3 className='text-[18px] hover:text-[#cf802e] cursor-pointer'><span>Read More <i className="fa fa-chevron-right ms-1"></i></span></h3>
           
        </div>
        </div>

        </div>

        <div className='mt-10'>
        <div>
        <div className=''>
            <img src={assets.home_imgthree} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='px-8 py-4 bg-black text-white absolute top-2 left-2'>
            <h4>FEB 8</h4>
        </div>
        <h3 className='mt-4 lg:text-[18px] text-[16px]  cursor-pointer'><span className='hover:text-[#cf802e]'>ADMIN / </span>  <span className='hover:text-[#cf802e]'> ACCESSORIES / </span> <span className='hover:text-[#cf802e]'>CASUAL /</span>
        <span> 3 COMMENTS</span></h3>

        <h1 className='2xl:text-4xl lg:text-3xl md:text-[2xl] text-[20px] font-bold mt-2 mb-2 hover:text-[#cf802e]'>Sweet, sweet burn of sun and summer wind.</h1>
        <p className='2xl:text-[18px] text-[16px] tracking-wide'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet scelerisque orci. Aenean et ex ut elit tincidunt rutrum vitae eleifend metus. Nunc tincidunt venenatis tellus euismod fermentum. Maecenas sed dapibus eros. Phasellus eu mi metus. Nunc mi nisl, viverra id sollicitudin et, auctor sit amet augue. Morbi blandit dolor ac rhoncus semper. Donec rutrum risus vitae arcu interdum condimentum. Pellentesque eu ex metus. Maecenas facilisis est at aliquet.
        </p>
        <div className='mt-4'>
            <h3 className='text-[18px] hover:text-[#cf802e] cursor-pointer'><span>Read More <i className="fa fa-chevron-right ms-1"></i></span></h3>
           
        </div>
        </div>
        </div>

    </div>
  )
}

export default BlogInfo