import React from 'react';
import MenuLinks from '../../base-data';
import { IoMdSearch } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container mx-auto flex items-center">
          {/* Logo And Link Label Places */}
          <div className="flex items-center gap-4">
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl uppercase'>
              JClothes
            </a>
            {/* Menu Items */}
            <div className='hidden lg:flex items-center'>
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-primary dark:hover:text-white duration-200'>
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Right Section */}
          <div>
            {/* search bar here */}
            <div>
                <input type="text" 
                placeholder='Search'
                className='search-bar'
                />
                <IoMdSearch className='text-xl text-gray-600 dark:text-gray-400'/>
            </div>
            {/* Dark Mode Here  */}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
