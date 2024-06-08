import React from 'react'
import { all_data } from '../../assets/assets'
import Items from '../Items/Items'
  
const Collection = () => {
  return (
    <div>
      <div className=' lg:w-[80%] w-full mx-auto mt-20'>
      <div className='  text-center'>
        <h3 className='md:text-lg text-sm text-[#cf802e] font-bold '>SUMMER COLLECTION</h3>
        <h1 className='lg:text-2xl md:text-2xl text-lg  mt-2 font-bold mb-2 '>Shopping Every Day</h1>
        <p className='text-[16px] 2xl:w-[30%] w-[70%] mt-2 mx-auto text-center'>Autem neglegentur in duo, ex aperiam fabulas mei, exerci
        menandri explicari ut mei. Eam cibo et.</p>

      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 2xl:grid-cols-4 sm:grid-cols-2 mt-6 gap-10'>
        {
         all_data.map((item, id) => {
          return(
            <div className='relative' key={id}>
              <Items name={item.name} image={item.image} product={item.product} price={item.price} id={item.id} category={item.category} />
             

            </div>
          )
         })
        }
      </div>

    </div>
    </div>
  )
}

export default Collection