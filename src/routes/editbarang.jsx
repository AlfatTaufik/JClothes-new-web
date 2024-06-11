import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Select,
  SelectItem,
  Button,
} from "@nextui-org/react";
import { useState, useEffect } from "react";
import instance from "../axiosInstance";
import { useNavigate } from "react-router-dom";
import NavbarMin from "../components/Navbar/adminnav";
import { useParams } from "react-router-dom";

const EditBarang = () => {
  const token = localStorage.getItem("token");

  const [namaBarang, setNamaBarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [gambar, setGambar] = useState(null);
  const [keterangan, setKeterangan] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("nama_barang", namaBarang);
      formData.append("harga", harga);
      formData.append("stok", stok);
      formData.append("gambar", gambar);
      formData.append("keterangan", keterangan);
      formData.append("category_id", categoryId);

      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };

      // Melakukan POST_method=PUT request dengan axios
      const response = await instance.post(`/admin/barang/${id}`, formData, { headers });

      // Log respons dari server
      console.log("Response:", response);

      console.log("Data berhasil diperbarui");
      navigate("/admin/barang", {
        replace: true,
      });
    } catch (error) {
      console.error("Gagal memperbarui data", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await instance.get("/category");
        setCategory(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchProduct = async () => {
      try {
        const response = await instance.get(`/admin/barang/${id}`);
        const productData = response.data.data;
        setNamaBarang(productData.nama_barang);
        setHarga(productData.harga);
        setStok(productData.stok);
        setGambar(productData.gambar);
        setKeterangan(productData.keterangan);
        setCategoryId(productData.category_id);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
    fetchProduct();
  }, [id]);

  return (
    <div className=''>
      <NavbarMin />
      <div className='flex w-screen h-screen justify-center items-center'>
        <Card className='max-w-[400px]'>
          <CardHeader className='flex gap-3'>
            <div className='flex flex-col'>
              <p className='text-md'>Jclothes create new item</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className='w-96'>
            <Input
              type='text'
              variant='underlined'
              label='Nama Barang'
              className='mb-10'
              value={namaBarang}
              onChange={(e) => setNamaBarang(e.target.value)}
            />
            <Input
              variant='underlined'
              label='Harga'
              className='mb-10'
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              type='text'
            />
            <Input
              variant='underlined'
              label='Stok'
              className='mb-10'
              value={stok}
              onChange={(e) => setStok(e.target.value)}
              type='text'
            />
            <Input
              variant='underlined'
              label='Keterangan'
              className='mb-10'
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              type='text'
            />
            <Input
              variant='underlined'
              placeholder='Gambar'
              className='mb-10'
              accept="/image/*"
              onChange={(e) => setGambar(e.target.files[0])}
              type='file'
            />
            <Select
              variant='underlined'
              label='Select a category'
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}>
              {category.map((cat) => (
                <SelectItem key={cat.id} value={cat.id}>
                  {cat.name}
                </SelectItem>
              ))}
            </Select>
            <Button
              onPress={handleUpdate}
              className='w-24 mt-10 self-end'
              color='default'>
              Submit
            </Button>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </div>
  );
};

export default EditBarang;
