import React from 'react';
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from "react-icons/fa";

const service = [
    {
        id: 1,
        icon: <FaCarSide className="text-4xl md:text-5xl text-primary" />,
        title: "Free Shipping",
        description: "Gratis pengiriman dengan transaksi minimal 20 pcs"
    },
    {
        id: 2,
        icon: <FaCheckCircle className="text-4xl md:text-5xl text-primary" />,
        title: "Keamanan Terjamin",
        description: "Pembayaran setelah barang selesai dan dengan berbagai metode."
    },
    {
        id: 3,
        icon: <FaWallet className="text-4xl md:text-5xl text-primary" />,
        title: "Harga Menyesuaikan",
        description: "Beritahu kami budget kamu, pasti kami bantu"
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className="text-4xl md:text-5xl text-primary" />,
        title: "Online Service",
        description: "Layanan kami tersedia kapanpun dan dimanapun."
    },
]

const Service = () => {
  return (
    <div>
      <div className="container my-14 md:my-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8">
          {service.map((data, index) => (
            <div key={index} className='flex flex-col items-start sm:flex-row gap-4'>
              {data.icon}
              <div>
                <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                <h3 className='text-gray-400 text-sm'>{data.description}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
