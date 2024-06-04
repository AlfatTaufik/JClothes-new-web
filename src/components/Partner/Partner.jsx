import React from 'react'
import { brand1, brand2, brand3, brand4, brand5 } from '../../assets/brand/import-brand'

const Partner = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
        <div className="container">
            <div className="grid grid-cols-5 gap-3 place-items-center opacity-50">
                <img src={brand1} alt="" className='w-[80px] dark:invert'/>
                <img src={brand2} alt="" className='w-[80px] dark:invert'/>
                <img src={brand3} alt="" className='w-[80px] dark:invert'/>
                <img src={brand4} alt="" className='w-[80px] dark:invert'/>
                <img src={brand5} alt="" className='w-[80px] dark:invert'/>
            </div>
        </div>
    </div>
  )
}

export default Partner