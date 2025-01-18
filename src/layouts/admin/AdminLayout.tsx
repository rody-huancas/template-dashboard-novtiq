import { Outlet } from "react-router-dom";

import Header from "@/components/common/admin-layout/Header";
import Sidebar from "@/components/common/admin-layout/Sidebar";

import { cn } from "@/utils/general.util";
import { useThemeStore } from "@/store/theme/useTheme";

const AdminLayout = () => {
  const menuIsOpen = useThemeStore((state) => state.menuIsOpen);

  return (
    <>
      <Header />
      <Sidebar />

      <main
        className={cn( "pt-20 transition-all duration-500 ease-in-out", menuIsOpen ? "sm:pl-content" : "px-0" )}
      >
        <section className="p-10">
          <Outlet />
        </section>
      </main>
    </>
  );
};

export default AdminLayout;
