import DataTable from "@/components/ui/table/Table";
import {
  columnsProductDashboard,
  PropsProductDashboard,
} from "./columns-dashboard";
import { Title } from "@/components/ui/title/Title";

const sampleData: PropsProductDashboard[] = [
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
];

export const TableProductDashboard = () => {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-lg bg-light-100">
      <Title size="h4">Últimos Productos</Title>

      <DataTable columns={columnsProductDashboard} data={sampleData} />
    </div>
  );
};
