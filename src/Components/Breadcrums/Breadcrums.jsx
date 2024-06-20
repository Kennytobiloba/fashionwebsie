import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = '';

  if (location.pathname === '/') {
    return null; // Do not render anything on the home page
  }

  const crumbs = location.pathname.split('/').filter(crumb => crumb !== '').map((crumb, index, array) => {
    currentLink += `/${crumb}`;
    const isLast = index === array.length - 1;
    const decodedCrumb = decodeURIComponent(crumb.replace(/\+/g, ' ')); // Decode URL component

    return (
      <span key={currentLink}>
        <Link to={currentLink} style={{ marginRight: '5px' }}>
          {decodedCrumb}
        </Link>
        {!isLast && <span style={{ marginRight: '5px' }}>/</span>}
      </span>
    );
  });

  return (
    <div className='w-full bg-pink-50'>
      <div className='2xl:w-[80%] lg:w-[90%] w-[98%] p-10 mx-auto lg:text-[22px] text-[18px]'>
        <Link to="/" style={{ marginRight: '5px' }}>Home</Link>
        <span style={{ marginRight: '5px' }}>/</span>
        <span className='text-[#cf802e]'>{crumbs}</span>

        <div className='lg:text-[32px] text-[20px] sm:text-[26px] mt-2 font-bold'>
          {crumbs}
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
