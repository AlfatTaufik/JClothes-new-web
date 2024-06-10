import Slider from "react-slick";
import { sliderTag } from "../../base-data";
import Button from "../Shared/Button";

const Hero = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false
  };

  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] sm:min-h-[650px] bgHeroColor flex justify-center items-center">
        <div className="container pb-8 sm:pb-0 mx-auto">
          <Slider {...settings}>
            {sliderTag.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                  {/* text content section */}
                  <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left relative z-20 font-bold">
                    <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title1}</h1>
                    <h1 className="text-5xl uppercase text-white dark:text-white/5 sm:text-[80px] md:text-[100px] xl:text-[150px]">{data.title2}</h1>
                    <div>
                      <Button 
                      text="Shop By Category" bgColor="bg-primary" textColor="text-white"/>
                    </div>
                  </div>
                  {/* image content section */}
                  <div className="order-1 sm:order-2 ">
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-2xl relative z-40 "
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
