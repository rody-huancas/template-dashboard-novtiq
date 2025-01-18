import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MenuItem from "./MenuItem";
import useMediaQuery from "@/hooks/useMediaQuery";

import { cn } from "@/utils/general.util";
import { ITEMS_MENU } from "@/data/menu";
import { useThemeStore } from "@/store/theme/useTheme";

const Sidebar = () => {
  const location = useLocation();
  const menuIsOpen = useThemeStore((state) => state.menuIsOpen);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const closeSidebar = () => {
    useThemeStore.getState().setMenuIsOpen(false);
  };

  useEffect(() => {
    if (menuIsOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuIsOpen, isMobile]);

  return (
    <>
      {isMobile && menuIsOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={closeSidebar}
        />
      )}

      <aside
        className={cn(
          "w-content h-dvh overflow-y-scroll fixed top-20 bg-light-100 transition-all duration-500 ease-in-out z-40",
          menuIsOpen ? "left-0" : "-left-full"
        )}
      >
        <nav className="w-full pt-5">
          <ul className="flex flex-col gap-1">
            {ITEMS_MENU.map((section, index) => (
              <div key={index}>
                <h3 className="px-5 text-sm font-semibold text-dark-100/70">
                  {section.sectionTitle}
                </h3>
                <ul>
                  {section.items.map((item) => (
                    <MenuItem
                      key={item.name}
                      item={item}
                      location={location}
                      closeSidebar={isMobile ? closeSidebar : () => {}}
                    />
                  ))}
                </ul>
                <hr className="my-3 border-t border-light-200" />
              </div>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
