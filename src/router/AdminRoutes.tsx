import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminLayout from "@/layouts/admin/AdminLayout";
import Dashboard from "@/modules/dashboard/Dashboard";

const ProductsPage = lazy(() => import("@/modules/products/ProductsPage"));

const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route
            path="/products"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <ProductsPage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRoutes;
