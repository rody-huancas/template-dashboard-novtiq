import { RxDashboard } from "react-icons/rx";
import { FaProductHunt, FaUserFriends } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

export const ITEMS_MENU = [
  { name: "Dashboard", to: "/", icon: <RxDashboard size={15} /> },
  { name: "Products", to: "/products", icon: <FaProductHunt size={15} /> },
  { name: "Users", to: "/users", icon: <FaUserFriends size={15} /> },
  { name: "Settings", to: "/settings", icon: <AiOutlineSetting size={15} /> },
];
