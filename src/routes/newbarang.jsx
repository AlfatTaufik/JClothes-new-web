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

const NewBarang = () => {
  const [namaBarang, setNamaBarang] = useState("");
  const [harga, setHarga] = useState("");
  const [stok, setStok] = useState("");
  const [gambar, setGambar] = useState(null);
  const [keterangan, setKeterangan] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

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

    fetchCategories();
  }, []);

  const newItem = async () => {
    const formData = new FormData();
    formData.append("nama_barang", namaBarang);
    formData.append("harga", harga);
    formData.append("stok", stok);
    formData.append("gambar", gambar);
    formData.append("keterangan", keterangan);
    formData.append("category_id", categoryId);

    const token = localStorage.getItem("token");

    try {
      const response = await instance.post("/admin/barang", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/barang", {
        replace: true,
      });
    } catch (error) {
      console.error("Failed to create new item:", error);
    }
  };

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
              onPress={newItem}
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

export default NewBarang;
