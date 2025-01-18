import { Link, useLocation } from "react-router-dom";
import { cn } from "@/utils/general.util";

interface Props {
  item: {
    name: string;
    to: string;
    icon: React.ReactNode;
  };
  location: ReturnType<typeof useLocation>;
  closeSidebar: () => void;
}

const MenuItem = ({ item, location, closeSidebar }: Props) => (
  <li
    className={cn(
      "flex items-center justify-center border-l-4",
      location.pathname === item.to ? "border-l-primary" : "border-l-transparent"
    )}
  >
    <Link
      className={cn(
        "w-full mx-5 px-5 py-3 rounded-md flex items-center justify-start gap-2 text-sm",
        location.pathname === item.to ? "bg-primary text-light-100" : "text-dark-100"
      )}
      to={item.to}
      onClick={ () => { closeSidebar && closeSidebar() } }
    >
      {item.icon}
      {item.name}
    </Link>
  </li>
);

export default MenuItem;
