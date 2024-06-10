import { useEffect, useState } from "react";
import Heading from "../Shared/Heading";
import ProductsCard from "./ProductsCard";
import { ProductData, ProductsData2 } from "../../base-data";
import instance from "../../axiosInstance.js";

const Products = () => {
  const [firstdata, setFirstdata] = useState([]);
  const [seconddata, setSeconddata] = useState([]);
  useEffect(() => {
    try {
      instance.get("/home").then((response) => {
        let { barang1, barang2 } = response.data;
        setFirstdata(barang1);
        setSeconddata(barang2);
        console.log(firstdata);
      });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
      <div className='container'>
        {/* Header */}
        <div className='grid'>
          <Heading title={"Our Products"} subtitle={"Custom Sekarang"} />
        </div>
        {/* body  */}
        <ProductsCard data={firstdata} />
        <ProductsCard data={seconddata} />
      </div>
    </div>
  );
};

export default Products;
