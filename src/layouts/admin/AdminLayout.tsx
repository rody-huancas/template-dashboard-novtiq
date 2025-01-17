import { Outlet } from "react-router-dom";

import Header from "@/components/common/admin-layout/Header";
import Sidebar from "@/components/common/admin-layout/Sidebar";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />

      <main className="pt-20 pl-content">
        <Outlet />
      </main>
    </>
  );
};

export default AdminLayout;
