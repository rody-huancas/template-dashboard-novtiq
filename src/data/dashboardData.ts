import { IconType } from "react-icons";
import { FaBoxOpen } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { LuChartSpline } from "react-icons/lu";

type IconColor = "yellow" | "green" | "indigo" | "orange";
type Status = "Enviado" | "Pendiente" | "Cancelado";

interface Metric {
  icon: IconType;
  title: string;
  value: string | number;
  trend: {
    value: number;
    text: string;
    isPositive: boolean;
  };
  iconColor: IconColor;
}

interface Product {
  id: string;
  productName: string;
  location: string;
  dateTime: string;
  piece: number;
  amount: number;
  status: Status;
  image: string;
}

interface DashboardData {
  metrics: Metric[];
  table: {
    title: string;
    data: Product[];
  };
}

export const dashboardData: DashboardData = {
  metrics: [
    {
      icon: HiMiniUsers,
      title: "Usuarios Totales",
      value: "40.404",
      trend: { value: 8.5, text: "desde ayer", isPositive: true },
      iconColor: "indigo",
    },
    {
      icon: FaBoxOpen,
      title: "Ordenes Totales",
      value: "1421",
      trend: { value: 9.5, text: "desde la semana pasada", isPositive: true },
      iconColor: "yellow",
    },
    {
      icon: LuChartSpline,
      title: "Ventas Totales",
      value: "$89.000",
      trend: { value: 1.4, text: "bajo desde ayer", isPositive: false },
      iconColor: "green",
    },
    {
      icon: HiMiniUsers,
      title: "Pendientes Totales",
      value: "2040",
      trend: { value: 1.8, text: "desde ayer", isPositive: true },
      iconColor: "orange",
    },
  ],
  table: {
    title: "Últimos Productos",
    data: [
      {
        id: "1",
        productName: "Apple Watch",
        location: "6096 Aterrizaje de Marjolaine",
        dateTime: "12.09.2019 - 12:53 PM",
        piece: 423,
        amount: 34295.0,
        status: "Enviado",
        image: "https://pe.tiendasishop.com/cdn/shop/files/IMG-14866983.jpg",
      },
      {
        id: "2",
        productName: "MacBook Pro",
        location: "4517 Avenida Washington",
        dateTime: "12.09.2019 - 2:20 PM",
        piece: 123,
        amount: 1299.99,
        status: "Pendiente",
        image: "https://www.appleperu.pe/wp-content/uploads/MACBOOK-PRO.jpg",
      },
      {
        id: "3",
        productName: "iPhone 13",
        location: "2972 Camino Westheimer",
        dateTime: "12.09.2019 - 3:45 PM",
        piece: 242,
        amount: 999.99,
        status: "Enviado",
        image:
          "https://pe.tiendasishop.com/cdn/shop/files/IMG-12496118_71065b39-c7c6-4861-b811-7c0ea6f9c884.jpg",
      },
      {
        id: "4",
        productName: "AirPods Pro",
        location: "3891 Rancho Vista Dr",
        dateTime: "12.09.2019 - 4:10 PM",
        piece: 531,
        amount: 249.99,
        status: "Cancelado",
        image:
          "https://mac-center.com.pe/cdn/shop/files/AirPods_Pro_2nd_Gen_with_USB-C_PDP_Image_Position-1__global.jpg",
      },
      {
        id: "5",
        productName: "iPad Air",
        location: "1901 Círculo Thornridge",
        dateTime: "12.09.2019 - 5:30 PM",
        piece: 321,
        amount: 599.99,
        status: "Enviado",
        image:
          "https://pe.tiendasishop.com/cdn/shop/files/IMG-13190722_7e2cb349-6c23-41ad-bab8-0b7809ea434b.jpg",
      },
      {
        id: "6",
        productName: "MacBook Pro M3",
        location: "9985 Calle San Ignacio",
        dateTime: "12.10.2019 - 10:00 AM",
        piece: 89,
        amount: 2800.0,
        status: "Enviado",
        image:
          "https://www.isolutionsperu.com/wp-content/uploads/mbp-spacegray-select-202011.jpg",
      },
      {
        id: "7",
        productName: "iPhone 15 Pro Max",
        location: "4621 Avenida de los Sueños",
        dateTime: "12.10.2019 - 11:30 AM",
        piece: 150,
        amount: 1299.0,
        status: "Pendiente",
        image:
          "https://claroperupoc.vtexassets.com/arquivos/ids/1898529/naturaltt3.png",
      },
      {
        id: "8",
        productName: "iPad Pro 12.9",
        location: "2345 Calle del Sol",
        dateTime: "12.10.2019 - 1:20 PM",
        piece: 200,
        amount: 1099.0,
        status: "Cancelado",
        image:
          "https://pe.tiendasishop.com/cdn/shop/files/iPad_Pro_Wi-Fi_12-9_in_6th_generation_Space_Gray_PDP_Image_Position-1b__MXLA.jpg",
      },
      {
        id: "9",
        productName: "Mac mini M2",
        location: "3456 Calle Luna Nueva",
        dateTime: "12.11.2019 - 9:15 AM",
        piece: 190,
        amount: 599.0,
        status: "Enviado",
        image:
          "https://pe.tiendasishop.com/cdn/shop/files/IMG-8294195_0478762b-676f-436a-b36b-2ed10d96ff1e.jpg",
      },
      {
        id: "10",
        productName: 'iMac 24"',
        location: "7123 Camino Verde",
        dateTime: "12.11.2019 - 2:30 PM",
        piece: 75,
        amount: 1299.0,
        status: "Pendiente",
        image:
          "https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/3083/PMP20000222202/full_image-1.jpeg",
      },
      {
        id: "11",
        productName: "AirPods Max",
        location: "6542 Avenida Azul",
        dateTime: "12.12.2019 - 1:45 PM",
        piece: 230,
        amount: 549.0,
        status: "Enviado",
        image:
          "https://mac-center.com.pe/cdn/shop/files/AirPods_Max_2024_Basalt_Black_PDP_Image_Position_01__GENS_cb3604b3-39d6-4ffb-becd-4e9c02740a4a.jpg",
      },
      {
        id: "12",
        productName: "Magic Keyboard",
        location: "3456 Calle Real",
        dateTime: "12.12.2019 - 3:00 PM",
        piece: 300,
        amount: 99.0,
        status: "Pendiente",
        image:
          "https://pe.tiendasishop.com/cdn/shop/files/IMG-13087526_c14539da-04f6-466e-bc6f-429d13b57795.jpg",
      },
    ],
  },
};
