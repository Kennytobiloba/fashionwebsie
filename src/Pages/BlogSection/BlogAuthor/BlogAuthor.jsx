import React from 'react'
import { RecentPost, assets } from '../../../assets/assets'


const BlogAuthor = () => {
  return (
    <div className='w-full'>
      <h1 className='text-4xl font-bold'>Our Blog</h1>
 <div className='flex items-center border overflow-hidden bg-white shadow-sm mt-6 px-4'>
  <input 
    type="text" 
    placeholder='Search' 
    className='text-[18px] w-full py-2 px-2 border-none focus:outline-none' 
  />
  <button className="ml-2">
    <i className="fa fa-search text-red-400"></i>
  </button>
</div>
<div>
<div className='w-[300px] h-[300px] mt-10 '>
  <img src={assets.SummerCollection_two} alt="" className=' rounded-[50%] h-full w-full object-cover' />
</div>
<h3 className='text-[22px] font-bold mt-4 mb-2 '>About Author</h3>
<p className='text-[18px] '>Dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua.</p>
</div>
<div className='grid grid-cols-1 mt-8 shadow-lg p-6'>
  {
    RecentPost.map((item,id) => (
      <div key={id} className='mb-4'>
        <div className='grid grid-cols-2 gap-4 '>
        <div>
          <img src={item.img} alt="" className='h-full w-full object-cover' />
        </div>
        <div>
          <h3 className='text-[18px] font-bold mb-2'>{item.product}</h3>
          <h3 className='text-[18px] mb-2'>{item.date}</h3>
          <h3>{item.name}</h3>
         
        </div>
        </div>

      </div>
    ))
  }
</div>

    
<div className='w-[100%]  px-4 py-6 mt-6 shadow-lg  text-center md:text-start  '>
        <h5 className="2xl:text-2xl text-[18px]  mb-3 text-2xl font-bold">Categories</h5>
       <h6 className="text-[16px]"><a href="#">Accessories (2)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Bags (4)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Casual (6)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Children (5)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Clothes (8)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Cosmetic (7)</a></h6>
	   <h6 className="text-[16px] mt-3"><a href="#">Fashion (10)</a></h6>
	   

</div>

<div className='w-[100%]  px-4 py-6 mt-6 shadow-lg  text-center md:text-start '>
  <h1 className='text-2xl font-bold'>Tags</h1>
  
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2 mt-4"><a href="#">clothes</a>,</li>
  <li className="text-uppercase inline-block lg:text-[18px] text-[14px] mr-2 "><a href="#">Bags</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">decoration</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">flowers</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">lifestyle</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">look</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">minimal</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">modern</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">new</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">stylish</a>,</li>
		<li className="text-uppercase inline-block  lg:text-[18px] text-[14px] mr-2"><a href="#">trend</a>,</li>

</div>

<div className='w-[100%]  px-4 py-6 mt-6 shadow-lg  text-center md:text-start '>
  <h1 className='text-2xl font-bold'>Newsletter</h1>
  <div className='flex items-center border overflow-hidden bg-white shadow-sm mt-6 px-4'>
  <input 
    type="text" 
    placeholder='Search' 
    className='text-[18px] w-full py-2 px-2 border-none focus:outline-none' 
  />
  <button className="ml-2">
    <i className="fa fa-envelope text-red-400"></i>
  </button>
</div>

</div>
    </div>
  )
}

export default BlogAuthor