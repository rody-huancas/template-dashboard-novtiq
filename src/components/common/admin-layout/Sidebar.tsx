import { Link, useLocation } from "react-router-dom";

import { cn } from "@/utils/general.util";
import { ITEMS_MENU } from "@/data/menu";
import { useThemeStore } from "@/store/theme/useTheme";

const Sidebar = () => {
  const location = useLocation();
  const menuIsOpen = useThemeStore(state => state.menuIsOpen);

  return (
    <aside
      className={cn(
        "w-content h-dvh overflow-y-scroll fixed top-20 bg-light-100 transition-all duration-500 ease-in-out",
        menuIsOpen ? "left-0" : "-left-full"
      )}
    >
      <nav className="w-full pt-5">
        <ul className="flex flex-col gap-1">
          {ITEMS_MENU.map((section, index) => (
            <div key={index}>
              <h3 className="px-5 text-sm font-semibold text-dark-100/70">{section.sectionTitle}</h3>
              <ul>
                {section.items.map((item) => (
                  <li
                    key={item.name}
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
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr className="my-3 border-t border-light-200" />
            </div>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
