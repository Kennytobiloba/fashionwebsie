import React from 'react'
import { FashionBlogs, Review, assets } from '../../../assets/assets'


const BlogDetailsInfo = () => {
  return (
    <div className='bg-white p-2'>
        <div className='mt-10 relative'>
        <div>
        <div className=''>
            <img src={assets.home_imgone} alt="" className='w-full h-full object-cover' />
        </div>
        <div className='px-8 py-4 bg-black text-white absolute top-0 left-0'>
            <h4>FEB 7</h4>
        </div>
        <h3 className='mt-4 lg:text-[18px] text-[16px]  cursor-pointer'><span className='hover:text-[#cf802e]'>ADMIN / </span>  <span className='hover:text-[#cf802e]'> ACCESSORIES / </span> <span className='hover:text-[#cf802e]'>CASUAL /</span>
        <span> 3 COMMENTS</span></h3>

        <h1 className='2xl:text-4xl lg:text-3xl md:text-[2xl] text-[20px]  font-bold mt-2 mb-2 hover:text-[#cf802e]'>Sweet, sweet burn of sun and summer wind.</h1>
        <p className='2xl:text-[18px] text-[16px]tracking-wide'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet scelerisque orci. Aenean et ex ut elit tincidunt rutrum vitae eleifend metus. Nunc tincidunt venenatis tellus euismod fermentum. Maecenas sed dapibus eros. Phasellus eu mi metus. Nunc mi nisl, viverra id sollicitudin et, auctor sit amet augue. Morbi blandit dolor ac rhoncus semper. Donec rutrum risus vitae arcu interdum condimentum. Pellentesque eu ex metus. Maecenas facilisis est at aliquet.
        </p>
        
        <h3 className=' mt-8 lg:text-2xl md:text-[20px] text-[20px] font-bold '>Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit. vitae feugiat magna, ut mattis ligula.</h3>

        <p className='lg:text-[18px] text-[16px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet scelerisque orci. Aenean et ex ut elit tincidunt rutrum vitae eleifend metus. Nunc tincidunt venenatis tellus euismod fermentum. Maecenas sed dapibus eros. Phasellus eu mi metus. Nunc mi nisl, viverra id sollicitudin et, auctor sit amet augue. Morbi blandit dolor ac rhoncus semper. Donec rutrum risus vitae arcu interdum condimentum. Pellentesque eu ex metus. Maecenas facilisis est at aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vitae feugiat magna, ut mattis ligula. Aliquam ut rutrum est. Maecenas sit amet scelerisque orci. Aenean et ex ut elit tincidunt rutrum vitae eleifend metus. Nunc tincidunt venenatis tellus euismod fermentum. Maecenas sed dapibus eros. Phasellus eu mi metus. Nunc mi nisl, viverra id sollicitudin et, auctor sit amet augue. Morbi blandit dolor ac rhoncus semper. Donec rutrum risus vitae arcu interdum condimentum. Pellentesque eu ex metus. Maecenas facilisis est at aliquet. Phasellus eu mi metus. Nunc mi nisl, viverra id sollicitudin et, auctor sit amet augue. Morbi blandit dolor ac rhoncus semper. Donec rutrum risus vitae arcu interdum condimentum. Pellentesque eu ex metus. Maecenas facilisis est at.</p>
        <div>

        </div>
        </div>
        <h2 className='lg:text-3xl mb-2 md:text-2xl text-[20px] mt-10 font-bold'>Related Post</h2>
        <div className='grid 2xl:grid-cols-3  lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 grid-cols-1 lg:gap-10 md:gap-4 gap-8 2xl:gap-12'>
            {
             FashionBlogs.slice(0,3).map((item,id)=>(
                <div key={id} className='mt-2 relative'>
                <div className='w-full h-full'>
                <img src={item.image} alt="" className='w-full h-full object-cover' />
                </div>
              <h3 className='absolute px-4 py-2 bg-white top-0 left-0'>  {item.date}</h3>
                <div className='mt-2 lg:text-lg text-[14px]  '>
                    <span className=' cursor-pointer hover:text-[#cf802e]' >ADMIN </span>
                    <span className=' cursor-pointer hover:text-[#cf802e]'>/ ACCESSORIES </span>
                    <span  className=' cursor-pointer hover:text-[#cf802e]'> / CASUAL</span>
                </div>
                <h3 className='lg:text-[18px] leading-6 text-[16px] font-bold '>{item.text}</h3>

            </div>
             ))
            }
        </div>
        

        </div>

        <div>
        <div className='2xl:mt-[8rem] mt-[16rem]'>
            {
              Review.map((item ,id) => (
                <div key={id} className='flex gap-6 mb-4'>
                  <div>
                    <img src={item.image} alt="" />
                  </div>
                  <div className='flex-1'>
                  <span className='flex gap-2 text-[14px] mt-2 text-[#cf802e]'>
                        <i className="fa fa-star "></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                    </span>
                    <h3 className='text-[16px] font-bold mt-2'>{item.date}</h3>
                    <h3 className='text-[20px] mt-2 font-bold'>{item.name}</h3>
                    <h3 className='text-[16px]'>{item.text}</h3>
                  </div>

                </div>
              ))
            }

           </div>
            
        </div>
        <div className='mt-8'>
            <h3 className='lg:text-3xl font-bold mb-2 text-[20px] md:text-2xl'>Post a Comment</h3>
            <div className='mt-4'>
                <div className='flex gap-2 w-full'>
                    <input type="text" placeholder=' Your Name' className='p-4 w-full text-[16px] border-1 border-gray-200 border' />
                    <input type="text" placeholder=' Your Email' className='p-4 w-full text-[16px] border-1 border-gray-200 border' />
                </div>
                <div className='flex gap-2 w-full mt-6'>
                    <input type="text" placeholder=' Your Website' className='p-4 w-full text-[16px] border-1 border-gray-200 border' />
                    <input type="text" placeholder=' Your Subject' className='p-4 w-full text-[16px] border-1 border-gray-200 border' />
                </div>
                <div className='text-lg flex gap-4 text-bold mt-4'>
              <input type="checkbox" />
              <span>Save my name and email in this browser for the next time I comment.</span>
            </div>

            <textarea name="" placeholder='Your Review' className=' p-2 text-[16px] w-[100%] h-[20vh] mt-4 border-2 border-gray-300'></textarea>

            <h6 className="mt-8 "><a className="button  hover:bg-gray-500 px-12 mt-4 py-4  text-white bg-[#cf802e]" href="#">Submit</a></h6>
            </div>
        </div>
       
    </div>
  )
}

export default BlogDetailsInfo