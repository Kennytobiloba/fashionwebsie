import React from 'react'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div>
      <Link to={`/Product/${props.id}`}>
        <img src={props.image} alt="" className='w-full h-full ' />
        <h3 className='absolute top-0 left-0 px-8 py-2 lg:text-lg text-sm font-bold bg-white '>{props.product}</h3>
        <div>
        <div className='flex gap-4 px-6 py-4 absolute bottom-[4.5rem] right-0 bg-white'>
          <i className="fa fa-heart"></i>
          <i className="fa fa-eye"></i>
          <i className=" fa fa-shopping-bag"></i>
        
        </div>
        
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