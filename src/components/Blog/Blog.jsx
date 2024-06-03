import React from 'react'
import Heading from '../Shared/Heading'
import { Blogs } from '../../base-data'

const Blog = () => {
  return (
    <div className='my-12'>
    <div className='container items-center'>
        <Heading title={"Info Terbaru !"} subtitle={"Baca Sekarang."}/>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 gap-y-8 sm:gap-4 md:gap-7'>
            {Blogs.map((data) => (
                <div key={data.title} className='bg-white dark:bg-gray-800 rounded-2xl p-4'>
                    <div className='overflow-hidden rounded-2xl mb-2'>
                        <img src={data.image} className='w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500' alt="" />
                    </div>
                    <div className='space-y-2'>
                        <p className='text-xs text-gray-500'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600 dark:text-gray-400'>{data.subtitle}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    </div>
  )
}

export default Blog