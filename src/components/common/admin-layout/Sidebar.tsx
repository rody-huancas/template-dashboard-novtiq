import { Link, useLocation } from "react-router-dom";

import { cn } from "@/utils/general.util";
import { ITEMS_MENU } from "@/data/menu";
import { useThemeStore } from "@/store/theme/useTheme";

const Sidebar = () => {
  const location = useLocation();
  const menuIsOpen = useThemeStore( state => state.menuIsOpen );

  return (
    <aside className={cn("w-content h-dvh fixed top-20 bg-light-100 transition-all duration-500 ease-in-out", menuIsOpen ? "left-0" : "-left-full")}>
      <nav className="w-full py-5">
        <ul className="flex flex-col">
          {ITEMS_MENU.map((item) => (
            <li
              key={item.name}
              className={cn(
                "flex items-center justify-center border-l-4",
                location.pathname === item.to ? "border-l-primary" : "border-l-transparent"
              )}
            >
              <Link
                className={cn(
                  "w-full mx-5 px-5 py-3 rounded-md flex items-center justify-start gap-2",
                  location.pathname === item.to ? "bg-primary text-light-100" : "text-dark-100"
                )}
                to={item.to}
              >
                {item.icon}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
