import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "@/layouts/admin/AdminLayout";
import Dashboard from "@/modules/dashboard/Dashboard";
import { Spinner } from "@/components/ui/loader/Spinner";
import NotFound from "@/modules/not-found/NotFound";

const routes = {
  products    : lazy(() => import("@/modules/products/ProductsPage")),
  favorites   : lazy(() => import("@/modules/favorites/FavoritesPage")),
  inbox       : lazy(() => import("@/modules/inbox/InboxPage")),
  orderList   : lazy(() => import("@/modules/order-list/OrderListPage")),
  productStock: lazy(() => import("@/modules/product-stock/ProductStockPage")),
  pricing     : lazy(() => import("@/modules/pricing/PrincingPage")),
  calendar    : lazy(() => import("@/modules/calendar/CalendarPage")),
  tasks       : lazy(() => import("@/modules/tasks/TasksPage")),
  contact     : lazy(() => import("@/modules/contact/ContactPage")),
  invoice     : lazy(() => import("@/modules/invoice/InvoicePage")),
};

const LazyLoadWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<Spinner />}>{children}</Suspense>
);

const routeConfig = [
  { path: "products", Component: routes.products },
  { path: "favorites", Component: routes.favorites },
  { path: "inbox", Component: routes.inbox },
  { path: "order-lists", Component: routes.orderList },
  { path: "product-stock", Component: routes.productStock },
  { path: "pricing", Component: routes.pricing },
  { path: "calendar", Component: routes.calendar },
  { path: "to-do", Component: routes.tasks },
  { path: "contact", Component: routes.contact },
  { path: "invoices", Component: routes.invoice },
] as const;

const AdminRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {routeConfig.map(({ path, Component }) => (
            <Route
              key={path}
              path={path}
              element={
                <LazyLoadWrapper>
                  <Component />
                </LazyLoadWrapper>
              }
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AdminRoutes;
