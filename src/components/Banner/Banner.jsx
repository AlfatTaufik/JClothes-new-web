import React from "react";

const Banner = ({ data }) => {
  console.log("Banner data:", data); // Debugging

  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div className="container">
        <div  style={{ backgroundColor: data.BgColor }} className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/* first col */}
          <div className="p-6 sm:p-8">
            <p className="text-sm">{data.discount}</p>
            <h1 className="uppercase text-4xl lg:text-7xl font-bold">
              {data.title}
            </h1>
            <p className="text-sm">{data.date}</p>
          </div>
          {/* second col */}
          <div className="h-full flex items-center">
            <img src={data.image} alt="" className="scale-150 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover" />
          </div>
          {/* third col */}
          <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
            <p className="font-bold text-xl">{data.title2}</p>
            <p className="text-3xl sm:text-5xl font-bold">{data.title3}</p>
            <p className="text-sm tracking-wide leading-5">{data.title4}</p>
            <div>
                <button style={{color:data.BgColor}} className="bg-white  py-2 px-4 rounded-full">Gas Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
