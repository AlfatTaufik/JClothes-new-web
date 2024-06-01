import React from 'react'
import Slider from "react-slick";

const Hero = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div>
        <div className='w-full'>
        <Slider {...settings}>
         </Slider>
        </div>
    </div>
  )
}

export default Hero