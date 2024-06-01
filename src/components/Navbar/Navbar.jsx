import React from 'react';
import MenuLinks, { DropdownLinks } from '../../base-data';
import { IoMdSearch } from 'react-icons/io';
import { FaCaretDown, FaShoppingCart } from 'react-icons/fa';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
        <div className="container flex justify-between items-center ">
          {/* Logo And Link Label Places */}
          <div className="flex items-center gap-4">
            <a href="#" className='text-primary font-semibold tracking-widest text-2xl sm:text-3xl uppercase'>
              JClothes
            </a>
            {/* Menu Items */}
            <div className='hidden lg:block items-center'>
              <ul className="flex items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} className='inline-block px-4 font-semibold text-gray-500 hover:text-primary dark:hover:text-white duration-200'>
                      {data.name}
                    </a>
                  </li>
                ))}
                {/* Dropdown */}
                <li className='relative cursor-pointer group '>
                    <a href="#" className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                        Quick Links
                        <FaCaretDown className='group-hover:rotate-180 duration-300'/>
                    </a>
                    {/* Links */}
                    <div className='absolute z-[9999] hidden group-hover:block w-[180px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2
                    text-black dark:text-white'>
                        <ul className='space-y-1'>
                            {
                                DropdownLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className='inline-block p-2 font-semibold text-gray-500 hover:text-primary dark:hover:text-white duration-200 hover:bg-primary/20 w-full rounded-md'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Right Section */}
          <div className='flex justify-between items-center gap-4'>
            {/* search bar here */}
            <div className='relative group hidden sm:block'>
                <input type="text" 
                placeholder='Search'
                className='search-bar'
                />
                <IoMdSearch className='text-xl text-gray-600 dark:text-gray-600 group-hover:text-primary 
                absolute top-1/2 -translate-y-1/2 right-3 duration-200'/>
            </div>
            {/* Chart Btn */}
            <button className='relative p-3'>
            <FaCartShopping className='text-xl text-gray-600 dark:text-gray-400 group-hover:text-primary'/>
            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>4</div>
            </button>
            {/* Dark Mode Here  */}
            <div>
                <DarkMode/>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
