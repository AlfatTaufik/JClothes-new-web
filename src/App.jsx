import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Service from './components/Services/Service';
import Banner from './components/Banner/Banner';
import Products from './components/Products/Products';
import { Image3 } from '../src/assets/category/import-category';

const Banners = {
  discount: '30% Discount !',
  title: "Your Design",
  date: 'Only in June 2024',
  image: Image3,
  title2: 'Your Ideas On T-Shirt',
  title3: 'Akhir Semester Sale',
  title4: 'Khusus dibulan ini pembelian T-Shirt plus sablon apapun dapat diskon 30%',
  BgColor: 'hsl(199, 66%, 46%)'
};

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
    </div>
  );
};

export default App;
