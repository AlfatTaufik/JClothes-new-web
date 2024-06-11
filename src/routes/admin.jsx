import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Input,
  Image,
  Button,
} from "@nextui-org/react";

import { EyeFilledIcon } from "../components/icon/EyeFilledIcon";
import { EyeSlashIcon } from "../components/icon/EyeSlashIcon";
import { useState } from "react";
import instance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

const admin = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const handleLogin = async () => {
    try {
      const response = await instance.post("/admin/login", {
        email: email,
        password: password,
      });
      const token = response.data.data.token;
      localStorage.setItem("token", token);
      navigate("/admin/barang", {
        replace: true,
      });
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <div className='flex w-screen h-screen justify-center items-center'>
      <Card className='max-w-[400px]'>
        <CardHeader className='flex gap-3'>
          <Image
            alt='nextui logo'
            height={40}
            radius='sm'
            src='../src/assets/Jclothes-img.svg'
            width={40}
          />
          <div className='flex flex-col'>
            <p className='text-md'>Jclothes admin panel</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody className='w-96'>
          <Input
            type='Email'
            variant='underlined'
            label='email'
            className='mb-10'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            variant='underlined'
            label='Password'
            className='mb-10'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endContent={
              <button
                className='focus:outline-none'
                type='button'
                onClick={toggleVisibility}>
                {isVisible ? (
                  <EyeSlashIcon className='text-2xl text-default-400 pointer-events-none' />
                ) : (
                  <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
          />
          <Button
            onPress={handleLogin}
            className='w-24 self-end'
            color='default'>
            Login
          </Button>
        </CardBody>
        <Divider />
      </Card>
    </div>
  );
};

export default admin;
