import { BiLogOut } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineSetting } from "react-icons/ai";
import { MdOutlineCalendarToday, MdOutlineContactMail, MdOutlineTableChart } from "react-icons/md";
import { FaProductHunt, FaHeart, FaRegComment, FaListUl, FaUserFriends, FaFileInvoice } from "react-icons/fa";

export const ITEMS_MENU = [
  { name: "Dashboard", to: "/", icon: <RxDashboard size={15} /> },
  { name: "Productos", to: "/products", icon: <FaProductHunt size={15} /> },
  { name: "Favoritos", to: "/favorites", icon: <FaHeart size={15} /> },
  { name: "Bandeja de Entrada", to: "/inbox", icon: <FaRegComment size={15} /> },
  { name: "Listas de Pedidos", to: "/order-lists", icon: <FaListUl size={15} /> },
  { name: "Stock de Productos", to: "/product-stock", icon: <FaListUl size={15} /> },
  { name: "Precios", to: "/pricing", icon: <MdOutlineCalendarToday size={15} /> },
  { name: "Calendario", to: "/calendar", icon: <MdOutlineCalendarToday size={15} /> },
  { name: "Tareas", to: "/to-do", icon: <MdOutlineCalendarToday size={15} /> },
  { name: "Contacto", to: "/contact", icon: <MdOutlineContactMail size={15} /> },
  { name: "Facturas", to: "/invoices", icon: <FaFileInvoice size={15} /> },
  { name: "Elementos de la Interfaz", to: "/ui-elements", icon: <MdOutlineTableChart size={15} /> },
  { name: "Equipo", to: "/team", icon: <FaUserFriends size={15} /> },
  { name: "Tabla", to: "/table", icon: <MdOutlineTableChart size={15} /> },
  { name: "Ajustes", to: "/settings", icon: <AiOutlineSetting size={15} /> },
  { name: "Cerrar Sesión", to: "/logout", icon: <BiLogOut size={15} /> },
];
