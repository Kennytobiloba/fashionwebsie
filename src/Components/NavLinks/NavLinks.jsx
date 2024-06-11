import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavLinks = () => {
  const links = [
    { name: "Home", path: "/", className: "text-[#cf802e] hover:text-black" },
    { name: "About", path: "/about" },
    {
      name: "Shop",
      submenu: true,
      subLinks: [
        {
          Head: "Shop",
          sublink: [{ name: "Shop", path: "/shop" }, { name: "Shop Details", path: "/shop-details" }]
        }
      ]
    },
    {
      name: "Blog",
      submenu: true,
      subLinks: [
        {
          Head: "Blog",
          sublink: [{ name: "Blog", path: "/blog" }, { name: "Blog Details", path: "/blog-details" }]
        }
      ]
    },
    { name: "Team", path: "/team" },
    {
      name: "Pages",
      submenu: true,
      subLinks: [
        {
          Head: "Shop",
          sublink: [{ name: "Shopping Cart", path: "/shopping-cart" }, { name: "Check out", path: "/checkout" }]
        }
      ]
    },
    { name: "Contact", path: "/contact" }
  ];

  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  const toggleSubMenu = (index) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='flex md:flex-row flex-col px-6 mx-auto space-y-8 md:space-y-0'>
      {links.map((link, i) => (
        <div key={i}>
          <div>
            <ul>
              <li
                className={`mx-2 lg:mx-2 2xl:mx-4 text-black cursor-pointer hover:text-[#cf802e] text-[16px] lg:text-[16px] 2xl:text-[16px] font-bold ${link.className}`}
                onClick={() => toggleSubMenu(i)}
              >
                {link.path ? (
                  <Link to={link.path} className="no-underline">
                    {link.name}
                  </Link>
                ) : (
                  <span>
                    {link.name}
                    {link.submenu && (
                      <i className="fa-solid fa-caret-down ml-2"></i>
                    )}
                  </span>
                )}
              </li>
              {openSubMenuIndex === i && link.submenu && (
                <div className='absolute md:mt-[26px] mt-[50px] cursor-pointer'>
                  <div className='bg-white min-w-[220px] px-[15px] py-[10px] shadow-lg'>
                    {link.subLinks.map((mysublinks, subIndex) => (
                      <div key={subIndex}>
                        {mysublinks.sublink.map((slinks, sublinkIndex) => (
                          <div
                            key={sublinkIndex}
                            className='flex gap-6 border-1 text-black hover:text-[#cf802e] font-medium my-2 text-[16px] items-center'
                          >
                            <i className='fa fa-chevron-right hover:text-[#cf802e] text-8 text-black'></i>
                            <Link to={slinks.path} className="no-underline">
                              {slinks.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavLinks;
