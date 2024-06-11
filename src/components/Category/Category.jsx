import React from "react";
import Button from "../Shared/Button";
import {
  Image1,
  Image2,
  UrbanSoc,
  Image4,
  Image5,
  Image6,
  Image7,
} from "../../assets/category/import-category";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className='py-8'>
      <div className='container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* first cols - */}
          <div
            className='py-10 pl-5 bg-gradient-to-br from-black/90 to-black/70 text-white rounded-3xl relative h-[320px] 
                flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Stylish</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>
                  Hoodie
                </p>
                <Link to={"category/2"}>
                  <Button
                    text='Explore'
                    bgColor='bg-primary'
                    textColor='text-white'
                  />
                </Link>
              </div>
            </div>
            <img src={Image1} alt='' className='w-[320px] absolute bottom-0' />
          </div>
          {/* second col  */}
          <div
            className='py-10 pl-5 bg-gradient-to-br from-brandYellow to-brandYellow/70 text-white rounded-3xl relative h-[320px] 
                flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Stylish</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>
                  Tote-Bag
                </p>
                <Link to={"category/5"}>
                  <Button
                    text='Explore'
                    bgColor='bg-white'
                    textColor='text-brandYellow'
                  />
                </Link>
              </div>
            </div>
            <img
              src={Image2}
              alt=''
              className='w-[320px] absolute -right-4 lg:top-[40px] '
            />
          </div>
          {/* third col  */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br from-primary to-primary/90 text-white rounded-3xl relative h-[320px] flex items-end'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-white'>Stylish</p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>
                  T-Shirt
                </p>
                <Link to={"category/1"}>
                  <Button
                    text='Explore'
                    bgColor='bg-white'
                    textColor='text-primary'
                  />
                </Link>
              </div>
            </div>
            <img
              src={UrbanSoc}
              alt=''
              className='w-[320px] h-auto absolute top-1/2 right-4 transform -translate-y-1/2 object-contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
