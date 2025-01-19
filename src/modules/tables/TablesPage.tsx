import { Title } from "@/components/ui/title/Title";
import { OrderListTable } from "@/components/modules/order-list/OrderListTable";
import UserTable from "@/components/modules/tables/UserTable";
import TableProductDashboard from "@/components/modules/dashboard/TableProductDashboard";

const TablesPage = () => {
  return (
    <div className="space-y-7">
      <Title size="h3">Tablas</Title>

      <UserTable />

      <TableProductDashboard />

      <OrderListTable />
    </div>
  );
};

export default TablesPage;
