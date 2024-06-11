import React from "react";
import Admin from "./routes/admin.jsx";
import Barang from "./routes/Barang.jsx";
import NewBarang from "./routes/newbarang.jsx";
import EditBarang from "./routes/editbarang.jsx";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { NextUIProvider } from "@nextui-org/react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Category from "./routes/CategoryById.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/admin/barang",
    element: <Barang />,
  },
  {
    path: "/admin/barang/new",
    element: <NewBarang />,
  },
  {
    path: "/admin/barang/edit/:id",
    element: <EditBarang />,
  },
  {
    path: "/category/:id",
    element: <Category />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
