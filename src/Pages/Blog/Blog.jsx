import React from 'react'
import BlogAuthor from '../BlogSection/BlogAuthor/BlogAuthor'
import BlogInfo from '../BlogSection/BlogInfo/BlogInfo'

const Blog = () => {
  return (
    <div className='w-full bg-pink-50'>
    <div className='w-[80%] mx-auto mt-20'>
      <div className='flex justify-between gap-8'>
      <div className='w-[22%]'>
   <BlogAuthor/>
   </div>

   <div className='w-full'>
 <BlogInfo/>
   </div>
      </div>

    </div>
    </div>
  )
}

export default Blog