import React, { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Button,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { EditIcon } from "../components/icon/EditIcon";
import { DeleteIcon } from "../components/icon/DeleteIcon";
import instance from "../axiosInstance";
import NavbarMin from "../components/Navbar/adminnav";
const columns = [
  { name: "ID", uid: "id" },
  { name: "NAME", uid: "nama_barang" },
  { name: "HARGA", uid: "harga" },
  { name: "STOCK", uid: "stok" },
  { name: "IMAGE", uid: "gambar" },
  { name: "KETERANGAN", uid: "keterangan" },
  { name: "CATEGORY", uid: "category_name" },
  { name: "ACTIONS", uid: "actions" },
];

const Barang = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await instance.get("/admin/barang");
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const token = localStorage.getItem("token");

  const handleDelete = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await instance.delete(`/admin/barang/${id}`, { headers });
      navigate("/admin/barang", {
        replace: true,
      });
    } catch (error) {
      console.log("Gagal menghapus data", error);
    }
  };

  return (
    <div>
      <NavbarMin />
      <div className='flex justify-center'>
        <table className='table-auto'>
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.uid}>{col.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((items) => (
              <tr key={items.id}>
                <td>{items.id}</td>
                <td>{items.nama_barang}</td>
                <td>{items.harga}</td>
                <td>{items.stok}</td>
                <td><img src={"http://localhost:8000/assets/img/product/"+items.gambar} width={128} height={128}></img></td>
                <td>{items.keterangan}</td>
                <td>{items.category_name}</td>
                <td className="flex gap-4">
                  <Button isIconOnly onPress={() => handleEdit(items.id)} color=''>
                    <EditIcon />
                  </Button>
                  <Button isIconOnly onPress={() => handleDelete(items.id)} color=''>
                    <DeleteIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Barang;
