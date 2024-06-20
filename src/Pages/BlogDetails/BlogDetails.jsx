import React from 'react'
import BlogDetailsAuthor from '../BlogSection/BlogDetailsAuthor/BlogDetailsAuthor'
import BlogDetailsInfo from '../BlogSection/BlogDetailsInfo/BlogDetailsInfo'

const BlogDetails = () => {
  return (
    <div className='w-full bg-pink-50'>
        <div className='2xl:w-[80%] w-[90%] mx-auto mt-20'>
            <div className='flex justify-between  md:flex-row flex-col 2xl:gap-8 gap-10'>
                <div className='2xl:w-[22%] lg:w-[30%] md:w-[40%] w-full'>
                    <BlogDetailsAuthor/>
                </div>
                <div className='w-full'>
                  <BlogDetailsInfo/>
                </div>

            </div>

        </div>

    </div>
  )
}

export default BlogDetails