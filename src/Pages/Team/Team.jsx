import React from 'react';
import { Teams } from '../../assets/assets';

const Team = () => {
  return (
    <div className='mt-10 2xl:w-[80%] w-[90%] mx-auto'>
      <h1 className='lg:text-3xl md:text-[2xl] text-[20px] font-bold mb-4'>Our Team</h1>
      <div className='grid md:grid-cols-4 grid-cols-1 gap-10'>
        {Teams.map((item, id) => (
          <div key={id} className='mb-10 relative'>
            <img src={item.img} alt='' className='w-full h-full object-cover' />
            
            <h3 className='md:text-[18px] mt-2 text-[16px]'>{item.job}</h3>
            <h2 className='md:text-[22px] text-[20px] font-bold mb-2'>{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
