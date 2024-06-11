import Navbar from "../components/Navbar/Navbar";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import instance from "../axiosInstance";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function categoryById() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    let getData = async () => {
      let response = await instance.get(`/barang?category_id=${id}`);
      setData(response.data.data);
      console.log(response.data.data);
    };
    getData();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="flex flex-row gap-12 m-12 ">
        {data.map((datay) => (
          <Card key={datay.id} className='py-4'>
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
              <h2 className='text-tiny uppercase font-bold'>
                {datay.nama_barang}
              </h2>
              <small className='text-default-500'>
                harga : {datay.keterangan}
              </small>
              <h4 className='font-bold text-large'>Stok : {datay.stok}</h4>
            </CardHeader>
            <CardBody className='overflow-visible py-2'>
              <Image
                alt='Card background'
                className='object-cover rounded-xl'
                src={"http://localhost:8000/assets/img/product/"+datay.gambar}
                width={270}
              />
            </CardBody>
          </Card>
        ))}
      </div>
    </div>
  );
}
