import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  const [hover, setHover] = useState(false)
  return (
    <div className=''>
      <Link to={`/Product/${props.id}`}>
        <img src={props.image} alt="" className='w-full h-full ' onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} />
        <h3 className='absolute top-0 left-0 px-8 py-2 2xl:text-lg text-sm font-bold bg-white '>{props.product}</h3>
        <div>
        {
          hover && (
            <div  onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className='flex gap-4 2xl:px-6 2xl:py-4 px-6 py-4 md:p-2  absolute md:bottom-[4.5rem] bottom-[3rem]  right-0 bg-white'>
          <i className="fa fa-heart"></i>
          <i className="fa fa-eye"></i>
          <i className=" fa fa-shopping-bag"></i>
        
        </div>
          )
        }
        
        </div>
        </Link>
        <div className='mt-4'>
         <div className='flex justify-between'>
         <h3 className='md:text-lg font-bold text-sm '>{props.name}</h3>
         <h3 className='md:text-lg text-sm'>{props.price}</h3>
         </div>
         <h3 className='md:text-lg text:sm'>{props.category}</h3>
            
        </div>
    </div>
  )
}

export default Items