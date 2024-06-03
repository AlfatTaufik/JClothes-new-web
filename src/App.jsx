import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Service from './components/Services/Service';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import Blog from './components/Blog/Blog';
import { Banners, Banners2 } from './base-data';
// import { Image3 } from '../src/assets/category/import-category';

const App = () => {
  console.log('Banners:', Banners); // Debugging

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <Navbar />
      <Hero />
      <Category />
      <Category2 />
      <Service />
      <Banner data={Banners} />
      <Products />
      <Banner data={Banners2} /> 
      <Blog />
    </div>
  );
};

export default App;
