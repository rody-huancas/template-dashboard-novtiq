import { IconType } from "react-icons";
import { FaBoxOpen } from "react-icons/fa";
import { HiMiniUsers } from "react-icons/hi2";
import { LuChartSpline } from "react-icons/lu";

type IconColor = "yellow" | "green" | "indigo" | "orange";
type Status = "Enviado" | "Pendiente" | "Cancelado";

interface Metric {
  icon : IconType;
  title: string;
  value: string | number;
  trend: {
    value     : number;
    text      : string;
    isPositive: boolean;
  };
  iconColor: IconColor;
}

interface Product {
  id         : string;
  productName: string;
  location   : string;
  dateTime   : string;
  piece      : number;
  amount     : number;
  status     : Status;
  image      : string;
}

interface DashboardData {
  metrics: Metric[];
  table  : {
    title: string;
    data : Product[];
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
    ],
  },
};
